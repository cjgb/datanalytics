/* robustness.js: UI of auc-robustness.html (depends on stats.js, robustness-core.js, ui-common.js). */
"use strict";

const DOT_MAX = 300;     // above this many cases, a class is drawn as a density band plus its influential cases
const DOTS_LARGE = 40;   // number of influential cases drawn as dots for such a class
const FLAG_SE = 0.5;     // outline cases whose removal moves the AUC by at least this many SEs
const TOP_ROWS = 50;

const R = {
  cases: [], dir: 1, level: 0.95, c0: 0.5,
  A0: null, A: null, idx: new Map(), idToKey: new Map(),
  sel: null, log: [], paths: null, pathToken: 0, msg: "",
  table: { sort: "abs", asc: false, filter: "all", all: false },
  about: null, parsed: null, fileName: "", domain: [0, 1], drag: null, frame: null,
  truth: null, simCfg: null   // set when the data come from the simulator (true AUC / ROC known)
};
const signed = (v, d) => isFinite(v) ? (v >= 0 ? "+" : "−") + Math.abs(v).toFixed(d === undefined ? 3 : d) : "—";
const clsName = y => y === 1 ? "Y" : "N";
const isEdited = c => c.ex || c.y !== c.y0 || c.s !== c.s0;

/* ---------- Data ---------- */
function setCases(list, about){
  R.cases = list.map((c, k) => ({ key: k, id: c.id, y0: c.y, s0: c.s, y: c.y, s: c.s, ex: false }));
  R.idToKey = new Map(R.cases.map(c => [c.id, c.key]));
  R.log = []; R.sel = null; R.msg = ""; R.about = about; R.tableTop = true;
  recomputeOriginal(); recompute(); computeDomain();
  renderAll(); schedulePaths();
}
function arrays(original){
  const y = [], s = [], keys = [];
  for (const c of R.cases){
    if (!original && c.ex) continue;
    y.push(original ? c.y0 : c.y); s.push(R.dir * (original ? c.s0 : c.s)); keys.push(c.key);
  }
  return { y, s, keys };
}
function recomputeOriginal(){ const a = arrays(true); R.A0 = analyzeCases(a.y, a.s, R.level, R.c0); }
function recompute(){
  const a = arrays(false);
  R.A = analyzeCases(a.y, a.s, R.level, R.c0);
  R.idx = new Map(a.keys.map((k, i) => [k, i]));
}
function computeDomain(){
  let lo = Infinity, hi = -Infinity;
  for (const c of R.cases){ lo = Math.min(lo, c.s, c.s0); hi = Math.max(hi, c.s, c.s0); }
  if (!(hi > lo)){ lo -= 1; hi += 1; }
  const pad = (hi - lo) * 0.04; R.domain = [lo - pad, hi + pad];
}
/** Effects of removing / flipping / moving one case, from the current analysis (null if the case is excluded). */
function effects(c){
  const i = R.idx.get(c.key), A = R.A;
  if (i === undefined || !A || !isFinite(A.auc)) return null;
  const d = A.looAuc[i] - A.auc;
  return { V: A.V[i], d, dse: d / A.se, loo: A.looAuc[i], looLo: A.looLo[i],
    breaks: isFinite(A.looLo[i]) && (A.looLo[i] > R.c0) !== A.holds,
    flip: A.flipAuc[i] - A.auc, flipAuc: A.flipAuc[i], min: A.moveMin[i], max: A.moveMax[i] };
}
const flagged = e => e && ((isFinite(e.dse) && Math.abs(e.dse) >= FLAG_SE) || e.breaks);
function classCount(y){ let k = 0; for (const c of R.cases) if (!c.ex && c.y === y) k++; return k; }

/* ---------- Edits (all undoable, all logged) ---------- */
const snap = c => ({ y: c.y, s: c.s, ex: c.ex });
function edit(c, change, type){
  const before = snap(c), aucBefore = R.A.auc, loBefore = R.A.lo;
  Object.assign(c, change);
  recompute(); computeDomain();
  R.log.push({ type, key: c.key, id: c.id, before, after: snap(c), aucBefore, aucAfter: R.A.auc, loBefore, loAfter: R.A.lo });
  R.msg = "";
  renderAll();
}
function toggleExclude(c){
  if (!c.ex && classCount(c.y) <= 2){ notice(`Can't exclude ${c.id}: class ${clsName(c.y)} needs at least 2 cases.`); return; }
  edit(c, { ex: !c.ex }, c.ex ? "include" : "exclude");
}
function flip(c){
  if (c.ex){ notice(`${c.id} is excluded; include it first.`); return; }
  if (classCount(c.y) <= 2){ notice(`Can't flip ${c.id}: class ${clsName(c.y)} needs at least 2 cases.`); return; }
  edit(c, { y: 1 - c.y }, "flip");
}
function restore(c){ if (isEdited(c)) edit(c, { y: c.y0, s: c.s0, ex: false }, "restore"); }
function moveTo(c, s){ if (isFinite(s) && s !== c.s) edit(c, { s }, "move"); }
function undo(){
  const e = R.log.pop(); if (!e) return;
  Object.assign(R.cases[e.key], e.before);
  recompute(); computeDomain(); R.msg = ""; renderAll();
}
function resetAll(){
  for (const c of R.cases) Object.assign(c, { y: c.y0, s: c.s0, ex: false });
  R.log = []; recompute(); computeDomain(); R.msg = ""; renderAll();
}
function describeEdit(e){
  const c = R.cases[e.key];
  switch (e.type){
    case "exclude": return `Excluded <b>${escapeHTML(c.id)}</b> (${clsName(e.before.y)})`;
    case "include": return `Included <b>${escapeHTML(c.id)}</b> again`;
    case "flip": return `Flipped label of <b>${escapeHTML(c.id)}</b>: ${clsName(e.before.y)} → ${clsName(e.after.y)}`;
    case "move": return `Moved <b>${escapeHTML(c.id)}</b>: score ${fmtNum(e.before.s)} → ${fmtNum(e.after.s)}`;
    default: return `Restored <b>${escapeHTML(c.id)}</b> to its original values`;
  }
}
function notice(msg){ R.msg = msg; renderInspector(); }
function select(key, scrollTable){
  R.sel = key;
  drawStrip(); drawROC(); renderInspector(); renderTable(scrollTable !== false);
}

