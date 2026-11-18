/* simulator.js: UI of auc-simulator.html (depends on stats.js, scenarios.js, ui-common.js). */
"use strict";
/* ---------- App state ---------- */
const PIN_COLORS = ["#2f9e44", "#f08c00", "#1098ad", "#e64980", "#5c940d"];
const S = {
  cfg: null, theoKey: "", theoBase: null, theo: null,
  rawPos: null, rawNeg: null, pos: null, neg: null, y: [], s: [],
  roc: null, auc: NaN, dl: null, smin: 0, smax: 1,
  boot: { vals: null, lo: NaN, hi: NaN, progress: 0 }, bootToken: null,
  t: NaN, pins: [], reps: null, repToken: null, repsCleared: false,
  pair: { n: 0, w: 0, last: null },
  scenario: "textbook", modified: false, histMode: "density", applying: false, lastTransform: "none"
};

/* ---------- Controls ---------- */
function buildParamUI(which, dist){
  const box = $("params" + which); box.innerHTML = "";
  const fam = FAMILIES[dist.family];
  for (const s of fam.params){
    const row = document.createElement("div"); row.className = "prow";
    const id = which + "_" + s.k, v = dist.p[s.k];
    row.innerHTML = `<label for="${id}">${s.label}</label>` +
      `<input type="range" min="${s.smin}" max="${s.smax}" step="${s.step}" value="${Math.min(s.smax, Math.max(s.smin, v))}" aria-label="${s.label} (${which})">` +
      `<input type="number" id="${id}" min="${s.min}" max="${s.max}" step="${s.step}" value="${v}">`;
    const [rng, num] = row.querySelectorAll("input");
    rng.addEventListener("input", () => { num.value = +(+rng.value).toFixed(4); onParamChange(); });
    num.addEventListener("input", () => { if (num.value !== "" && isFinite(+num.value)) rng.value = num.value; onParamChange(); });
    box.appendChild(row);
  }
}
function setDist(which, dist){
  $("fam" + which).value = dist.family;
  buildParamUI(which, dist);
}
function readDist(which){
  const fam = $("fam" + which).value, p = {};
  for (const s of FAMILIES[fam].params) p[s.k] = +$(which + "_" + s.k).value;
  return cleanDist({ family: fam, p });
}
function readConfig(){
  return {
    Y: readDist("Y"), N: readDist("N"),
    nY: Math.round(clampNum($("nY").value, 3, 20000, 500)), nN: Math.round(clampNum($("nN").value, 3, 20000, 500)),
    seed: (parseInt($("seed").value, 10) || 0) >>> 0,
    transform: hasOwn(TRANSFORMS, $("transform").value) ? $("transform").value : "none",
    level: clampNum($("level").value, 0.5, 0.999, 0.95),
    B: Math.round(clampNum($("bootB").value, 100, 5000, 1000))
  };
}
const expKey = c => JSON.stringify([c.Y, c.N, c.nY, c.nN, c.transform, c.level]);

let pendingUpdate = null;
function scheduleUpdate(){
  if (pendingUpdate) return;
  pendingUpdate = setTimeout(() => { pendingUpdate = null; update(); }, 40);
}
function onParamChange(){
  if (!S.applying){ S.modified = true; renderLesson(); }
  scheduleUpdate();
}

/* ---------- Core update: theory + one sample ---------- */
function update(){
  const cfg = readConfig(); S.cfg = cfg;
  const tk = JSON.stringify([cfg.Y, cfg.N]);
  if (tk !== S.theoKey){ S.theoBase = trueROC(cfg.Y, cfg.N); S.theoKey = tk; }
  S.theo = transformROC(S.theoBase, cfg.transform);

  // keep the threshold at the same raw-score position when the transform changes
  if (S.lastTransform !== cfg.transform && isFinite(S.t)){
    S.t = TRANSFORMS[cfg.transform].f(TRANSFORMS[S.lastTransform].inv(S.t));
  }
  S.lastTransform = cfg.transform;

  const smp = drawSample(cfg, makeRNG(cfg.seed));
  S.rawPos = smp.rawPos; S.rawNeg = smp.rawNeg; S.pos = smp.pos; S.neg = smp.neg;
  const y = new Array(cfg.nY + cfg.nN), s = new Array(cfg.nY + cfg.nN);
  let mn = Infinity, mx = -Infinity;
  for (let i = 0; i < cfg.nY; i++){ y[i] = 1; s[i] = S.pos[i]; }
  for (let j = 0; j < cfg.nN; j++){ y[cfg.nY + j] = 0; s[cfg.nY + j] = S.neg[j]; }
  for (const v of s){ if (v < mn) mn = v; if (v > mx) mx = v; }
  S.y = y; S.s = s; S.smin = mn; S.smax = mx;
  S.P = Float64Array.from(S.pos).sort(); S.Q = Float64Array.from(S.neg).sort();
  S.roc = rocFromSamples(S.pos, S.neg); S.auc = S.roc.auc;
  S.dl = delongFromSamples(S.pos, S.neg, cfg.level);

  if (!isFinite(S.t) || S.t < mn || S.t > mx) S.t = youdenThreshold(S.roc);
  if (!isFinite(S.t)) S.t = (mn + mx) / 2;
  syncThresholdSlider();

  if (S.reps && S.reps.key !== expKey(cfg)){ S.reps = null; S.repsCleared = true; }
  if (S.repToken && S.repToken.key !== expKey(cfg)) cancelReps();
  S.pair = { n: 0, w: 0, last: null };

  $("toRobust").href = "auc-robustness.html#" + encodeSimConfig(cfg, currentLabel());
  renderAll();
  startBootstrap();
}

