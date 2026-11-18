/*
 * robustness-core.js: pure maths for auc-robustness.html (no DOM). Depends on stats.js.
 *
 * Notation: m Y cases with placement values V10(i) = share of N cases scored below Y case i (ties ½),
 *           n N cases with placement values V01(j) = share of Y cases scored above N case j (ties ½).
 * AUC = mean(V10) = mean(V01); DeLong Var = s²(V10)/m + s²(V01)/n.
 * Every "what if" below (remove / flip / move one case) is computed exactly from these quantities.
 */
"use strict";

function upperBound(a, t){ let lo = 0, hi = a.length; while (lo < hi){ const mid = (lo + hi) >> 1; if (a[mid] <= t) lo = mid + 1; else hi = mid; } return lo; }

/** DeLong SE from running sums of the structural components (A: V10 over m Y cases, B: V01 over n N cases). */
function seFromSums(m, n, A1, A2, B1, B2){
  if (m < 2 || n < 2) return NaN;
  const v10 = Math.max(0, (A2 - A1 * A1 / m) / (m - 1)), v01 = Math.max(0, (B2 - B1 * B1 / n) / (n - 1));
  return Math.sqrt(v10 / m + v01 / n);
}

/**
 * Full single-case sensitivity analysis of a labelled sample.
 * @param {ArrayLike<number>} y  labels (1 = Y, 0 = N)
 * @param {ArrayLike<number>} s  scores (higher = more Y-like)
 * @param {number} level         CI level, e.g. 0.95
 * @param {number} c0            the conclusion is "lower CI limit > c0"
 * Returns overall AUC / SE / CI plus, per case (same order as the input):
 *   V        placement value (share of the other class it is correctly ordered against)
 *   looAuc, looSe, looLo, looHi   AUC and CI if the case is removed (exact DeLong, O(log N) per case)
 *   flipAuc  AUC if the case's label is flipped (exact)
 *   moveMin, moveMax  AUC range if the case's score could be anywhere
 */