/* ---------- Sensitivity paths (original data; computed after paint) ---------- */
function schedulePaths(){
  const token = ++R.pathToken;
  R.paths = null; drawSens(); renderKPIs();
  setTimeout(() => {
    if (token !== R.pathToken) return;
    const a = arrays(true), ids = a.keys.map(k => R.cases[k].id);
    const flips = $("pathFlips").checked;
    const K = Math.min(20, Math.max(1, Math.floor(a.y.length / 3)));
    const o = { level: R.level, c0: R.c0, maxSteps: K, flips };
    const down = greedyPath(a.y, a.s, ids, { ...o, dir: -1 }), up = greedyPath(a.y, a.s, ids, { ...o, dir: 1 });
    const holds = down[0].lo > R.c0;
    R.paths = { down, up, flips, K, holds, frag: fragilityFromPath(holds ? down : up, R.c0) };
    drawSens(); renderKPIs();
  }, 0);
}

/* ---------- Rendering ---------- */
function renderAll(){ for (const e of document.querySelectorAll(".truthLegend")) e.hidden = !(R.truth && R.dir > 0); drawStrip(); drawROC(); drawSens(); renderKPIs(); renderInspector(); renderTable(false); renderLog(); renderAbout(); }
function renderLive(){ drawStrip(); drawROC(); drawSens(); renderKPIs(); renderInspector(); }

function renderAbout(){
  const a = R.about || {};
  $("about").innerHTML = `<h3>${a.title || ""}</h3><p>${a.text || ""}</p>` + (a.tryIt ? `<p class="try"><b>Try:</b> ${a.tryIt}</p>` : "");
}
function renderKPIs(){
  const A0 = R.A0, A = R.A, lvl = Math.round(R.level * 100);
  if (!A0) return;
  $("kOrig").textContent = f3(A0.auc);
  $("kOrigSub").innerHTML = `${lvl}% CI [${f3(A0.lo)}, ${f3(A0.hi)}] · n<sub>Y</sub> ${A0.m}, n<sub>N</sub> ${A0.n}` +
    (R.truth ? `<br><b style="color:var(--truth)">true AUC ${f3(R.truth.auc)}</b> (simulation)` : "");
  const nEd = R.cases.filter(isEdited).length;
  $("kCur").textContent = f3(A.auc);
  $("kCurSub").innerHTML = (nEd ? `${signed(A.auc - A0.auc)} vs original · [${f3(A.lo)}, ${f3(A.hi)}]` : "no edits: same as original") +
    (R.truth ? `<br>error vs truth: ${signed(A.auc - R.truth.auc)}` : "");
  $("kConcK").textContent = `Lower ${lvl}% limit > ${R.c0}`;
  const st = h => h ? `<span class="ok">holds ✓</span>` : `<span class="bad">fails ✗</span>`;
  $("kConc").innerHTML = nEd && A.holds !== A0.holds ? `${st(A0.holds)} → ${st(A.holds)}` : st(A.holds);
  $("kConcSub").textContent = nEd ? `lower limit ${f3(A0.lo)} → ${f3(A.lo)}` : `lower limit ${f3(A0.lo)}`;
  const P = R.paths, what = P && P.flips ? "edits" : "removals";
  if (!P){ $("kFrag").textContent = "…"; $("kFragSub").textContent = "searching"; }
  else if (P.holds){
    $("kFrag").innerHTML = P.frag !== null ? `<span class="${P.frag <= 2 ? "bad" : ""}">${P.frag} ${P.frag === 1 ? what.slice(0, -1) : what}</span> break it` : `not broken by ≤ ${P.K} ${what}`;
    $("kFragSub").textContent = P.frag !== null ? "greedy search: at most this many are needed" : "greedy search on the original data";
  } else {
    $("kFrag").innerHTML = P.frag !== null ? `<span class="bad">${P.frag} ${P.frag === 1 ? what.slice(0, -1) : what}</span> would create it` : `no ≤ ${P.K} ${what} create it`;
    $("kFragSub").textContent = "beware: cherry-picked removals can manufacture a result";
  }
  const ex = R.cases.filter(c => c.ex).length, fl = R.cases.filter(c => c.y !== c.y0).length, mv = R.cases.filter(c => c.s !== c.s0).length;
  $("kEdits").textContent = nEd ? `${nEd} case${nEd === 1 ? "" : "s"} edited` : "none";
  $("kEditsSub").textContent = `${ex} excluded · ${fl} flipped · ${mv} moved`;
}