/* ---------- Async work in small slices (keeps the page responsive) ---------- */
function runChunked(total, step, onProgress, token){
  return new Promise(resolve => {
    let i = 0;
    (function tick(){
      if (token.cancelled) return resolve(false);
      const t0 = performance.now();
      while (i < total && performance.now() - t0 < 16){ step(i); i++; }
      onProgress(i / total);
      if (i < total) setTimeout(tick, 0); else resolve(true);
    })();
  });
}
function startBootstrap(){
  if (S.bootToken) S.bootToken.cancelled = true;
  const tok = { cancelled: false }; S.bootToken = tok;
  const cfg = S.cfg, B = cfg.B, vals = new Float64Array(B);
  const rep = makeAUCResampler(S.pos, S.neg), rand = mulberry32(cfg.seed ^ 0x9e3779b9);
  S.boot = { vals: null, lo: NaN, hi: NaN, progress: 0 };
  let lastDraw = 0;
  runChunked(B, i => { vals[i] = rep(rand); }, p => {
    S.boot.progress = p;
    const now = performance.now();
    if (p < 1 && now - lastDraw > 120){ lastDraw = now; renderBootKPI(); drawBoot(); }
  }, tok).then(done => {
    if (!done) return;
    vals.sort();
    const a = (1 - cfg.level) / 2;
    S.boot = { vals, lo: quantile(vals, a), hi: quantile(vals, 1 - a), progress: 1 };
    renderBootKPI(); drawBoot();
  });
}

/* ---------- Threshold ---------- */
function syncThresholdSlider(){
  const sl = $("threshold"), span = (S.smax - S.smin) || 1;
  sl.min = S.smin - span * 1e-3; sl.max = S.smax + span * 1e-3; sl.step = span / 1000;
  sl.value = S.t;
}
function setThreshold(t){
  S.t = Math.min(+$("threshold").max, Math.max(+$("threshold").min, t));
  $("threshold").value = S.t;
  renderThresholdViews();
}

/* ---------- Rendering ---------- */
function renderAll(){
  renderTruthLive(); renderLesson();
  drawHist(); drawROC(); drawBoot(); renderKPIs(); renderCM(); renderPair(); renderReps();
}
function renderThresholdViews(){ drawHist(); drawROC(); renderKPIs(); renderCM(); }

function renderTruthLive(){
  const c = S.cfg, tr = TRANSFORMS[c.transform];
  $("truthLive").innerHTML = `True AUC for these distributions: <b>${S.theo.auc.toFixed(4)}</b>` +
    (c.transform !== "none" ? `<br><span class="muted">(transform “${tr.label.split(" (")[0]}” ${tr.inc ? "leaves it unchanged" : "flips it to 1 − AUC"})</span>` : "") +
    `<br><span class="muted">Prevalence in sample: ${pct(c.nY / (c.nY + c.nN))}</span>`;
}
function renderLesson(){
  const sc = SCENARIOS[S.scenario] || CUSTOM_LESSON;
  $("lesson").innerHTML = `<h3>${sc.label}</h3><p>${sc.text}</p><p class="try"><b>Try:</b> ${sc.tryIt}</p>` +
    (S.modified && SCENARIOS[S.scenario] ? `<p class="modified">You've changed the settings since loading this scenario, so some numbers above may no longer apply.</p>` : "");
}

function renderKPIs(){
  const lvl = Math.round(S.cfg.level * 100), T = S.theo.auc, d = S.dl;
  $("kTrue").textContent = T.toFixed(3);
  $("kAuc").textContent = f3(S.auc);
  const err = S.auc - T;
  $("kAucSub").innerHTML = `error vs truth: ${err >= 0 ? "+" : "−"}${Math.abs(err).toFixed(3)}` +
    (d.se > 0 ? ` (${(Math.abs(err) / d.se).toFixed(1)} SE)` : "");
  $("kDelongK").textContent = `${lvl}% CI · DeLong`;
  $("kDelong").textContent = isFinite(d.lo) ? `[${f3(d.lo)}, ${f3(d.hi)}]` : "—";
  $("kDelongSub").innerHTML = d.degenerate ? `<span class="bad">degenerate (SE = 0)</span>` :
    `SE ${d.se.toFixed(4)} · ${covers(d.lo, d.hi, T)}`;
  renderBootKPI();
  const m = metricsSorted(S.P, S.Q, S.t);
  $("kThr").textContent = `Sens ${m.sens.toFixed(2)} · Spec ${m.spec.toFixed(2)}`;
  $("kThrSub").textContent = `t = ${fmtNum(S.t)} · PPV ${m.prec.toFixed(2)} · J ${m.youden.toFixed(2)}`;
  $("thresholdVal").textContent = `t = ${fmtNum(S.t)}`;
}
function covers(lo, hi, T){
  return (lo <= T && T <= hi) ? `<span class="ok">contains true AUC ✓</span>` : `<span class="bad">misses true AUC ✗</span>`;
}
function renderBootKPI(){
  const lvl = Math.round(S.cfg.level * 100), b = S.boot;
  $("kBootK").textContent = `${lvl}% CI · Bootstrap`;
  if (!b.vals){ $("kBoot").textContent = `… ${Math.round(100 * b.progress)}%`; $("kBootSub").textContent = `resampling B = ${S.cfg.B}`; return; }
  $("kBoot").textContent = `[${f3(b.lo)}, ${f3(b.hi)}]`;
  $("kBootSub").innerHTML = `B = ${b.vals.length} · ${covers(b.lo, b.hi, S.theo.auc)}`;
}