function analyzeCases(y, s, level, c0){
  const N = y.length;
  let m = 0; for (let k = 0; k < N; k++) if (y[k] === 1) m++;
  const n = N - m;
  const out = { m, n, N, auc: NaN, se: NaN, lo: NaN, hi: NaN, holds: false, c0, level,
    V: new Float64Array(N), looAuc: new Float64Array(N).fill(NaN), looSe: new Float64Array(N).fill(NaN),
    looLo: new Float64Array(N).fill(NaN), looHi: new Float64Array(N).fill(NaN), flipAuc: new Float64Array(N).fill(NaN),
    moveMin: new Float64Array(N).fill(NaN), moveMax: new Float64Array(N).fill(NaN) };
  if (m < 1 || n < 1) return out;
  const P = new Float64Array(m), Q = new Float64Array(n);
  { let a = 0, b = 0; for (let k = 0; k < N; k++) if (y[k] === 1) P[a++] = s[k]; else Q[b++] = s[k]; }
  P.sort(); Q.sort();

  // placement values, computed on the sorted arrays
  const Vp = new Float64Array(m), Vq = new Float64Array(n);
  for (let i = 0; i < m; i++){ const lo = lowerBound(Q, P[i]), hi = upperBound(Q, P[i]); Vp[i] = (lo + 0.5 * (hi - lo)) / n; }
  for (let j = 0; j < n; j++){ const lo = lowerBound(P, Q[j]), hi = upperBound(P, Q[j]); Vq[j] = (m - hi + 0.5 * (hi - lo)) / m; }
  let A1 = 0, A2 = 0, B1 = 0, B2 = 0;
  for (const v of Vp){ A1 += v; A2 += v * v; }
  for (const v of Vq){ B1 += v; B2 += v * v; }
  // prefix sums of placement values along each sorted class
  const cP = new Float64Array(m + 1), cQ = new Float64Array(n + 1);
  for (let i = 0; i < m; i++) cP[i + 1] = cP[i] + Vp[i];
  for (let j = 0; j < n; j++) cQ[j + 1] = cQ[j] + Vq[j];

  const auc = A1 / m, se = seFromSums(m, n, A1, A2, B1, B2), ci = logitCI(auc, se, level);
  Object.assign(out, { auc, se, lo: ci.lo, hi: ci.hi, degenerate: ci.degenerate, holds: ci.lo > c0 });
  const U = auc * m * n;   // number of correctly ordered (Y, N) pairs, ties ½

  for (let k = 0; k < N; k++){
    const sc = s[k];
    if (y[k] === 1){
      const lo = lowerBound(Q, sc), hi = upperBound(Q, sc), V = (lo + 0.5 * (hi - lo)) / n;
      out.V[k] = V;
      out.moveMin[k] = auc - V / m; out.moveMax[k] = auc + (1 - V) / m;
      // remove this Y case: V10 of the others is unchanged; each N case's V01 loses this pair
      if (m >= 3){
        const a1 = A1 - V, a2 = A2 - V * V;
        const sumPsi = n * V, sumPsi2 = lo + 0.25 * (hi - lo), sumVPsi = cQ[lo] + 0.5 * (cQ[hi] - cQ[lo]);
        const b1 = (m * B1 - sumPsi) / (m - 1), b2 = (m * m * B2 - 2 * m * sumVPsi + sumPsi2) / ((m - 1) * (m - 1));
        setLoo(out, k, a1 / (m - 1), seFromSums(m - 1, n, a1, a2, b1, b2), level);
      }
      // flip to N: lose its pairs as a Y case, gain pairs as an N case against the other Y cases
      if (m >= 2){
        const pLo = lowerBound(P, sc), pHi = upperBound(P, sc);
        const gain = (m - pHi) + 0.5 * (pHi - pLo - 1);
        out.flipAuc[k] = (U - n * V + gain) / ((m - 1) * (n + 1));
      }
    } else {
      const lo = lowerBound(P, sc), hi = upperBound(P, sc), V = (m - hi + 0.5 * (hi - lo)) / m;
      out.V[k] = V;
      out.moveMin[k] = auc - V / n; out.moveMax[k] = auc + (1 - V) / n;
      if (n >= 3){
        const b1 = B1 - V, b2 = B2 - V * V;
        const sumPhi = m * V, sumPhi2 = (m - hi) + 0.25 * (hi - lo);
        const sumVPhi = (cP[m] - cP[hi]) + 0.5 * (cP[hi] - cP[lo]);
        const a1 = (n * A1 - sumPhi) / (n - 1), a2 = (n * n * A2 - 2 * n * sumVPhi + sumPhi2) / ((n - 1) * (n - 1));
        setLoo(out, k, b1 / (n - 1), seFromSums(m, n - 1, a1, a2, b1, b2), level);
      }
      if (n >= 2){
        const qLo = lowerBound(Q, sc), qHi = upperBound(Q, sc);
        const gain = qLo + 0.5 * (qHi - qLo - 1);
        out.flipAuc[k] = (U - m * V + gain) / ((m + 1) * (n - 1));
      }
    }
  }
  return out;
}
function setLoo(out, k, auc, se, level){
  const ci = logitCI(auc, se, level);
  out.looAuc[k] = auc; out.looSe[k] = se; out.looLo[k] = ci.lo; out.looHi[k] = ci.hi;
}

/** AUC + CI of an arbitrary labelled sample (used after flips, where no O(1) update of the SE exists). */
function aucCI(y, s, level){
  const pos = [], neg = [];
  for (let k = 0; k < y.length; k++) (y[k] === 1 ? pos : neg).push(s[k]);
  return delongFromSamples(Float64Array.from(pos), Float64Array.from(neg), level);
}

/**
 * Greedy sensitivity path: repeatedly apply the single edit that moves the lower CI limit the most
 * in direction `dir` (-1 = most damaging, +1 = most flattering). Edits are removals, and optionally
 * label flips (flip candidates are pre-screened by their exact AUC effect, then evaluated exactly).
 * Greedy gives an achievable path, so "k edits suffice" is an upper bound on the true fragility.
 * Returns [{k, auc, lo, hi, edit:{type, id, label}}] starting at k = 0.
 */