/* ----- strip plot ----- */
function stripGeometry(){
  const W = 1000, H = 300, m = { l: 76, r: 18, t: 12, b: 42 };
  const x0 = m.l, w = W - m.l - m.r, h = H - m.t - m.b, [lo, hi] = R.domain;
  const X = v => R.dir > 0 ? x0 + (v - lo) / (hi - lo) * w : x0 + (hi - v) / (hi - lo) * w;
  const Xinv = px => { const f = (px - x0) / w; return R.dir > 0 ? lo + f * (hi - lo) : hi - f * (hi - lo); };
  const rowC = { 1: m.t + h * 0.25, 0: m.t + h * 0.75 }, half = h / 4 - 5;
  return { W, H, m, x0, w, h, X, Xinv, rowC, half, lo, hi };
}
function beeswarm(dots, half){
  dots.sort((a, b) => a.x - b.x);
  const placed = [];
  for (const d of dots){
    let off = 0;
    for (let t = 0; t < 300; t++){
      off = t === 0 ? 0 : (t % 2 ? 1 : -1) * Math.ceil(t / 2) * 1.6;
      let ok = true;
      for (let i = placed.length - 1; i >= 0; i--){
        const p = placed[i];
        if (d.x - p.x > d.r + 12) break;
        const rr = d.r + p.r + 0.8;
        if ((d.x - p.x) ** 2 + (off - p.off) ** 2 < rr * rr){ ok = false; break; }
      }
      if (ok) break;
    }
    d.off = off; placed.push(d);
  }
  const mx = Math.max(0, ...dots.map(d => Math.abs(d.off)));
  if (mx > half) for (const d of dots) d.off *= half / mx;
}
function drawStrip(){
  const svg = $("strip"); clearSVG(svg);
  if (!R.A) return;
  const G = stripGeometry(), A = R.A;
  R.frame = G;
  // background, axis
  for (const y of [1, 0]){
    el("rect", { x: G.x0, y: G.rowC[y] - G.half - 4, width: G.w, height: 2 * G.half + 8, rx: 6,
      fill: y ? "rgba(232,89,12,.05)" : "rgba(25,113,194,.05)", "data-bg": 1 }, svg);
    el("text", { x: G.x0 - 10, y: G.rowC[y] - 2, "text-anchor": "end", "font-size": 15, "font-weight": 700, fill: y ? "#e8590c" : "#1971c2" }, svg, clsName(y));
    el("text", { x: G.x0 - 10, y: G.rowC[y] + 14, "text-anchor": "end", "font-size": 11.5, fill: "#64748b" }, svg, `n = ${classCount(y)}`);
  }
  const tk = niceTicks(G.lo, G.hi, 9), yb = G.m.t + G.h;
  for (const v of tk.ticks){
    const x = G.X(v); if (x < G.x0 - .5 || x > G.x0 + G.w + .5) continue;
    el("line", { x1: x, y1: G.m.t, x2: x, y2: yb, stroke: "#eef1f5" }, svg);
    el("text", { x, y: yb + 15, "text-anchor": "middle", "font-size": 11, fill: "#64748b" }, svg, fmtNum(v));
  }
  el("text", { x: G.x0 + G.w / 2, y: G.H - 6, "text-anchor": "middle", "font-size": 12, fill: "#475569" }, svg,
    "score" + (R.dir < 0 ? "  (axis reversed: lower scores are more Y-like)" : ""));

  const E = new Map(); let maxAbs = 0;
  for (const c of R.cases){ const e = effects(c); E.set(c.key, e); if (e && isFinite(e.d)) maxAbs = Math.max(maxAbs, Math.abs(e.d)); }
  const radius = c => { const e = E.get(c.key); return e && maxAbs > 0 && isFinite(e.d) ? 3 + 7 * Math.sqrt(Math.abs(e.d) / maxAbs) : 4; };
  const allDots = [];
  let anyDensity = false;
  for (const y of [1, 0]){
    const members = R.cases.filter(c => c.y === y);
    const incl = members.filter(c => !c.ex);
    let show = members;
    if (incl.length > DOT_MAX){
      anyDensity = true;
      // density band of the class, then only its influential / edited / selected cases as dots
      const NB = 80, cnt = new Float64Array(NB);
      for (const c of incl){ const f = (G.X(c.s) - G.x0) / G.w; cnt[Math.min(NB - 1, Math.max(0, Math.floor(f * NB)))]++; }
      const mx = Math.max(...cnt, 1);
      let d = `M${G.x0},${G.rowC[y]}`;
      for (let b = 0; b < NB; b++){ const hh = cnt[b] / mx * G.half; d += `L${G.x0 + (b + .5) * G.w / NB},${G.rowC[y] - hh}`; }
      d += `L${G.x0 + G.w},${G.rowC[y]}`;
      for (let b = NB - 1; b >= 0; b--){ const hh = cnt[b] / mx * G.half; d += `L${G.x0 + (b + .5) * G.w / NB},${G.rowC[y] + hh}`; }
      el("path", { d: d + "Z", fill: y ? "rgba(232,89,12,.16)" : "rgba(25,113,194,.16)", stroke: "none", "data-bg": 1 }, svg);
      const top = incl.slice().sort((a, b) => Math.abs((E.get(b.key) || {}).d || 0) - Math.abs((E.get(a.key) || {}).d || 0)).slice(0, DOTS_LARGE);
      const keep = new Set(top.map(c => c.key));
      show = members.filter(c => keep.has(c.key) || isEdited(c) || c.key === R.sel);
    }
    const dots = show.map(c => ({ c, x: G.X(c.s), r: radius(c) }));
    beeswarm(dots, G.half);
    for (const d of dots) d.cy = G.rowC[y] + d.off;
    allDots.push(...dots);
  }
  $("densityLegend").hidden = !anyDensity;
  // ghosts of original positions for moved / flipped cases
  const byKey = new Map(allDots.map(d => [d.c.key, d]));
  for (const c of R.cases){
    if (c.s === c.s0 && c.y === c.y0) continue;
    const d = byKey.get(c.key); if (!d) continue;
    const gx = G.X(c.s0), gy = G.rowC[c.y0];
    el("line", { x1: gx, y1: gy, x2: d.x, y2: d.cy, stroke: "#868e96", "stroke-dasharray": "3 3", "pointer-events": "none" }, svg);
    el("circle", { cx: gx, cy: gy, r: 3.5, fill: "#fff", stroke: "#868e96", "stroke-width": 1.3, "pointer-events": "none" }, svg);
  }
  allDots.sort((a, b) => a.r - b.r);
  for (const d of allDots){
    const c = d.c, e = E.get(c.key), col = c.y ? "#e8590c" : "#1971c2";
    const circ = el("circle", { cx: d.x.toFixed(1), cy: d.cy.toFixed(1), r: d.r.toFixed(1), class: "dot", "data-key": c.key,
      fill: c.ex ? "#fff" : col, "fill-opacity": c.ex ? 1 : .82,
      stroke: c.ex ? "#868e96" : flagged(e) ? "#212529" : "#fff", "stroke-width": c.ex ? 1.3 : flagged(e) ? 1.8 : 1,
      "stroke-dasharray": c.ex ? "2 2" : null }, svg);
    el("title", {}, circ, `${c.id} · ${clsName(c.y)} · score ${fmtNum(c.s)}` +
      (e ? `\nremoving it: AUC ${signed(e.d)} (${signed(e.dse, 2)} SE)` : c.ex ? "\nexcluded" : ""));
  }
  const sd = byKey.get(R.sel);
  if (sd){
    el("circle", { cx: sd.x, cy: sd.cy, r: sd.r + 4, fill: "none", stroke: "#212529", "stroke-width": 2, "pointer-events": "none" }, svg);
    el("text", { x: sd.x, y: sd.cy - sd.r - 8, "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: "#212529", "pointer-events": "none" }, svg, sd.c.id);
  }
}

/* ----- ROC staircase ----- */
function rocSegments(){
  const a = arrays(false);
  const order = a.s.map((_, i) => i).sort((i, j) => a.s[j] - a.s[i]);
  const m = a.y.filter(v => v === 1).length, n = a.y.length - m;
  const segs = [], keyToSeg = new Map();
  let tp = 0, fp = 0, i = 0;
  while (i < order.length){
    const sc = a.s[order[i]], keys = []; let ya = 0, nb = 0;
    while (i < order.length && a.s[order[i]] === sc){ const k = order[i]; keys.push(a.keys[k]); if (a.y[k] === 1) ya++; else nb++; i++; }
    const seg = { x1: fp / n, y1: tp / m, x2: (fp + nb) / n, y2: (tp + ya) / m, type: ya && nb ? "tie" : ya ? "Y" : "N", keys };
    tp += ya; fp += nb;
    for (const k of keys) keyToSeg.set(k, segs.length);
    segs.push(seg);
  }
  return { segs, keyToSeg };
}
function drawROC(){
  const svg = $("roc"); clearSVG(svg);
  if (!R.A) return;
  const t01 = { ticks: [0, .2, .4, .6, .8, 1], step: .2 };
  const F = frame(svg, 400, 380, { l: 48, r: 12, t: 12, b: 44 }, [0, 1], [0, 1], { xTicks: t01, yTicks: t01,
    xFmt: v => v.toFixed(1), yFmt: v => v.toFixed(1), xLabel: "false positive rate", yLabel: "true positive rate" });
  el("line", { x1: F.X(0), y1: F.Y(0), x2: F.X(1), y2: F.Y(1), stroke: "#dee2e6", "stroke-dasharray": "4 4" }, svg);
  const a0 = arrays(true), pos0 = [], neg0 = [];
  a0.y.forEach((v, i) => (v ? pos0 : neg0).push(a0.s[i]));
  const r0 = rocFromSamples(pos0, neg0);
  el("polyline", { points: ptsStr(r0.fpr, r0.tpr, F.X, F.Y), fill: "none", stroke: "#ced4da", "stroke-width": 3 }, svg);
  if (R.truth && R.dir > 0)
    el("polyline", { points: ptsStr(R.truth.roc.fpr, R.truth.roc.tpr, F.X, F.Y), fill: "none", stroke: "#212529", "stroke-width": 1.6, "stroke-dasharray": "6 4" }, svg);
  const { segs, keyToSeg } = rocSegments();
  R.rocSegs = { segs, F };
  const col = { Y: "#e8590c", N: "#1971c2", tie: "#9c36b5" };
  if (segs.length <= 3000){
    for (const s of segs) el("line", { x1: F.X(s.x1), y1: F.Y(s.y1), x2: F.X(s.x2), y2: F.Y(s.y2), stroke: col[s.type], "stroke-width": 2.2, "stroke-linecap": "round" }, svg);
  } else {
    el("polyline", { points: [segs[0]].concat(segs).map((s, i) => i ? `${F.X(s.x2)},${F.Y(s.y2)}` : `${F.X(s.x1)},${F.Y(s.y1)}`).join(" "), fill: "none", stroke: "#6741d9", "stroke-width": 2 }, svg);
  }
  const si = keyToSeg.get(R.sel);
  if (si !== undefined){
    const s = segs[si];
    el("line", { x1: F.X(s.x1), y1: F.Y(s.y1), x2: F.X(s.x2), y2: F.Y(s.y2), stroke: "#212529", "stroke-width": 8, "stroke-opacity": .25, "stroke-linecap": "round" }, svg);
    el("line", { x1: F.X(s.x1), y1: F.Y(s.y1), x2: F.X(s.x2), y2: F.Y(s.y2), stroke: col[s.type], "stroke-width": 4, "stroke-linecap": "round" }, svg);
    const mx = F.X((s.x1 + s.x2) / 2), my = F.Y((s.y1 + s.y2) / 2), c = R.cases[R.sel];
    const right = mx < F.x0 + F.w - 90;
    el("text", { x: mx + (right ? 10 : -10), y: my + 4, "text-anchor": right ? "start" : "end", "font-size": 12, "font-weight": 700, fill: "#212529" }, svg,
      c.id + (s.keys.length > 1 ? ` (+${s.keys.length - 1} tied)` : ""));
  }
  el("text", { x: F.x0 + F.w - 8, y: F.y0 + F.h - 26, "text-anchor": "end", "font-size": 13, "font-weight": 700, fill: "#5f3dc4" }, svg, `AUC ${f3(R.A.auc)}`);
  el("text", { x: F.x0 + F.w - 8, y: F.y0 + F.h - 10, "text-anchor": "end", "font-size": 12, fill: "#868e96" }, svg,
    `original ${f3(R.A0.auc)}` + (R.truth && R.dir > 0 ? ` · true ${f3(R.truth.auc)}` : ""));
}
function rocClick(evt){
  if (!R.rocSegs) return;
  const { segs, F } = R.rocSegs, p = toSVGCoords($("roc"), evt);
  let best = -1, bd = Infinity;
  for (let i = 0; i < segs.length; i++){
    const s = segs[i], ax = F.X(s.x1), ay = F.Y(s.y1), bx = F.X(s.x2), by = F.Y(s.y2);
    const L = (bx - ax) ** 2 + (by - ay) ** 2, t = L ? Math.max(0, Math.min(1, ((p.x - ax) * (bx - ax) + (p.y - ay) * (by - ay)) / L)) : 0;
    const d = (p.x - ax - t * (bx - ax)) ** 2 + (p.y - ay - t * (by - ay)) ** 2;
    if (d < bd){ bd = d; best = i; }
  }
  if (best >= 0 && bd < 400) select(segs[best].keys[0]);
}

/* ----- sensitivity curve ----- */
function drawSens(){
  const svg = $("sens"); clearSVG(svg);
  const P = R.paths;
  if (!P){ el("text", { x: 240, y: 190, "text-anchor": "middle", "font-size": 14, fill: "#64748b" }, svg, "searching…"); $("sensNote").textContent = ""; return; }
  const K = Math.max(P.down.length, P.up.length) - 1, A = R.A;
  const nEd = R.cases.filter(isEdited).length;
  const vals = [R.c0];
  for (const p of P.down.concat(P.up)) for (const v of [p.auc, p.lo]) if (isFinite(v)) vals.push(v);
  if (nEd) vals.push(A.auc, A.lo);
  if (R.truth && R.dir > 0) vals.push(R.truth.auc);
  let lo = Math.min(...vals), hi = Math.max(...vals); const pad = (hi - lo) * 0.08 || 0.02;
  lo = Math.max(0, lo - pad); hi = Math.min(1, hi + pad);
  const F = frame(svg, 480, 380, { l: 50, r: 14, t: 14, b: 44 }, [0, Math.max(K, 1)], [lo, hi],
    { xLabel: `cases ${P.flips ? "removed or flipped" : "removed"} (k)`, yLabel: "AUC / lower CI limit", nx: Math.min(10, K || 1), xFmt: v => v.toFixed(0) });
  el("polygon", { points: P.up.map(p => `${F.X(p.k)},${F.Y(p.auc)}`).concat(P.down.slice().reverse().map(p => `${F.X(p.k)},${F.Y(p.auc)}`)).join(" "), fill: "rgba(134,142,150,.10)" }, svg);
  el("line", { x1: F.x0, y1: F.Y(R.c0), x2: F.x0 + F.w, y2: F.Y(R.c0), stroke: "#495057", "stroke-width": 1.5, "stroke-dasharray": "2 3" }, svg);
  el("text", { x: F.x0 + 6, y: F.Y(R.c0) - 5, "font-size": 11, fill: "#495057", stroke: "#fff", "stroke-width": 3.5, "paint-order": "stroke" }, svg, `conclusion threshold ${R.c0}`);
  if (P.frag !== null){
    const x = F.X(P.frag);
    el("line", { x1: x, y1: F.y0, x2: x, y2: F.y0 + F.h, stroke: "#495057", "stroke-dasharray": "1 3" }, svg);
    const right = x < F.x0 + F.w - 150;
    el("text", { x: x + (right ? 4 : -4), y: F.y0 + F.h - 6, "text-anchor": right ? "start" : "end", "font-size": 11, fill: "#495057" }, svg, `conclusion changes at k = ${P.frag}`);
  }
  for (const [path, col] of [[P.down, "#e03131"], [P.up, "#2f9e44"]]){
    el("polyline", { points: path.map(p => `${F.X(p.k)},${F.Y(p.auc)}`).join(" "), fill: "none", stroke: col, "stroke-width": 2.2 }, svg);
    el("polyline", { points: path.filter(p => isFinite(p.lo)).map(p => `${F.X(p.k)},${F.Y(p.lo)}`).join(" "), fill: "none", stroke: col, "stroke-width": 1.6, "stroke-dasharray": "5 3" }, svg);
    for (const p of path){
      const c = el("circle", { cx: F.X(p.k), cy: F.Y(p.auc), r: 2.8, fill: col }, svg);
      el("title", {}, c, p.edit ? `k = ${p.k}: ${p.edit.type === "flip" ? "flip" : "remove"} ${p.edit.id} → AUC ${f3(p.auc)}, lower limit ${f3(p.lo)}` : `original: AUC ${f3(p.auc)}, lower limit ${f3(p.lo)}`);
    }
  }
  if (R.truth && R.dir > 0){
    const ty = F.Y(R.truth.auc);
    el("line", { x1: F.x0, y1: ty, x2: F.x0 + F.w, y2: ty, stroke: "#212529", "stroke-width": 1.8, "stroke-dasharray": "7 4" }, svg);
    const below = Math.abs(ty - F.Y(R.c0)) < 16;   // keep clear of the threshold label
    el("text", { x: F.x0 + 6, y: below ? ty + 14 : ty - 5, "font-size": 11, "font-weight": 700, fill: "#212529", stroke: "#fff", "stroke-width": 3.5, "paint-order": "stroke" }, svg, `true AUC ${f3(R.truth.auc)}`);
  }
  if (nEd){
    const x = F.X(Math.min(nEd, Math.max(K, 1)));
    el("line", { x1: x, y1: F.Y(A.auc), x2: x, y2: F.Y(A.lo), stroke: "#7048e8", "stroke-width": 1.5 }, svg);
    el("circle", { cx: x, cy: F.Y(A.auc), r: 5.5, fill: "#7048e8", stroke: "#fff", "stroke-width": 1.5 }, svg);
    el("circle", { cx: x, cy: F.Y(A.lo), r: 4.5, fill: "#fff", stroke: "#7048e8", "stroke-width": 2 }, svg);
    el("text", { x: x + 8, y: F.Y(A.auc) - 6, "font-size": 11.5, "font-weight": 700, fill: "#7048e8" }, svg, "you");
  }
  const list = (path, n) => path.slice(1, n + 1).map(p => idLink(p.edit.id, (p.edit.type === "flip" ? "⇄" : "−"))).join(" ");
  const n = Math.min(6, K);
  let txt = `Most damaging: ${list(P.down, n)}${K > n ? " …" : ""}<br>Most flattering: ${list(P.up, n)}${K > n ? " …" : ""}`;
  if (nEd){
    const best = P.up[Math.min(nEd, P.up.length - 1)];
    txt += `<br>Your ${nEd} edited case${nEd === 1 ? " gives" : "s give"} AUC ${f3(A.auc)}; the most flattering ${nEd} ${P.flips ? "edit" : "removal"}${nEd === 1 ? "" : "s"} would give ${f3(best.auc)}.`;
    if (A.lo >= best.lo - 1e-9 && A.auc > R.A0.auc)
      txt += ` <b class="bad">Your edits are as favourable as the best possible choice of ${nEd}: make sure they are justified by something other than their effect.</b>`;
  }
  $("sensNote").innerHTML = txt + (P.flips ? "" : ` <span class="muted">(− = removal)</span>`);
}
function idLink(id, prefix){
  const k = R.idToKey.get(id);
  return `<button class="mini idlink" data-key="${k}">${prefix || ""}${escapeHTML(id)}</button>`;
}

/* ----- inspector ----- */
function renderInspector(){
  const box = $("inspector");
  const msg = R.msg ? `<p class="bad" style="font-size:13px;margin:0 0 6px">${escapeHTML(R.msg)}</p>` : "";
  const c = R.cases[R.sel];
  if (!c){
    let top = null, best = -1;
    for (const x of R.cases){ const e = effects(x); if (e && isFinite(e.d) && Math.abs(e.d) > best){ best = Math.abs(e.d); top = x; } }
    box.innerHTML = `<h2>Selected case</h2>${msg}<p class="empty-hint">Click a dot, a ROC step or a table row to inspect one observation.` +
      (top ? `<br><br>Largest single effect: ${idLink(top.id)}` : "") + `</p>`;
    return;
  }
  const e = effects(c), other = c.y ? "N" : "Y", n = classCount(c.y);
  const status = [c.ex ? "excluded" : "", c.y !== c.y0 ? "flipped" : "", c.s !== c.s0 ? "moved" : ""].filter(Boolean)
    .map(s => `<span class="badge st">${s}</span>`).join(" ");
  let html = `<h2>Selected case <button class="mini" id="insClose" title="Deselect (Esc)">✕</button></h2>${msg}
    <div class="who">${escapeHTML(c.id)} <span class="badge ${c.y ? "y" : "n"}">${clsName(c.y)}</span> ${status}</div>
    <label class="field">Score <input type="number" id="insScore" step="any" value="${c.s}"></label>`;
  if (isEdited(c)) html += `<p class="note" style="margin-top:0">Original: class ${clsName(c.y0)}, score ${fmtNum(c.s0)}</p>`;
  if (e){
    const concl = e.breaks ? (R.A.holds ? `<span class="bad">conclusion would break</span>` : `<span class="ok">conclusion would now hold</span>`)
      : (R.A.holds ? "conclusion still holds" : "conclusion still fails");
    html += `<dl>
      <dt>Placement</dt><dd>correctly ordered against <b>${pct(e.V, 0)}</b> of ${other} cases</dd>
      <dt>If removed</dt><dd>AUC ${f3(R.A.auc)} → <b>${f3(e.loo)}</b> (${signed(e.d)}, <b>${signed(e.dse, 2)} SE</b>)<br>
        lower limit ${f3(R.A.lo)} → ${f3(e.looLo)}: ${concl}</dd>
      <dt>If its label is flipped</dt><dd>AUC → <b>${f3(e.flipAuc)}</b> (${signed(e.flip)})</dd>
      <dt>If its score could be anywhere</dt><dd>AUC between ${f3(e.min)} and ${f3(e.max)}: a span of 1/${n} = ${(1 / n).toFixed(3)},
        set by the size of class ${clsName(c.y)}</dd></dl>`;
  } else html += `<p class="note">Excluded: it doesn't contribute to the current AUC.</p>`;
  html += `<div class="acts">
    <button class="btn small" id="insEx">${c.ex ? "Include" : "Exclude"} <kbd>Del</kbd></button>
    <button class="btn small" id="insFlip" ${c.ex ? "disabled" : ""}>Flip label <kbd>F</kbd></button>
    <button class="btn small" id="insRestore" ${isEdited(c) ? "" : "disabled"}>Restore <kbd>R</kbd></button></div>`;
  box.innerHTML = html;
  $("insClose").onclick = () => select(null);
  $("insEx").onclick = () => toggleExclude(c);
  $("insFlip").onclick = () => flip(c);
  $("insRestore").onclick = () => restore(c);
  $("insScore").onchange = ev => moveTo(c, parseNumber(ev.target.value));
}

/* ----- table ----- */
const COLS = [
  { k: "id", label: "ID", v: r => r.c.id, tip: "Case identifier" },
  { k: "cls", label: "class", v: r => r.c.y, tip: "Current label (original → current if flipped)" },
  { k: "score", label: "score", v: r => r.c.s, tip: "Current score (original shown if moved)" },
  { k: "V", label: "placement", v: r => r.e ? r.e.V : NaN, tip: "Share of the other class this case is correctly ordered against (ties ½). Low = badly ranked." },
  { k: "abs", label: "ΔAUC if removed", v: r => r.e ? Math.abs(r.e.d) : NaN, tip: "AUC without the case minus AUC with it. Sorting uses the absolute value." },
  { k: "dse", label: "in SE", v: r => r.e ? r.e.dse : NaN, tip: "ΔAUC if removed, divided by the current DeLong standard error" },
  { k: "brk", label: "conclusion", v: r => r.e && r.e.breaks ? 1 : 0, tip: "Would removing this case change the conclusion (lower CI limit > threshold)?" },
  { k: "flip", label: "ΔAUC if flipped", v: r => r.e ? r.e.flip : NaN, tip: "Change in AUC if this case's label were the other class" },
  { k: "range", label: "AUC if moved", v: r => r.e ? r.e.max - r.e.min : NaN, tip: "Lowest and highest AUC reachable by moving only this case's score (span = 1 / class size)" },
  { k: "act", label: "", v: () => 0, tip: "" }
];
function renderTable(scrollToSel){
  const wrap = $("tableWrap"), keep = R.tableTop ? 0 : wrap.scrollTop, T = R.table;
  R.tableTop = false;
  let rows = R.cases.map(c => ({ c, e: effects(c) }));
  if (T.filter === "Y") rows = rows.filter(r => r.c.y === 1);
  else if (T.filter === "N") rows = rows.filter(r => r.c.y === 0);
  else if (T.filter === "edited") rows = rows.filter(r => isEdited(r.c));
  const col = COLS.find(c => c.k === T.sort) || COLS[4];
  rows.sort((a, b) => {
    const x = col.v(a), y = col.v(b);
    const nx = typeof x === "number" && !isFinite(x), ny = typeof y === "number" && !isFinite(y);
    if (nx !== ny) return nx ? 1 : -1;
    const c = typeof x === "string" ? x.localeCompare(y, undefined, { numeric: true }) : x - y;
    return T.asc ? c : -c;
  });
  const total = rows.length;
  if (!T.all && rows.length > TOP_ROWS){
    const selRow = rows.find(r => r.c.key === R.sel);
    rows = rows.slice(0, TOP_ROWS);
    if (selRow && !rows.includes(selRow)) rows.push(selRow);
  }
  let maxAbs = 0; for (const c of R.cases){ const e = effects(c); if (e && isFinite(e.d)) maxAbs = Math.max(maxAbs, Math.abs(e.d)); }
  const bar = d => { if (!isFinite(d) || !maxAbs) return ""; const f = d / maxAbs * 50;
    return `<span class="bar"><i style="left:${f < 0 ? 50 + f : 50}%;width:${Math.abs(f)}%"></i></span>`; };
  const head = COLS.map(c => `<th data-k="${c.k}" title="${c.tip}" class="${c.k === T.sort ? "sorted" + (T.asc ? " asc" : "") : ""}">${c.label}</th>`).join("");
  const body = rows.map(({ c, e }) => {
    const cls = c.y !== c.y0 ? `${clsName(c.y0)}→<b>${clsName(c.y)}</b>` : `<b style="color:${c.y ? "var(--y)" : "var(--n)"}">${clsName(c.y)}</b>`;
    const score = fmtNum(c.s) + (c.s !== c.s0 ? `<span class="was">was ${fmtNum(c.s0)}</span>` : "");
    const acts = `<button class="mini" data-act="ex">${c.ex ? "include" : "exclude"}</button>` +
      (c.ex ? "" : `<button class="mini" data-act="flip">flip</button>`) + (isEdited(c) ? `<button class="mini" data-act="restore">restore</button>` : "");
    const cells = e ? [pct(e.V, 0), `${signed(e.d)}${bar(e.d)}`, signed(e.dse, 2),
      e.breaks ? (R.A.holds ? `<span class="tag brk">breaks</span>` : `<span class="tag mk">creates</span>`) : "",
      signed(e.flip), `${f3(e.min)} – ${f3(e.max)}`] : ["excluded", "", "", "", "", ""];
    return `<tr data-key="${c.key}" class="${c.key === R.sel ? "sel" : ""} ${c.ex ? "excl" : ""}">
      <td class="l">${escapeHTML(c.id)}</td><td>${cls}</td><td>${score}</td>${cells.map(v => `<td>${v}</td>`).join("")}<td class="l">${acts}</td></tr>`;
  }).join("");
  wrap.innerHTML = `<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
  wrap.scrollTop = keep;
  $("tableNote").textContent = (total > rows.length ? `Showing the first ${TOP_ROWS} of ${total} rows (tick "show all rows"). ` : "") +
    "ΔAUC if removed = AUC without the case − AUC with it: positive means the case pulls the AUC down. " +
    "'In SE' divides by the current DeLong standard error.";
  if (scrollToSel){
    const tr = wrap.querySelector("tr.sel");
    if (tr){ const top = tr.offsetTop - wrap.clientHeight / 2; if (tr.offsetTop < wrap.scrollTop + 30 || tr.offsetTop > wrap.scrollTop + wrap.clientHeight - 30) wrap.scrollTop = Math.max(0, top); }
  }
}

/* ----- log ----- */
function renderLog(){
  if (!R.log.length){ $("log").innerHTML = `<p class="note" style="margin:0">No edits yet: the current analysis is the original one.</p>`; return; }
  $("log").innerHTML = `<ol>${R.log.map(e => `<li>${describeEdit(e)} <span class="d">· AUC ${f3(e.aucBefore)} → ${f3(e.aucAfter)},
    lower limit ${f3(e.loBefore)} → ${f3(e.loAfter)}</span></li>`).join("")}</ol>`;
}

/* ---------- Loading data ---------- */
function clearSimLink(){
  R.truth = null;
  if (/(^#|&)sim=/.test(location.hash)) history.replaceState(null, "", location.pathname + location.search);
}
function loadSim(cfg){
  const { cases, trueAuc, trueRoc } = casesFromSim(cfg);
  R.simCfg = cfg; R.parsed = null; $("mapping").hidden = true;
  R.truth = { auc: trueAuc, roc: thinCurve(trueRoc.fpr, trueRoc.tpr, 0.002) };
  R.dir = 1; $("dirHigh").checked = true;
  if (![...$("example").options].some(o => o.value === "__sim")) $("example").add(new Option("From the simulator", "__sim"), 0);
  $("example").value = "__sim";
  const tr = cfg.transform !== "none" ? `, score transform ${escapeHTML(TRANSFORMS[cfg.transform].label.split(" (")[0])}` : "";
  setCases(cases, {
    title: `From the simulator${cfg.label ? ": " + escapeHTML(cfg.label) : ""}`,
    text: `${cfg.nY} Y cases drawn from ${escapeHTML(describeDist(cfg.Y))} and ${cfg.nN} N cases from ${escapeHTML(describeDist(cfg.N))} ` +
      `(seed ${cfg.seed}${tr}): the same sample you saw in the simulator. The <b>true AUC is ${trueAuc.toFixed(3)}</b>. ` +
      `Every case is a legitimate draw from these distributions, so nothing here is an error: whatever looks "dubious" is ordinary sampling variability.`,
    tryIt: "Remove the cases with the largest effects and compare the AUC with the true AUC (dark dashed line on the sensitivity curve " +
      "and in the ROC plot). Removing influential cases doesn't bring the estimate reliably closer to the truth: it pushes it in " +
      "whichever direction you choose. That is what 'cleaning' influential observations does when nothing is actually wrong. " +
      "Then go back to the simulator, press <b>New sample ↻</b> and open the new sample here: different cases become 'dubious'."
  });
  updateDataInfo();
}
function loadExample(key){
  const ex = EXAMPLES[key];
  clearSimLink();
  R.parsed = null; $("mapping").hidden = true;
  setCases(ex.make(), { title: ex.label, text: ex.text, tryIt: ex.tryIt });
  updateDataInfo();
}
function loadText(text, name){
  const parsed = parseDelimited(text);
  if (parsed.rows.length < 4 || parsed.header.length < 2){ $("dataInfo").innerHTML = `<span class="bad">Couldn't read a table with at least 2 columns and 4 rows.</span>`; return; }
  R.parsed = parsed; R.fileName = name;
  const g = guessColumns(parsed);
  const opts = (sel, withNone) => sel.innerHTML = (withNone ? `<option value="-1">(none: use row numbers)</option>` : "") +
    parsed.header.map((h, i) => `<option value="${i}">${escapeHTML(h)}</option>`).join("");
  opts($("mapScore")); opts($("mapLabel")); opts($("mapId"), true);
  $("mapScore").value = g.scoreCol; $("mapLabel").value = g.labelCol; $("mapId").value = g.idCol;
  fillYValues(g.yValue);
  $("mapping").hidden = false;
  if (![...$("example").options].some(o => o.value === "__data")) $("example").add(new Option("Your data", "__data"));
  $("example").value = "__data";
  applyMapping();
}
function fillYValues(pref){
  const vals = distinctValues(R.parsed.rows, +$("mapLabel").value);
  $("mapY").innerHTML = vals.slice(0, 50).map(v => `<option>${escapeHTML(v)}</option>`).join("");
  $("mapY").value = pref !== undefined && vals.includes(pref) ? pref : (vals.find(v => Y_WORDS.includes(String(v).toLowerCase())) ?? vals[vals.length - 1]);
}
function applyMapping(){
  const map = { scoreCol: +$("mapScore").value, labelCol: +$("mapLabel").value, idCol: +$("mapId").value, yValue: $("mapY").value };
  const { cases, dropped } = buildCases(R.parsed, map);
  const m = cases.filter(c => c.y).length, n = cases.length - m;
  if (m < 2 || n < 2){ $("dataInfo").innerHTML = `<span class="bad">Need at least 2 cases in each class (found ${m} Y, ${n} N). Check the label column and the Y value.</span>`; return; }
  const nLab = distinctValues(R.parsed.rows, map.labelCol).length;
  R.dropped = dropped; R.otherLabels = nLab > 2;
  clearSimLink();
  setCases(cases, { title: `Your data: ${escapeHTML(R.fileName)}`,
    text: `${m} Y cases and ${n} N cases${dropped.length ? `; ${dropped.length} row(s) with a missing label or score were ignored` : ""}. ` +
      `Everything is computed in your browser; nothing is uploaded.`,
    tryIt: "Sort the table by |ΔAUC if removed| and inspect the top cases. Then check the fragility box and the sensitivity curve: " +
      "are the cases you find dubious special, or would <em>any</em> few removals change the picture as much?" });
  updateDataInfo();
}
function updateDataInfo(){
  const A0 = R.A0;
  let t = `${A0.m} Y · ${A0.n} N · prevalence ${pct(A0.m / (A0.m + A0.n))}`;
  if (R.parsed && R.dropped && R.dropped.length) t += ` · ${R.dropped.length} row(s) dropped (rows ${R.dropped.slice(0, 8).join(", ")}${R.dropped.length > 8 ? "…" : ""})`;
  if (R.parsed && R.otherLabels) t += `<br>Labels other than “${escapeHTML($("mapY").value)}” are all treated as N.`;
  if (A0.auc < 0.5) t += `<br><span class="bad">AUC &lt; 0.5: are lower scores more Y-like? Consider unticking “Higher score means Y”.</span>`;
  $("dataInfo").innerHTML = t;
}
function download(name, text){
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type: "text/csv" }));
  a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