function renderCM(){
  const m = metricsSorted(S.P, S.Q, S.t);
  $("cmWrap").innerHTML =
    `<table><tr><th></th><th>Predicted Y (s ≥ t)</th><th>Predicted N (s &lt; t)</th><th>total</th></tr>` +
    `<tr><th style="color:var(--y)">Actual Y</th><td class="tp">TP ${m.tp}</td><td>FN ${m.fn}</td><td>${m.tp + m.fn}</td></tr>` +
    `<tr><th style="color:var(--n)">Actual N</th><td>FP ${m.fp}</td><td class="tn">TN ${m.tn}</td><td>${m.fp + m.tn}</td></tr></table>`;
  const items = [["Sensitivity (TPR)", m.sens], ["Specificity", m.spec], ["FPR", 1 - m.spec], ["PPV (precision)", m.prec],
    ["NPV", m.npv], ["Accuracy", m.acc], ["F1", m.f1], ["Youden J", m.youden], ["Prevalence", m.prevalence]];
  $("cmMetrics").innerHTML = items.map(([k, v]) => `<div><span>${k}</span><b>${v.toFixed(3)}</b></div>`).join("");
  $("cmNote").innerHTML = m.predPos ?
    `${m.predPos} cases are flagged as Y; ${m.tp} of them (${pct(m.prec, 0)}) really are Y. ` +
    `${m.fn} of ${m.tp + m.fn} Y cases are missed.` : "No case is flagged as Y at this threshold.";
}

/* ----- histogram ----- */
function drawHist(){
  const svg = $("histPlot"); clearSVG(svg);
  const W = 600, H = 360, m = { l: 52, r: 12, t: 16, b: 42 };
  if (!S.pos) return;
  const cfg = S.cfg, dens = S.histMode === "density", nb = Math.round(clampNum($("bins").value, 5, 120, 40));
  let lo = S.smin, hi = S.smax; const pad = (hi - lo) * 0.03 || 0.5; lo -= pad; hi += pad;
  const bw = (hi - lo) / nb, cY = new Float64Array(nb), cN = new Float64Array(nb);
  for (const v of S.pos) cY[Math.min(nb - 1, Math.max(0, Math.floor((v - lo) / bw)))]++;
  for (const v of S.neg) cN[Math.min(nb - 1, Math.max(0, Math.floor((v - lo) / bw)))]++;
  const sY = dens ? 1 / (cfg.nY * bw) : 1, sN = dens ? 1 / (cfg.nN * bw) : 1;
  let barMax = 0; for (let i = 0; i < nb; i++) barMax = Math.max(barMax, cY[i] * sY, cN[i] * sN);

  // true densities, pushed through the score transform: f_T(g(s)) = f(s) / |g'(s)|
  const tr = TRANSFORMS[cfg.transform];
  const curve = (dist, raw, n) => {
    let [a, b] = distView(dist), rmin = Infinity, rmax = -Infinity;
    for (const v of raw){ if (v < rmin) rmin = v; if (v > rmax) rmax = v; }
    a = Math.min(a, rmin); b = Math.max(b, rmax);
    const [s0, s1] = distBracket(dist); a = Math.max(a, s0); b = Math.min(b, s1);
    const pts = [], K = 700;
    for (let k = 0; k <= K; k++){
      const sv = a + (b - a) * k / K, x = tr.f(sv);
      if (!(x >= lo && x <= hi)) continue;
      let yv = distPdf(dist, sv) / Math.abs(tr.df(sv));
      if (!dens) yv *= n * bw;
      if (isFinite(yv)) pts.push([x, yv]); else pts.push([x, 1e9]);
    }
    pts.sort((p, q) => p[0] - q[0]);
    return pts;
  };
  const cvY = curve(cfg.Y, S.rawPos, cfg.nY), cvN = curve(cfg.N, S.rawNeg, cfg.nN);
  let cMax = 0; for (const p of cvY.concat(cvN)) if (p[1] < 1e9) cMax = Math.max(cMax, p[1]);
  const yMax = Math.max(barMax, Math.min(cMax, 1.6 * barMax)) * 1.1 || 1;
  const xLabel = "score" + (cfg.transform !== "none" ? `  (after transform ${TRANSFORMS[cfg.transform].label.split(" (")[0]})` : "");
  const F = frame(svg, W, H, m, [lo, hi], [0, yMax], { xLabel, yLabel: dens ? "density" : "count", xFmt: fmtNum });
  S.histScale = { F, lo, hi };
  const g = clipTo(svg, "histClip", F);

  // predicted-Y region
  const tx = F.X(S.t);
  el("rect", { x: Math.max(F.x0, tx), y: F.y0, width: Math.max(0, F.x0 + F.w - Math.max(F.x0, tx)), height: F.h, fill: "rgba(194,37,92,.045)" }, g);

  const stepPath = (c, sc) => {
    let d = `M${F.X(lo).toFixed(1)},${F.Y(0).toFixed(1)}`;
    for (let i = 0; i < nb; i++){ const y = F.Y(c[i] * sc).toFixed(1); d += `L${F.X(lo + i * bw).toFixed(1)},${y}L${F.X(lo + (i + 1) * bw).toFixed(1)},${y}`; }
    return d + `L${F.X(hi).toFixed(1)},${F.Y(0).toFixed(1)}Z`;
  };
  el("path", { d: stepPath(cN, sN), fill: "rgba(25,113,194,.22)", stroke: "#1971c2", "stroke-width": 1.2 }, g);
  el("path", { d: stepPath(cY, sY), fill: "rgba(232,89,12,.22)", stroke: "#e8590c", "stroke-width": 1.2 }, g);
  const line = pts => pts.map(p => `${F.X(p[0]).toFixed(1)},${F.Y(Math.min(p[1], yMax * 2)).toFixed(1)}`).join(" ");
  el("polyline", { points: line(cvN), fill: "none", stroke: "#0b3c6b", "stroke-width": 2 }, g);
  el("polyline", { points: line(cvY), fill: "none", stroke: "#7a3203", "stroke-width": 2 }, g);

  // last pair from the pair game
  if (S.pair.last){
    for (const [v, col, lab] of [[S.pair.last.sy, "#e8590c", "Y"], [S.pair.last.sn, "#1971c2", "N"]]){
      const x = F.X(v), yb = F.y0 + F.h;
      el("path", { d: `M${x},${yb - 16}l-6,-11h12z`, fill: col, stroke: "#fff", "stroke-width": 1 }, g);
      el("line", { x1: x, y1: yb, x2: x, y2: yb - 16, stroke: col, "stroke-width": 2 }, g);
      el("text", { x, y: yb - 31, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: col }, g, lab);
    }
  }
  // threshold line + handle
  if (tx >= F.x0 - 1 && tx <= F.x0 + F.w + 1){
    el("line", { x1: tx, y1: F.y0, x2: tx, y2: F.y0 + F.h, stroke: "#c2255c", "stroke-width": 2, "stroke-dasharray": "6 4" }, svg);
    el("rect", { x: tx - 5, y: F.y0 - 2, width: 10, height: 14, rx: 3, fill: "#c2255c" }, svg);
    const right = tx < F.x0 + F.w - 120;
    el("text", { x: right ? tx + 8 : tx - 8, y: F.y0 + 14, "text-anchor": right ? "start" : "end", "font-size": 11.5, fill: "#c2255c", "font-weight": 600 },
      svg, right ? `t = ${fmtNum(S.t)} · predict Y →` : `← predict N · t = ${fmtNum(S.t)}`);
  }
}
function histPointer(evt){
  if (!S.histScale) return;
  const p = toSVGCoords($("histPlot"), evt), { F, lo, hi } = S.histScale;
  setThreshold(lo + (Math.min(F.x0 + F.w, Math.max(F.x0, p.x)) - F.x0) / F.w * (hi - lo));
}