function greedyPath(y, s, ids, opts){
  const { level, c0, dir, maxSteps = 25, flips = false, flipCandidates = 25, minClass = 3 } = opts;
  let Y = Array.from(y), Sc = Array.from(s), I = Array.from(ids);
  const first = analyzeCases(Y, Sc, level, c0);
  const path = [{ k: 0, auc: first.auc, lo: first.lo, hi: first.hi, edit: null }];
  let A = first;
  for (let step = 1; step <= maxSteps; step++){
    let best = -1, bestVal = -Infinity, bestType = "remove", bestAuc = NaN, bestHi = NaN, bestLo = NaN;
    const score = (lo, auc) => dir * lo + 1e-9 * dir * auc;   // tie-break on the AUC itself
    for (let k = 0; k < Y.length; k++){
      const classSize = Y[k] === 1 ? A.m : A.n;
      if (classSize <= minClass || !isFinite(A.looLo[k])) continue;
      const v = score(A.looLo[k], A.looAuc[k]);
      if (v > bestVal){ bestVal = v; best = k; bestType = "remove"; bestAuc = A.looAuc[k]; bestLo = A.looLo[k]; bestHi = A.looHi[k]; }
    }
    if (flips){
      const cand = [];
      for (let k = 0; k < Y.length; k++){
        const classSize = Y[k] === 1 ? A.m : A.n;
        if (classSize > minClass && isFinite(A.flipAuc[k])) cand.push(k);
      }
      cand.sort((a, b) => dir * (A.flipAuc[b] - A.flipAuc[a]));
      for (const k of cand.slice(0, flipCandidates)){
        Y[k] = 1 - Y[k];
        const d = aucCI(Y, Sc, level);
        Y[k] = 1 - Y[k];
        const v = score(d.lo, d.auc);
        if (v > bestVal){ bestVal = v; best = k; bestType = "flip"; bestAuc = d.auc; bestLo = d.lo; bestHi = d.hi; }
      }
    }
    if (best < 0) break;
    const edit = { type: bestType, id: I[best], label: Y[best] };
    if (bestType === "remove"){ Y.splice(best, 1); Sc.splice(best, 1); I.splice(best, 1); }
    else Y[best] = 1 - Y[best];
    A = analyzeCases(Y, Sc, level, c0);
    path.push({ k: step, auc: A.auc, lo: A.lo, hi: A.hi, edit });
    void bestAuc; void bestLo; void bestHi;
  }
  return path;
}
/** First k along a path at which "lower CI > c0" changes from its k = 0 status (null if never). */
function fragilityFromPath(path, c0){
  const start = path[0].lo > c0;
  for (const p of path) if ((p.lo > c0) !== start) return p.k;
  return null;
}