const csvCell = v => /[",\n;]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v);

/* ---------- Wiring ---------- */
function init(){
  for (const [k, ex] of Object.entries(EXAMPLES)) $("example").add(new Option(ex.label, k));
  $("example").addEventListener("change", e => {
    const v = e.target.value;
    if (v === "__data"){ if (R.parsed) applyMapping(); }
    else if (v === "__sim"){ if (R.simCfg){ history.replaceState(null, "", "#" + encodeSimConfig(R.simCfg, R.simCfg.label)); loadSim(R.simCfg); } }
    else loadExample(v);
  });
  window.addEventListener("hashchange", () => { const cfg = decodeSimConfig(location.hash); if (cfg) loadSim(cfg); });
  $("file").addEventListener("change", e => {
    const f = e.target.files[0]; if (!f) return;
    const rd = new FileReader(); rd.onload = () => loadText(rd.result, f.name); rd.readAsText(f); e.target.value = "";
  });
  document.querySelector('label[for="file"]').addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); $("file").click(); } });
  $("btnPaste").addEventListener("click", () => { const b = $("pasteBox"); b.hidden = !b.hidden; $("btnPaste").setAttribute("aria-expanded", String(!b.hidden)); if (!b.hidden) $("pasteText").focus(); });
  $("btnPasteLoad").addEventListener("click", () => loadText($("pasteText").value, "pasted data"));
  for (const id of ["mapScore", "mapId", "mapY"]) $(id).addEventListener("change", applyMapping);
  $("mapLabel").addEventListener("change", () => { fillYValues(); applyMapping(); });
  $("dirHigh").addEventListener("change", e => { R.dir = e.target.checked ? 1 : -1; recomputeOriginal(); recompute(); renderAll(); schedulePaths(); updateDataInfo(); });
  const settings = () => {
    R.level = +$("level").value; R.c0 = clampNum($("c0").value, 0, 0.99, 0.5);
    recomputeOriginal(); recompute(); renderAll(); schedulePaths();
  };
  $("level").addEventListener("change", settings); $("c0").addEventListener("change", settings);
  $("pathFlips").addEventListener("change", schedulePaths);
  $("btnUndo").addEventListener("click", undo); $("btnReset").addEventListener("click", resetAll);

  // strip plot: select, drag to move
  const svg = $("strip");
  svg.addEventListener("pointerdown", e => {
    const dot = e.target.closest(".dot");
    if (!dot){ if (R.sel !== null) select(null, false); return; }
    const c = R.cases[+dot.dataset.key], p = toSVGCoords(svg, e);
    R.drag = { c, x: p.x, moved: false, before: snap(c), aucBefore: R.A.auc, loBefore: R.A.lo, raf: 0 };
    svg.setPointerCapture(e.pointerId);
    if (R.sel !== c.key) select(c.key);
  });
  svg.addEventListener("pointermove", e => {
    const D = R.drag; if (!D) return;
    const p = toSVGCoords(svg, e);
    if (!D.moved && Math.abs(p.x - D.x) < 3) return;
    D.moved = true; svg.classList.add("dragging");
    const G = R.frame, x = Math.min(G.x0 + G.w, Math.max(G.x0, p.x)), step = (G.hi - G.lo) / 2000;
    D.c.s = Math.round(G.Xinv(x) / step) * step;
    D.c.s = +D.c.s.toPrecision(6);
    recompute();
    if (!D.raf) D.raf = requestAnimationFrame(() => { D.raf = 0; renderLive(); });
  });
  const endDrag = () => {
    const D = R.drag; if (!D) return;
    R.drag = null; svg.classList.remove("dragging");
    if (D.moved && D.c.s !== D.before.s){
      R.log.push({ type: "move", key: D.c.key, id: D.c.id, before: D.before, after: snap(D.c), aucBefore: D.aucBefore, aucAfter: R.A.auc, loBefore: D.loBefore, loAfter: R.A.lo });
      computeDomain(); renderAll();
    }
  };
  svg.addEventListener("pointerup", endDrag); svg.addEventListener("pointercancel", endDrag);

  $("roc").addEventListener("click", rocClick);
  $("tableWrap").addEventListener("click", e => {
    const th = e.target.closest("th");
    if (th){ const k = th.dataset.k; if (k === "act") return; if (R.table.sort === k) R.table.asc = !R.table.asc; else { R.table.sort = k; R.table.asc = k === "id" || k === "V"; } R.tableTop = true; renderTable(false); return; }
    const tr = e.target.closest("tr[data-key]"); if (!tr) return;
    const c = R.cases[+tr.dataset.key], act = e.target.dataset && e.target.dataset.act;
    if (act === "ex") toggleExclude(c); else if (act === "flip") flip(c); else if (act === "restore") restore(c);
    else select(c.key, false);
  });
  $("tFilter").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return;
    R.table.filter = b.dataset.f; for (const x of $("tFilter").children) x.classList.toggle("on", x === b); R.tableTop = true; renderTable(false); });
  $("tAll").addEventListener("change", e => { R.table.all = e.target.checked; renderTable(false); });
  document.addEventListener("click", e => { const b = e.target.closest(".idlink"); if (b && b.dataset.key !== "undefined") select(+b.dataset.key); });

  document.addEventListener("keydown", e => {
    const tag = (e.target.tagName || "").toLowerCase();
    if (["input", "textarea", "select"].includes(tag)) return;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z"){ e.preventDefault(); undo(); return; }
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const c = R.cases[R.sel];
    if (e.key === "Escape"){ select(null, false); return; }
    if (e.key === "ArrowLeft" || e.key === "ArrowRight"){
      const order = R.cases.slice().sort((a, b) => R.dir * (a.s - b.s) || a.key - b.key);
      const i = c ? order.indexOf(c) : -1, j = e.key === "ArrowRight" ? i + 1 : (i < 0 ? order.length - 1 : i - 1);
      if (order[j]){ e.preventDefault(); select(order[j].key); }
      return;
    }
    if (!c) return;
    if (e.key === "Delete" || e.key === "Backspace"){ e.preventDefault(); toggleExclude(c); }
    else if (e.key.toLowerCase() === "f") flip(c);
    else if (e.key.toLowerCase() === "r") restore(c);
  });

  $("btnLogCSV").addEventListener("click", () => {
    let csv = "step,action,id,label_before,label_after,score_before,score_after,excluded_after,auc_before,auc_after,lower_before,lower_after\n";
    R.log.forEach((e, i) => { csv += [i + 1, e.type, csvCell(e.id), clsName(e.before.y), clsName(e.after.y), e.before.s, e.after.s, e.after.ex,
      e.aucBefore, e.aucAfter, e.loBefore, e.loAfter].join(",") + "\n"; });
    download("auc_edit_log.csv", csv);
  });
  $("btnDataCSV").addEventListener("click", () => {
    let csv = "id,label_original,score_original,label,score,excluded,placement,dAUC_if_removed,dAUC_if_removed_SE,dAUC_if_flipped\n";
    for (const c of R.cases){
      const e = effects(c);
      csv += [csvCell(c.id), clsName(c.y0), c.s0, clsName(c.y), c.s, c.ex, e ? e.V : "", e ? e.d : "", e ? e.dse : "", e ? e.flip : ""].join(",") + "\n";
    }
    download("auc_data_edited.csv", csv);
  });

  const sim = decodeSimConfig(location.hash);
  // deep link (used by the guide): auc-robustness.html#example=<key>
  const m = location.hash.match(/^#example=(\w+)$/), ex = m && hasOwn(EXAMPLES, m[1]) ? m[1] : "lowY";
  if (sim) loadSim(sim);
  else { $("example").value = ex; loadExample(ex); }
}
init();