/* ----- ROC ----- */
function drawROC(){
  const svg = $("rocPlot"); clearSVG(svg);
  const W = 400, H = 380, m = { l: 48, r: 12, t: 12, b: 44 };
  const t01 = { ticks: [0, .2, .4, .6, .8, 1], step: .2 };
  const F = frame(svg, W, H, m, [0, 1], [0, 1], { xTicks: t01, yTicks: t01, xFmt: v => v.toFixed(1), yFmt: v => v.toFixed(1),
    xLabel: "false positive rate (1 − specificity)", yLabel: "true positive rate (sensitivity)" });
  S.rocScale = F;
  el("line", { x1: F.X(0), y1: F.Y(0), x2: F.X(1), y2: F.Y(1), stroke: "#adb5bd", "stroke-dasharray": "4 4" }, svg);
  if (!S.roc) return;
  const g = clipTo(svg, "rocClip", F);
  const emp = thinCurve(S.roc.fpr, S.roc.tpr, 0.0015);
  el("polygon", { points: ptsStr(emp.fpr.concat([1, 0]), emp.tpr.concat([0, 0]), F.X, F.Y), fill: "rgba(103,65,217,.08)" }, g);
  if (S.reps) for (const r of S.reps.rocs)
    el("polyline", { points: ptsStr(r.fpr, r.tpr, F.X, F.Y), fill: "none", stroke: "rgba(103,65,217,.16)", "stroke-width": 1 }, g);
  S.pins.forEach(p => el("polyline", { points: ptsStr(p.fpr, p.tpr, F.X, F.Y), fill: "none", stroke: p.color, "stroke-width": 2.2, "stroke-dasharray": "7 3", opacity: .9 }, g));
  const th = thinCurve(S.theo.fpr, S.theo.tpr, 0.002);
  el("polyline", { points: ptsStr(th.fpr, th.tpr, F.X, F.Y), fill: "none", stroke: "#212529", "stroke-width": 1.8, "stroke-dasharray": "6 4" }, g);
  el("polyline", { points: ptsStr(emp.fpr, emp.tpr, F.X, F.Y), fill: "none", stroke: "#6741d9", "stroke-width": 2.2, "stroke-linejoin": "round" }, g);
  const br = !(S.auc < 0.5);   // bottom-right corner is empty when the curve is above the diagonal
  const ax = br ? F.x0 + F.w - 8 : F.x0 + 8, anchor = br ? "end" : "start", ay = br ? F.y0 + F.h - 26 : F.y0 + 18;
  el("text", { x: ax, y: ay, "text-anchor": anchor, "font-size": 13, "font-weight": 700, fill: "#5f3dc4" }, svg, `sample AUC ${f3(S.auc)}`);
  el("text", { x: ax, y: ay + 16, "text-anchor": anchor, "font-size": 12, fill: "#212529" }, svg, `true AUC ${S.theo.auc.toFixed(3)}`);
  $("repLegend").hidden = !S.reps;

  const mt = metricsSorted(S.P, S.Q, S.t), ox = F.X(1 - mt.spec), oy = F.Y(mt.sens);
  el("line", { x1: ox, y1: oy, x2: ox, y2: F.y0 + F.h, stroke: "#c2255c", "stroke-dasharray": "2 3", opacity: .6 }, svg);
  el("line", { x1: F.x0, y1: oy, x2: ox, y2: oy, stroke: "#c2255c", "stroke-dasharray": "2 3", opacity: .6 }, svg);
  el("circle", { cx: ox, cy: oy, r: 6, fill: "#c2255c", stroke: "#fff", "stroke-width": 2 }, svg);
  const flipX = br ? ox > F.x0 + F.w - 150 : ox > F.x0 + 90, below = br ? oy < F.y0 + F.h - 60 : oy < F.y0 + 40;
  el("text", { x: ox + (flipX ? -10 : 10), y: oy + (below ? 18 : -10), "text-anchor": flipX ? "end" : "start", "font-size": 11, fill: "#c2255c", "font-weight": 600 },
    svg, `FPR ${(1 - mt.spec).toFixed(2)}, TPR ${mt.sens.toFixed(2)}`);
}
function rocClick(evt){
  if (!S.roc || !S.rocScale) return;
  const p = toSVGCoords($("rocPlot"), evt), F = S.rocScale;
  const fx = (p.x - F.x0) / F.w, ty = (F.y0 + F.h - p.y) / F.h;
  let best = 0, bd = Infinity;
  for (let i = 0; i < S.roc.fpr.length; i++){
    const d = (S.roc.fpr[i] - fx) ** 2 + (S.roc.tpr[i] - ty) ** 2;
    if (d < bd){ bd = d; best = i; }
  }
  const t = S.roc.thr[best];
  setThreshold(isFinite(t) ? t : S.smax + (S.smax - S.smin) * 1e-3);
}