/* ---------- Delimited text parsing ---------- */
/** Parse CSV / TSV / semicolon text. Auto-detects the delimiter and a header row. Handles quoted fields. */
function parseDelimited(text){
  text = String(text).replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
  const firstLine = (text.split("\n").find(l => l.trim() !== "") || "");
  const counts = { ",": 0, ";": 0, "\t": 0, "|": 0 };
  let inQ = false;
  for (const ch of firstLine){ if (ch === '"') inQ = !inQ; else if (!inQ && ch in counts) counts[ch]++; }
  // on ties prefer tab, then ";" (commas may be decimal marks, as in "1;0,83"), then "|", then ","
  let delim = ["\t", ";", "|", ","].reduce((a, b) => counts[b] > counts[a] ? b : a, "\t");
  const whitespace = counts[delim] === 0;   // e.g. "Y 0.83" separated by spaces
  const rows = [];
  let row = [], field = "", q = false;
  const pushField = () => { row.push(field.trim()); field = ""; };
  const pushRow = () => { pushField(); if (row.some(v => v !== "")) rows.push(row); row = []; };
  for (let i = 0; i < text.length; i++){
    const ch = text[i];
    if (q){
      if (ch === '"'){ if (text[i + 1] === '"'){ field += '"'; i++; } else q = false; }
      else field += ch;
    } else if (ch === '"' && field.trim() === "") { q = true; field = ""; }
    else if (ch === "\n") pushRow();
    else if (whitespace ? /\s/.test(ch) : ch === delim){
      if (whitespace){ if (field !== "") pushField(); }
      else pushField();
    }
    else field += ch;
  }
  if (field !== "" || row.length) pushRow();
  if (whitespace) delim = " ";
  if (!rows.length) return { header: [], rows: [], delim, hasHeader: false };
  const width = Math.max(...rows.map(r => r.length));
  for (const r of rows) while (r.length < width) r.push("");
  const isNum = v => parseNumber(v) !== null;
  // header if the first row has a non-numeric cell in a column whose other cells are mostly numeric,
  // or if every cell of the first row is non-numeric while later rows contain numbers
  const first = rows[0], rest = rows.slice(1, 50);
  let hasHeader = false;
  for (let c = 0; c < width; c++){
    const numericBelow = rest.filter(r => isNum(r[c])).length;
    if (!isNum(first[c]) && rest.length && numericBelow >= 0.8 * rest.length) hasHeader = true;
  }
  if (!hasHeader && first.every(v => !isNum(v)) && rest.some(r => r.some(isNum))){
    // all-text first row above data: still a header if its values don't reappear below
    hasHeader = first.every((v, c) => !rest.some(r => r[c] === v));
  }
  const header = hasHeader ? first.map((h, c) => h || `column ${c + 1}`) : first.map((_, c) => `column ${c + 1}`);
  return { header, rows: hasHeader ? rows.slice(1) : rows, delim, hasHeader };
}
/** Number parser accepting decimal commas ("0,83") and rejecting empty / NA-like cells. */
function parseNumber(v){
  if (v === null || v === undefined) return null;
  let t = String(v).trim();
  if (t === "" || /^(na|nan|null|none|missing|\.|-)$/i.test(t)) return null;
  if (/^[+-]?\d+,\d+$/.test(t)) t = t.replace(",", ".");
  const x = Number(t);
  return isFinite(x) ? x : null;
}
const Y_WORDS = ["1", "y", "yes", "pos", "positive", "true", "t", "case", "cases", "disease", "diseased", "abnormal", "event", "d", "+", "p"];
/** Guess which columns hold id, label and score, and which label value means Y. */
function guessColumns(parsed){
  const { header, rows } = parsed, w = header.length;
  const info = header.map((h, c) => {
    const vals = rows.map(r => r[c]);
    const nums = vals.map(parseNumber).filter(v => v !== null);
    const distinct = new Set(vals.filter(v => v !== ""));
    return { c, name: String(h).toLowerCase(), numFrac: nums.length / Math.max(1, vals.length), distinct: distinct.size, unique: distinct.size === vals.length };
  });
  const byName = re => info.find(i => re.test(i.name));
  let label = byName(/^(y|label|class|outcome|status|truth|target|group|disease|diagnosis|event|tag)$/) ||
    info.filter(i => i.distinct === 2).sort((a, b) => b.numFrac - a.numFrac)[0] || info.find(i => i.distinct <= 5);
  let score = byName(/^(score|prob|probability|pred|prediction|risk|marker|value|rating|s|x)$/);
  if (!score || score === label) score = info.filter(i => i !== label && i.numFrac > 0.8).sort((a, b) => b.distinct - a.distinct)[0];
  let id = byName(/^(id|case|case_id|caseid|patient|subject|name|key|record)$/);
  if (!id || id === label || id === score) id = info.find(i => i !== label && i !== score && i.unique && i.numFrac < 1);
  const labelCol = label ? label.c : Math.min(1, w - 1), scoreCol = score ? score.c : w - 1;
  const values = distinctValues(rows, labelCol);
  const yValue = values.find(v => Y_WORDS.includes(String(v).toLowerCase())) ?? values[values.length - 1];
  return { idCol: id ? id.c : -1, labelCol, scoreCol, yValue, labelValues: values };
}
function distinctValues(rows, c){
  const seen = new Map();
  for (const r of rows){ const v = r[c]; if (v !== "" && v !== undefined) seen.set(v, (seen.get(v) || 0) + 1); }
  return [...seen.keys()].sort((a, b) => {
    const x = parseNumber(a), z = parseNumber(b);
    return x !== null && z !== null ? x - z : String(a).localeCompare(String(b));
  });
}
/** Build cases from parsed rows and a column mapping. Rows with a missing label or score are dropped. */
function buildCases(parsed, map){
  const cases = [], dropped = [];
  parsed.rows.forEach((r, i) => {
    const lab = r[map.labelCol], sc = parseNumber(r[map.scoreCol]);
    if (lab === undefined || lab === "" || sc === null){ dropped.push(i + 1); return; }
    const y = String(lab) === String(map.yValue) ? 1 : 0;
    const id = map.idCol >= 0 && r[map.idCol] !== "" ? String(r[map.idCol]) : `#${i + 1}`;
    cases.push({ id, y, s: sc });
  });
  // make ids unique
  const seen = new Map();
  for (const c of cases){ const k = seen.get(c.id) || 0; seen.set(c.id, k + 1); if (k) c.id = `${c.id}·${k + 1}`; }
  return { cases, dropped };
}