/* ----- bootstrap ----- */
function drawBoot(){
  const svg = $("bootPlot"); clearSVG(svg);
  const W = 1000, H = 210, m = { l: 48, r: 16, t: 30, b: 34 };
  const b = S.boot, d = S.dl, T = S.theo.auc;
  if (!b.vals){
    el("text", { x: W / 2, y: H / 2, "text-anchor": "middle", "font-size": 15, fill: "#64748b" }, svg,
      `Bootstrapping… ${Math.round(100 * b.progress)}%`);
    $("bootNote").textContent = ""; return;
  }
  const v = b.vals;
  let lo = Math.min(v[0], T, isFinite(d.lo) ? d.lo : 1), hi = Math.max(v[v.length - 1], T, isFinite(d.hi) ? d.hi : 0);
  const pad = (hi - lo) * 0.08 || 0.01; lo = Math.max(0, lo - pad); hi = Math.min(1, hi + pad);
  if (!(hi > lo)){ lo = Math.max(0, lo - 0.01); hi = Math.min(1, hi + 0.01); }
  const NB = 50, c = new Float64Array(NB), bw = (hi - lo) / NB;
  for (const x of v) c[Math.min(NB - 1, Math.max(0, Math.floor((x - lo) / bw)))]++;
  const cm = Math.max(...c, 1);
  const F = frame(svg, W, H, m, [lo, hi], [0, cm * 1.05], { nx: 10, ny: 3, yLabel: "count", xLabel: "AUC" });
  el("rect", { x: F.X(b.lo), y: F.y0, width: Math.max(1, F.X(b.hi) - F.X(b.lo)), height: F.h, fill: "rgba(151,117,250,.13)" }, svg);
  for (const q of [b.lo, b.hi]) el("line", { x1: F.X(q), y1: F.y0, x2: F.X(q), y2: F.y0 + F.h, stroke: "#9775fa", "stroke-dasharray": "4 3" }, svg);
  for (let i = 0; i < NB; i++) if (c[i]){
    const y = F.Y(c[i]);
    el("rect", { x: F.X(lo + i * bw) + 0.5, y, width: Math.max(0.5, F.w / NB - 1), height: F.y0 + F.h - y, fill: "#d0bfff", stroke: "#9775fa", "stroke-width": .6 }, svg);
  }
  el("line", { x1: F.X(S.auc), y1: F.y0, x2: F.X(S.auc), y2: F.y0 + F.h, stroke: "#6741d9", "stroke-width": 2.5 }, svg);
  el("line", { x1: F.X(T), y1: F.y0 - 4, x2: F.X(T), y2: F.y0 + F.h, stroke: "#212529", "stroke-width": 1.8, "stroke-dasharray": "6 4" }, svg);
  if (isFinite(d.lo)){
    const yw = F.y0 - 14;
    el("line", { x1: F.X(d.lo), y1: yw, x2: F.X(d.hi), y2: yw, stroke: "#0c8599", "stroke-width": 4, "stroke-linecap": "round" }, svg);
    for (const q of [d.lo, d.hi]) el("line", { x1: F.X(q), y1: yw - 6, x2: F.X(q), y2: yw + 6, stroke: "#0c8599", "stroke-width": 2 }, svg);
    el("text", { x: F.X(d.hi) + 8, y: yw + 4, "font-size": 11.5, fill: "#0c8599", "font-weight": 600 }, svg, "DeLong");
  }
  let mu = 0; for (const x of v) mu += x; mu /= v.length;
  let sd = 0; for (const x of v) sd += (x - mu) ** 2; sd = Math.sqrt(sd / (v.length - 1));
  $("bootNote").innerHTML = `Bootstrap SD = <b>${sd.toFixed(4)}</b> and DeLong SE = <b>${isFinite(d.se) ? d.se.toFixed(4) : "—"}</b>: two estimates of the same ` +
    `standard error, both computed from this one sample. The spread comes from resampling <em>this</em> sample, so it is centred on the sample AUC ` +
    `(${f3(S.auc)}), not on the true AUC (${T.toFixed(3)}). To see the real study-to-study variation, repeat the experiment below.`;
}

/* ----- repeated experiments ----- */
function cancelReps(){
  if (S.repToken) S.repToken.cancelled = true;
  S.repToken = null; repUI(false);
}
function repUI(running){
  $("btnRep").disabled = running; $("btnRepCancel").hidden = !running; $("repProgress").hidden = !running; $("repEta").hidden = !running;
  if (!running) $("repEta").textContent = "";
  if (!running) $("repProgress").firstElementChild.style.width = "0";
}
function runReps(){
  cancelReps();
  const cfg = S.cfg, key = expKey(cfg);
  const R = Math.round(clampNum($("repR").value, 20, 5000, 500));
  const bootB = $("repBoot").checked ? Math.round(clampNum($("repB").value, 50, 2000, 200)) : 0;
  const tok = { cancelled: false, key }; S.repToken = tok;
  const rng = makeRNG((Math.imul(cfg.seed, 2654435761) + 12345) >>> 0);
  const reps = [], rocs = [], MAXROC = 60, T = S.theo.auc;
  repUI(true);
  let lastDraw = 0; const t0 = performance.now();
  const publish = () => {
    S.reps = { key, reps, rocs, bootB, R, sum: summarizeReplicates(reps, T), T, level: cfg.level };
    S.repsCleared = false; renderReps(); drawROC();
  };
  runChunked(R, () => {
    const r = simulateReplicate(cfg, rng, { bootB });
    if (rocs.length < MAXROC){
      const rc = rocFromSamples(r.pos, r.neg); rocs.push(thinCurve(rc.fpr, rc.tpr, 0.01));
    }
    reps.push({ auc: r.auc, se: r.se, lo: r.lo, hi: r.hi, bLo: r.bLo, bHi: r.bHi });
  }, p => {
    $("repProgress").firstElementChild.style.width = (100 * p).toFixed(1) + "%";
    const el_ = performance.now() - t0, left = p > 0 ? el_ * (1 - p) / p / 1000 : NaN;
    $("repEta").textContent = `${reps.length} / ${R}` + (p > 0.02 && left > 2 ? ` · ~${left < 90 ? Math.round(left) + " s" : Math.round(left / 60) + " min"} left` : "");
    const now = performance.now();
    if (p < 1 && now - lastDraw > 250 && reps.length >= 10){ lastDraw = now; publish(); }
  }, tok).then(done => {
    if (S.repToken === tok){ S.repToken = null; repUI(false); }
    if (done) publish();
  });
}
function renderReps(){
  const body = $("repBody");
  if (!S.reps){
    body.innerHTML = `<div class="empty">${S.repsCleared ? "Settings changed, so the previous results no longer apply. Run again." :
      "Not run yet. Press <b>Run R experiments</b>."}</div>`;
    return;
  }
  const { sum, reps, T, level, bootB } = S.reps, lvl = Math.round(level * 100);
  const running = !!S.repToken;
  body.innerHTML = `<div class="rep-grid">
      <div><svg class="plot" id="repHist" viewBox="0 0 520 270" role="img" aria-label="Sampling distribution of the AUC"></svg>
        <div class="legend"><span><span class="sw" style="background:#d0bfff"></span>sample AUC of each simulated study</span>
        <span><span class="sw dash" style="border-color:#212529"></span>true AUC</span>
        <span><span class="sw line" style="border-color:#6741d9"></span>your current sample</span></div></div>
      <div><svg class="plot" id="repForest" viewBox="0 0 520 270" role="img" aria-label="Confidence intervals of the first studies"></svg>
        <div class="legend"><span><span class="sw line" style="border-color:#868e96"></span>${lvl}% DeLong CI contains truth</span>
        <span><span class="sw line" style="border-color:#e03131"></span>misses truth</span></div></div>
    </div>
    <div class="stats">
      ${stat("Studies run", `${sum.R}${running ? "…" : ""}`, running ? "still running" : `n<sub>Y</sub> = ${S.cfg.nY}, n<sub>N</sub> = ${S.cfg.nN} each`)}
      ${stat("Middle 95% of study AUCs", `${f3(sum.q025)} – ${f3(sum.q975)}`, "what a single study could plausibly report")}
      ${stat("Empirical SE vs DeLong SE", `${sum.sd.toFixed(4)} / ${sum.seMean.toFixed(4)}`, "SD across studies / mean estimated SE")}
      ${stat("Mean AUC (bias)", `${f3(sum.mean)} (${sum.bias >= 0 ? "+" : "−"}${Math.abs(sum.bias).toFixed(4)})`, `true AUC ${T.toFixed(4)}`)}
      ${stat(`DeLong coverage (nominal ${lvl}%)`, coverageHTML(sum.coverage, sum.coverageMC, level), `± ${pct(sum.coverageMC)} Monte-Carlo SE`)}
      ${stat(`Bootstrap coverage (nominal ${lvl}%)`, bootB ? coverageHTML(sum.bootCoverage, sum.bootCoverageMC, level) : "—",
        bootB ? `B = ${bootB} per study` : "tick “also bootstrap CIs”")}
      ${stat("Power vs chance", pct(sum.power), `share of DeLong CIs with lower limit &gt; 0.5${bootB ? ` (bootstrap: ${pct(sum.bootPower)})` : ""}`)}
      ${stat("Mean CI width", sum.width.toFixed(3), `DeLong, ${lvl}% level`)}
    </div>`;
  drawRepHist(sum, T); drawForest(reps, T);
}
const stat = (k, v, s) => `<div class="stat"><div class="k">${k}</div><div class="v">${v}</div><div class="s">${s}</div></div>`;
function coverageHTML(p, mc, level){
  const cls = p < level - 2 * mc - 1e-9 ? "bad" : "ok";
  return `<span class="${cls}">${pct(p)}</span>`;
}
function drawRepHist(sum, T){
  const svg = $("repHist"), W = 520, H = 270, m = { l: 46, r: 12, t: 22, b: 40 };
  const v = sum.sorted;
  let lo = Math.min(v[0], T, S.auc), hi = Math.max(v[v.length - 1], T, S.auc);
  const pad = (hi - lo) * 0.06 || 0.01; lo = Math.max(0, lo - pad); hi = Math.min(1, hi + pad);
  const NB = Math.min(45, Math.max(12, Math.round(Math.sqrt(v.length) * 1.5))), bw = (hi - lo) / NB, c = new Float64Array(NB);
  for (const x of v) c[Math.min(NB - 1, Math.max(0, Math.floor((x - lo) / bw)))]++;
  const cm = Math.max(...c, 1);
  el("text", { x: m.l, y: 14, "font-size": 12.5, "font-weight": 600, fill: "#343a40" }, svg, `Sampling distribution of the AUC (${v.length} studies)`);
  const F = frame(svg, W, H, m, [lo, hi], [0, cm * 1.08], { nx: 6, ny: 4, xLabel: "sample AUC", yLabel: "studies" });
  el("rect", { x: F.X(sum.q025), y: F.y0, width: F.X(sum.q975) - F.X(sum.q025), height: F.h, fill: "rgba(103,65,217,.06)" }, svg);
  for (let i = 0; i < NB; i++) if (c[i]){
    const y = F.Y(c[i]);
    el("rect", { x: F.X(lo + i * bw) + .5, y, width: Math.max(.5, F.w / NB - 1), height: F.y0 + F.h - y, fill: "#d0bfff", stroke: "#9775fa", "stroke-width": .6 }, svg);
  }
  el("line", { x1: F.X(T), y1: F.y0, x2: F.X(T), y2: F.y0 + F.h, stroke: "#212529", "stroke-width": 2, "stroke-dasharray": "6 4" }, svg);
  el("line", { x1: F.X(S.auc), y1: F.y0, x2: F.X(S.auc), y2: F.y0 + F.h, stroke: "#6741d9", "stroke-width": 2 }, svg);
  if (lo < 0.5 && hi > 0.5) el("line", { x1: F.X(.5), y1: F.y0, x2: F.X(.5), y2: F.y0 + F.h, stroke: "#adb5bd", "stroke-width": 1.5 }, svg);
}
function drawForest(reps, T){
  const svg = $("repForest"), W = 520, H = 270, m = { l: 46, r: 12, t: 22, b: 40 };
  const K = Math.min(100, reps.length), sub = reps.slice(0, K);
  let lo = T, hi = T;
  for (const r of sub){ if (isFinite(r.lo)) lo = Math.min(lo, r.lo); if (isFinite(r.hi)) hi = Math.max(hi, r.hi); }
  const pad = (hi - lo) * 0.06 || 0.01; lo = Math.max(0, lo - pad); hi = Math.min(1, hi + pad);
  const miss = sub.filter(r => !(r.lo <= T && T <= r.hi)).length;
  el("text", { x: m.l, y: 14, "font-size": 12.5, "font-weight": 600, fill: "#343a40" }, svg,
    `First ${K} studies: ${miss} of ${K} CIs miss the true AUC`);
  const F = frame(svg, W, H, m, [0, K + 1], [lo, hi], { nx: 5, ny: 5, xLabel: "study #", yLabel: "AUC", xFmt: v => v.toFixed(0) });
  if (lo < 0.5 && hi > 0.5) el("line", { x1: F.x0, y1: F.Y(.5), x2: F.x0 + F.w, y2: F.Y(.5), stroke: "#adb5bd", "stroke-width": 1.5 }, svg);
  sub.forEach((r, i) => {
    const x = F.X(i + 1), hit = r.lo <= T && T <= r.hi, col = hit ? "#868e96" : "#e03131";
    el("line", { x1: x, y1: F.Y(r.lo), x2: x, y2: F.Y(r.hi), stroke: col, "stroke-width": hit ? 1.6 : 2.2 }, svg);
    el("circle", { cx: x, cy: F.Y(r.auc), r: 1.8, fill: col }, svg);
  });
  el("line", { x1: F.x0, y1: F.Y(T), x2: F.x0 + F.w, y2: F.Y(T), stroke: "#212529", "stroke-width": 1.8, "stroke-dasharray": "6 4" }, svg);
}