/* ---------- Example datasets ---------- */
function simulatedCases(seed, spec){
  const rng = makeRNG(seed), out = [];
  const pad = (k, w) => String(k).padStart(w, "0");
  for (const [cls, n, gen] of [["Y", spec.nY, spec.genY], ["N", spec.nN, spec.genN]]){
    const w = String(n).length < 2 ? 2 : String(n).length;
    for (let i = 1; i <= n; i++) out.push({ id: `${cls}${pad(i, w)}`, y: cls === "Y" ? 1 : 0, s: +gen(rng).toFixed(spec.digits ?? 2) });
  }
  for (const f of spec.fix || []) Object.assign(out.find(c => c.id === f.id), f);
  return out;
}
function hanleyMcNeil(){
  // Hanley & McNeil (1982), Radiology 143:29-36, Table 1: CT images rated 1 (definitely normal) .. 5 (definitely abnormal)
  const normal = [33, 6, 6, 11, 2], abnormal = [3, 2, 2, 11, 33], out = [];
  let a = 0, b = 0;
  abnormal.forEach((k, r) => { for (let i = 0; i < k; i++) out.push({ id: `A${String(++a).padStart(2, "0")}`, y: 1, s: r + 1 }); });
  normal.forEach((k, r) => { for (let i = 0; i < k; i++) out.push({ id: `N${String(++b).padStart(2, "0")}`, y: 0, s: r + 1 }); });
  return out;
}
const EXAMPLES = {
  lowY: {
    label: "Biomarker study: one surprising patient",
    text: "20 patients with the disease (Y) and 60 controls (N). Patient <b>Y07</b> has a marker level below almost every control; " +
      "the lab notes a possible sample-handling problem.",
    tryIt: "Select Y07 (largest orange dot): the inspector shows how much this single case costs. Then compare with the " +
      "sensitivity curve: is removing Y07 special, or could <em>any</em> removal do as much?",
    make: () => simulatedCases(11, { nY: 20, nN: 60, genY: r => 1.5 + r.n(), genN: r => r.n(), fix: [{ id: "Y07", s: -2.1 }] })
  },
  mislabel: {
    label: "Suspected mislabelled control",
    text: "25 Y vs 75 N. Control <b>N33</b> has the highest score of all, far from the other controls; chart review suggests it " +
      "could be a missed case. It looks dramatic on the plot, but it belongs to the <em>large</em> class: it carries only 1/75 of the ROC width.",
    tryIt: "Select N33 and compare removing it (Del) with flipping its label (F): both move the AUC by less than half a standard error. " +
      "Then sort the table by |ΔAUC|: the influential cases are Y cases that don't stand out visually. Undo with Ctrl+Z.",
    make: () => simulatedCases(5, { nY: 25, nN: 75, genY: r => 1.2 + r.n(), genN: r => r.n(), fix: [{ id: "N33", s: 4.1 }] })
  },
  fragile: {
    label: "Fragile conclusion (small study)",
    text: "12 Y vs 30 N. The AUC (0.76) looks respectable and the 95% CI excludes 0.5, so the study reports a 'significant' result.",
    tryIt: "Check the fragility box: how many well-chosen removals bring the lower CI limit down to 0.5? " +
      "Then look at the green path: how few removals would have been needed to make the result look even better?",
    make: () => simulatedCases(25, { nY: 12, nN: 30, genY: r => 0.85 + r.n(), genN: r => r.n() })
  },
  rare: {
    label: "Rare positives: 15 Y vs 400 N",
    text: "A screening marker (log-normal scores): 15 cases and 400 controls. N is drawn as a density band; only the most " +
      "influential N cases are shown as dots.",
    tryIt: "Compare the largest effects of Y cases with the largest effects of N cases (table, sort by |ΔAUC|). " +
      "Each Y case carries 1/15 of the ROC height, each N case only 1/400 of its width.",
    make: () => simulatedCases(21, { nY: 15, nN: 400, genY: r => Math.exp(1.1 + 0.8 * r.n()), genN: r => Math.exp(0.8 * r.n()) })
  },
  hanley: {
    label: "Hanley & McNeil (1982): CT ratings, real data",
    text: "Radiologist ratings of 109 CT images on a 5-point scale (1 = definitely normal ... 5 = definitely abnormal): " +
      "51 abnormal (Y) vs 58 normal (N). Published AUC 0.893. The many tied ratings turn ROC steps into diagonal segments.",
    tryIt: "All cases with the same rating and class have the same influence. Drag one Y case rated 1 up to 5: how much does one " +
      "'reader error' matter here?",
    make: hanleyMcNeil
  }
};
function exampleToCSV(cases){
  return "id,label,score\n" + cases.map(c => `${c.id},${c.y ? "Y" : "N"},${c.s}`).join("\n") + "\n";
}