/* ----- pair game ----- */
function drawPairs(k){
  if (!S.pos) return;
  const P = S.pair, m = S.pos.length, n = S.neg.length;
  for (let i = 0; i < k; i++){
    const sy = S.pos[(Math.random() * m) | 0], sn = S.neg[(Math.random() * n) | 0];
    P.n++; P.w += sy > sn ? 1 : sy === sn ? 0.5 : 0; P.last = { sy, sn };
  }
  renderPair(); drawHist();
}
function renderPair(){
  const P = S.pair;
  if (!P.n){ $("pairOut").innerHTML = `<span class="muted">No pairs drawn yet. The drawn pair is marked ▼ on the histogram.</span>`; return; }
  const L = P.last, res = L.sy > L.sn ? `<span class="ok">Y wins</span>` : L.sy === L.sn ? "tie (½)" : `<span class="bad">N wins</span>`;
  const p = P.w / P.n, se = Math.sqrt(p * (1 - p) / P.n);
  $("pairOut").innerHTML = `Last pair: <b style="color:var(--y)">Y ${fmtNum(L.sy)}</b> vs <b style="color:var(--n)">N ${fmtNum(L.sn)}</b> → ${res}<br>` +
    `Y scored higher in <b>${P.w}</b> of <b>${P.n}</b> pairs → <span class="big">${p.toFixed(3)}</span>` +
    (P.n >= 20 ? ` <span class="muted">(± ${(1.96 * se).toFixed(3)})</span>` : "") +
    `<br><span class="muted">Sample AUC = ${f3(S.auc)} (what this fraction converges to) · true AUC = ${S.theo.auc.toFixed(3)}</span>`;
}

/* ----- pins ----- */
function addPin(label, roc, auto){
  if (S.pins.some(p => p.label === label)) return;
  if (S.pins.length >= PIN_COLORS.length) S.pins.shift();
  const used = new Set(S.pins.map(p => p.color)), color = PIN_COLORS.find(c => !used.has(c));
  const th = thinCurve(roc.fpr, roc.tpr, 0.003);
  S.pins.push({ label, color, fpr: th.fpr, tpr: th.tpr, auc: roc.auc, auto: !!auto });
  renderPins();
}
function renderPins(){
  $("pinList").innerHTML = S.pins.map(p => `<span><span class="sw dash" style="border-color:${p.color}"></span>${p.label} · AUC ${p.auc.toFixed(3)}</span>`).join("");
}
function currentLabel(){
  const c = S.cfg;
  if (!S.modified && SCENARIOS[S.scenario] && c.transform === "none") return SCENARIOS[S.scenario].label.replace(/\s*\(.*\)$/, "");
  return `Y ${describeDist(c.Y)} | N ${describeDist(c.N)}` + (c.transform !== "none" ? ` | ${TRANSFORMS[c.transform].label.split(" (")[0]}` : "");
}

/* ---------- Scenarios ---------- */
function applyScenario(key){
  const sc = SCENARIOS[key]; if (!sc) return;
  S.applying = true;
  setDist("Y", sc.Y); setDist("N", sc.N);
  $("nY").value = sc.nY; $("nN").value = sc.nN; $("transform").value = "none"; S.lastTransform = "none";
  setHistMode(sc.histMode || "density");
  S.scenario = key; S.modified = false; S.t = NaN;
  S.pins = S.pins.filter(p => !p.auto);   // pins added by a previous scenario go; pins you made stay
  if (sc.pin){ const r = SCENARIOS[sc.pin]; addPin(r.label.replace(/\s*\(.*\)$/, ""), trueROC(r.Y, r.N), true); }
  renderPins();
  S.applying = false;
  update();
}
function setHistMode(mode){
  S.histMode = mode;
  for (const b of $("histMode").querySelectorAll("button")) b.classList.toggle("on", b.dataset.mode === mode);
}

/* ---------- Wiring ---------- */
function init(){
  for (const [k, sc] of Object.entries(SCENARIOS)) $("scenario").add(new Option(sc.label, k));
  $("scenario").add(new Option("Custom (keep current settings)", "custom"));
  for (const w of ["Y", "N"]) for (const [k, f] of Object.entries(FAMILIES)) $("fam" + w).add(new Option(f.label, k));
  for (const [k, t] of Object.entries(TRANSFORMS)) $("transform").add(new Option(t.label, k));

  $("scenario").addEventListener("change", e => {
    if (e.target.value === "custom"){ S.scenario = "custom"; S.modified = false; renderLesson(); }
    else applyScenario(e.target.value);
  });
  for (const w of ["Y", "N"]) $("fam" + w).addEventListener("change", e => {
    const fam = FAMILIES[e.target.value], p = {};
    for (const s of fam.params) p[s.k] = s.def;
    buildParamUI(w, { family: e.target.value, p }); onParamChange();
  });
  for (const id of ["nY", "nN", "transform", "level"]) $(id).addEventListener(id === "transform" || id === "level" ? "change" : "input", onParamChange);
  for (const id of ["seed", "bootB"]) $(id).addEventListener("input", scheduleUpdate);
  $("btnNew").addEventListener("click", () => { $("seed").value = (Math.random() * 1e6) | 0; update(); });
  $("threshold").addEventListener("input", e => { S.t = +e.target.value; renderThresholdViews(); });
  $("btnYouden").addEventListener("click", () => setThreshold(youdenThreshold(S.roc)));
  $("bins").addEventListener("input", drawHist);
  $("histMode").addEventListener("click", e => { const b = e.target.closest("button"); if (b){ setHistMode(b.dataset.mode); drawHist(); } });

  const hp = $("histPlot");
  hp.addEventListener("pointerdown", e => { hp.setPointerCapture(e.pointerId); histPointer(e); });
  hp.addEventListener("pointermove", e => { if (hp.hasPointerCapture(e.pointerId)) histPointer(e); });
  $("rocPlot").addEventListener("click", rocClick);

  $("btnPin").addEventListener("click", () => addPin(currentLabel(), S.theo));
  $("btnUnpin").addEventListener("click", () => { S.pins = []; renderPins(); drawROC(); });
  $("btnPin").addEventListener("click", drawROC);

  $("btnRep").addEventListener("click", runReps);
  $("btnRepCancel").addEventListener("click", cancelReps);

  $("pair1").addEventListener("click", () => drawPairs(1));
  $("pair100").addEventListener("click", () => drawPairs(100));
  $("pair1000").addEventListener("click", () => drawPairs(1000));
  $("pairReset").addEventListener("click", () => { S.pair = { n: 0, w: 0, last: null }; renderPair(); drawHist(); });

  $("btnCSV").addEventListener("click", () => {
    if (!S.y.length) return;
    let csv = "class,y,score\n";
    for (let i = 0; i < S.y.length; i++) csv += `${S.y[i] ? "Y" : "N"},${S.y[i]},${S.s[i]}\n`;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = `auc_explorer_seed${S.cfg.seed}.csv`; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  });

  // deep link (used by the guide): auc-simulator.html#scenario=<key>
  const m = location.hash.match(/^#scenario=(\w+)$/), start = m && hasOwn(SCENARIOS, m[1]) ? m[1] : "textbook";
  $("scenario").value = start;
  applyScenario(start);
}
init();
