/*
 * stats.js: pure statistics shared by the AUC pages (no DOM access).
 * RNG, special functions, score distributions, true/empirical ROC and AUC,
 * DeLong and bootstrap CIs, threshold metrics, simulation helpers.
 * Loaded as a classic <script>, so every top-level declaration is a page global.
 */
"use strict";
/* ---------- RNG ---------- */
function mulberry32(seed){
  let a = seed >>> 0;
  return function(){
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function makeRandn(rand){
  let spare = null;
  return function(){
    if (spare !== null){ const v = spare; spare = null; return v; }
    let u = 0, v = 0;
    while (u === 0) u = rand();
    while (v === 0) v = rand();
    const m = Math.sqrt(-2 * Math.log(u));
    spare = m * Math.sin(2 * Math.PI * v);
    return m * Math.cos(2 * Math.PI * v);
  };
}
/** Bundle a uniform and a normal generator driven by the same seeded stream. */
function makeRNG(seed){ const u = mulberry32(seed); return { u, n: makeRandn(u) }; }

/* ---------- Special functions ---------- */
// Complementary error function, fractional error < 1.2e-7 (Numerical Recipes erfcc).
function erfc(x){
  const z = Math.abs(x), t = 1 / (1 + 0.5 * z);
  const r = t * Math.exp(-z*z - 1.26551223 + t*(1.00002368 + t*(0.37409196 + t*(0.09678418 +
    t*(-0.18628806 + t*(0.27886807 + t*(-1.13520398 + t*(1.48851587 + t*(-0.82215223 + t*0.17087277)))))))));
  return x >= 0 ? r : 2 - r;
}
function normCdf(x){ return 0.5 * erfc(-x / Math.SQRT2); }
// Inverse standard-normal CDF (Acklam), relative error ~1e-9.
function normInv(p){
  if (p <= 0) return -Infinity; if (p >= 1) return Infinity;
  const a=[-3.969683028665376e+01,2.209460984245205e+02,-2.759285104469687e+02,1.383577518672690e+02,-3.066479806614716e+01,2.506628277459239e+00];
  const b=[-5.447609879822406e+01,1.615858368580409e+02,-1.556989798598866e+02,6.680131188771972e+01,-1.328068155288572e+01];
  const c=[-7.784894002430293e-03,-3.223964580411365e-01,-2.400758277161838e+00,-2.549732539343734e+00,4.374664141464968e+00,2.938163982698783e+00];
  const d=[7.784695709041462e-03,3.224671290700398e-01,2.445134137142996e+00,3.754408661907416e+00];
  const pl = 0.02425;
  if (p < pl){ const q = Math.sqrt(-2*Math.log(p));
    return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1); }
  if (p > 1 - pl){ const q = Math.sqrt(-2*Math.log(1-p));
    return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1); }
  const q = p - 0.5, r = q*q;
  return (((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q / (((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1);
}
// log Γ(x), Lanczos approximation (g = 7, n = 9).
function lnGamma(x){
  if (x < 0.5) return Math.log(Math.PI / Math.abs(Math.sin(Math.PI * x))) - lnGamma(1 - x);
  const c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313,
    -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  x -= 1;
  let a = c[0]; const t = x + 7.5;
  for (let i = 1; i < 9; i++) a += c[i] / (x + i);
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
}
const TINY = 1e-300;
// Regularized lower incomplete gamma P(a, x).
function gammaP(a, x){
  if (!(x > 0)) return 0;
  if (x === Infinity) return 1;
  const lead = Math.exp(-x + a * Math.log(x) - lnGamma(a));
  if (x < a + 1){
    let ap = a, sum = 1 / a, del = sum;
    for (let n = 0; n < 1000; n++){ ap++; del *= x / ap; sum += del; if (Math.abs(del) < Math.abs(sum) * 1e-15) break; }
    return Math.min(1, sum * lead);
  }
  let b = x + 1 - a, c = 1 / TINY, d = 1 / b, h = d;
  for (let i = 1; i < 1000; i++){
    const an = -i * (i - a); b += 2;
    d = an * d + b; if (Math.abs(d) < TINY) d = TINY;
    c = b + an / c; if (Math.abs(c) < TINY) c = TINY;
    d = 1 / d; const del = d * c; h *= del;
    if (Math.abs(del - 1) < 1e-15) break;
  }
  return Math.max(0, 1 - lead * h);
}
function betacf(a, b, x){
  const qab = a + b, qap = a + 1, qam = a - 1;
  let c = 1, d = 1 - qab * x / qap; if (Math.abs(d) < TINY) d = TINY; d = 1 / d;
  let h = d;
  for (let m = 1; m <= 1000; m++){
    const m2 = 2 * m;
    let aa = m * (b - m) * x / ((qam + m2) * (a + m2));
    d = 1 + aa * d; if (Math.abs(d) < TINY) d = TINY;
    c = 1 + aa / c; if (Math.abs(c) < TINY) c = TINY;
    d = 1 / d; h *= d * c;
    aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
    d = 1 + aa * d; if (Math.abs(d) < TINY) d = TINY;
    c = 1 + aa / c; if (Math.abs(c) < TINY) c = TINY;
    d = 1 / d; const del = d * c; h *= del;
    if (Math.abs(del - 1) < 1e-15) break;
  }
  return h;
}
// Regularized incomplete beta I_x(a, b).
function betaI(a, b, x){
  if (!(x > 0)) return 0;
  if (x >= 1) return 1;
  const lbt = lnGamma(a + b) - lnGamma(a) - lnGamma(b) + a * Math.log(x) + b * Math.log(1 - x);
  const bt = Math.exp(lbt);
  if (x < (a + 1) / (a + b + 2)) return bt * betacf(a, b, x) / a;
  return 1 - bt * betacf(b, a, 1 - x) / b;
}

/* ---------- Score distributions: P(score | class) ---------- */
function sampleGamma(k, rng){
  if (k < 1){ const u = rng.u(); return sampleGamma(k + 1, rng) * Math.pow(u || TINY, 1 / k); }
  const d = k - 1 / 3, c = 1 / Math.sqrt(9 * d);
  for (;;){
    let x, v;
    do { x = rng.n(); v = 1 + c * x; } while (v <= 0);
    v = v * v * v;
    const u = rng.u();
    if (u < 1 - 0.0331 * x * x * x * x) return d * v;
    if (Math.log(u) < 0.5 * x * x + d * (1 - v + Math.log(v))) return d * v;
  }
}
const SQRT2PI = Math.sqrt(2 * Math.PI);
function normPdf(x, mu, sd){ const z = (x - mu) / sd; return Math.exp(-0.5 * z * z) / (sd * SQRT2PI); }

// Each family: parameter specs (hard limits + slider range), pdf, cdf, sampler,
// a bracket that holds essentially all of the mass, and a "view" range for plots.
const FAMILIES = {
  normal: {
    label: "Normal",
    params: [
      { k: "mu", label: "mean μ", def: 0, min: -50, max: 50, smin: -5, smax: 5, step: 0.1 },
      { k: "sd", label: "SD σ", def: 1, min: 0.02, max: 50, smin: 0.1, smax: 5, step: 0.05 }],
    pdf: (x, p) => normPdf(x, p.mu, p.sd),
    cdf: (x, p) => normCdf((x - p.mu) / p.sd),
    sample: (rng, p) => p.mu + p.sd * rng.n(),
    bracket: p => [p.mu - 40 * p.sd, p.mu + 40 * p.sd],
    view: p => [p.mu - 4 * p.sd, p.mu + 4 * p.sd],
    describe: p => `Normal(μ=${p.mu}, σ=${p.sd})`
  },
  beta: {
    label: "Beta (scores in [0, 1])",
    params: [
      { k: "a", label: "shape α", def: 2, min: 0.05, max: 500, smin: 0.2, smax: 20, step: 0.1 },
      { k: "b", label: "shape β", def: 5, min: 0.05, max: 500, smin: 0.2, smax: 20, step: 0.1 }],
    pdf: (x, p) => {
      if (x < 0 || x > 1) return 0;
      if ((x === 0 && p.a < 1) || (x === 1 && p.b < 1)) return Infinity;
      if ((x === 0 && p.a > 1) || (x === 1 && p.b > 1)) return 0;
      return Math.exp((p.a - 1) * Math.log(x) + (p.b - 1) * Math.log(1 - x) +
        lnGamma(p.a + p.b) - lnGamma(p.a) - lnGamma(p.b));
    },
    cdf: (x, p) => betaI(p.a, p.b, x),
    sample: (rng, p) => {
      const x = sampleGamma(p.a, rng), y = sampleGamma(p.b, rng);
      return x + y > 0 ? x / (x + y) : (rng.u() < p.a / (p.a + p.b) ? 1 : 0);
    },
    bracket: () => [0, 1],
    view: () => [0, 1],
    describe: p => `Beta(α=${p.a}, β=${p.b})`
  },
  uniform: {
    label: "Uniform",
    params: [
      { k: "lo", label: "min", def: 0, min: -50, max: 50, smin: -5, smax: 5, step: 0.1 },
      { k: "hi", label: "max", def: 1, min: -50, max: 50, smin: -5, smax: 5, step: 0.1 }],
    pdf: (x, p) => (x >= p.lo && x <= p.hi) ? 1 / (p.hi - p.lo) : 0,
    cdf: (x, p) => x <= p.lo ? 0 : x >= p.hi ? 1 : (x - p.lo) / (p.hi - p.lo),
    sample: (rng, p) => p.lo + (p.hi - p.lo) * rng.u(),
    bracket: p => [p.lo, p.hi],
    view: p => [p.lo, p.hi],
    describe: p => `Uniform(${p.lo}, ${p.hi})`
  },
  gamma: {
    label: "Gamma (right-skewed, ≥ 0)",
    params: [
      { k: "k", label: "shape k", def: 2, min: 0.05, max: 500, smin: 0.2, smax: 20, step: 0.1 },
      { k: "theta", label: "scale θ", def: 1, min: 0.02, max: 50, smin: 0.1, smax: 5, step: 0.05 }],
    pdf: (x, p) => {
      if (x < 0) return 0;
      if (x === 0) return p.k < 1 ? Infinity : p.k === 1 ? 1 / p.theta : 0;
      return Math.exp((p.k - 1) * Math.log(x) - x / p.theta - lnGamma(p.k) - p.k * Math.log(p.theta));
    },
    cdf: (x, p) => gammaP(p.k, x / p.theta),
    sample: (rng, p) => p.theta * sampleGamma(p.k, rng),
    bracket: p => [0, p.theta * (p.k + 40 * Math.sqrt(p.k) + 60)],
    view: p => [0, p.theta * (p.k + 4 * Math.sqrt(p.k) + 2)],
    describe: p => `Gamma(k=${p.k}, θ=${p.theta})`
  },
  mixture: {
    label: "Mixture of two normals",
    params: [
      { k: "w", label: "weight of 1st", def: 0.5, min: 0, max: 1, smin: 0, smax: 1, step: 0.01 },
      { k: "mu1", label: "1st mean μ₁", def: 0, min: -50, max: 50, smin: -5, smax: 5, step: 0.1 },
      { k: "sd1", label: "1st SD σ₁", def: 1, min: 0.02, max: 50, smin: 0.1, smax: 5, step: 0.05 },
      { k: "mu2", label: "2nd mean μ₂", def: 3, min: -50, max: 50, smin: -5, smax: 5, step: 0.1 },
      { k: "sd2", label: "2nd SD σ₂", def: 1, min: 0.02, max: 50, smin: 0.1, smax: 5, step: 0.05 }],
    pdf: (x, p) => p.w * normPdf(x, p.mu1, p.sd1) + (1 - p.w) * normPdf(x, p.mu2, p.sd2),
    cdf: (x, p) => p.w * normCdf((x - p.mu1) / p.sd1) + (1 - p.w) * normCdf((x - p.mu2) / p.sd2),
    sample: (rng, p) => rng.u() < p.w ? p.mu1 + p.sd1 * rng.n() : p.mu2 + p.sd2 * rng.n(),
    bracket: p => [Math.min(p.mu1 - 40 * p.sd1, p.mu2 - 40 * p.sd2), Math.max(p.mu1 + 40 * p.sd1, p.mu2 + 40 * p.sd2)],
    view: p => {
      const r = [];
      if (p.w > 0) r.push([p.mu1 - 4 * p.sd1, p.mu1 + 4 * p.sd1]);
      if (p.w < 1) r.push([p.mu2 - 4 * p.sd2, p.mu2 + 4 * p.sd2]);
      return [Math.min(...r.map(v => v[0])), Math.max(...r.map(v => v[1]))];
    },
    describe: p => `${p.w}·N(${p.mu1}, ${p.sd1}) + ${+(1 - p.w).toFixed(4)}·N(${p.mu2}, ${p.sd2})`
  }
};

const hasOwn = (obj, key) => typeof key === "string" && Object.prototype.hasOwnProperty.call(obj, key);
/** Clamp parameters to valid ranges; returns a new, safe distribution object. */
function cleanDist(d){
  const fam = d && hasOwn(FAMILIES, d.family) ? d.family : "normal";
  const p = {};
  for (const s of FAMILIES[fam].params){
    let v = Number(d.p && d.p[s.k]);
    if (!isFinite(v)) v = s.def;
    p[s.k] = Math.min(s.max, Math.max(s.min, v));
  }
  if (fam === "uniform" && !(p.hi > p.lo)){ const lo = Math.min(p.lo, p.hi); p.lo = lo; p.hi = lo + 0.1; }
  return { family: fam, p };
}
const distPdf = (d, x) => FAMILIES[d.family].pdf(x, d.p);
const distCdf = (d, x) => FAMILIES[d.family].cdf(x, d.p);
const distBracket = d => FAMILIES[d.family].bracket(d.p);
const distView = d => FAMILIES[d.family].view(d.p);
const describeDist = d => FAMILIES[d.family].describe(d.p);
function distSample(d, rng, n){
  const f = FAMILIES[d.family].sample, out = new Float64Array(n);
  for (let i = 0; i < n; i++) out[i] = f(rng, d.p);
  return out;
}

// Monotone score transforms: AUC is invariant to increasing ones, and flips to 1 − AUC under decreasing ones.
const TRANSFORMS = {
  none:     { label: "none (identity)",                      f: x => x,                      df: () => 1,           inc: true },
  cube:     { label: "s³ (stretch the tails)",               f: x => x * x * x,              df: x => 3 * x * x,    inc: true },
  exp:      { label: "exp(s) (heavy right tail)",            f: x => Math.exp(x),            df: x => Math.exp(x),  inc: true },
  logistic: { label: "logistic 1/(1+e^−s) (squash to 0–1)",  f: x => 1 / (1 + Math.exp(-x)), df: x => { const e = 1 / (1 + Math.exp(-x)); return e * (1 - e); }, inc: true },
  neg:      { label: "−s (flip the score direction)",        f: x => -x,                     df: () => 1,           inc: false }
};
TRANSFORMS.none.inv = x => x; TRANSFORMS.cube.inv = Math.cbrt; TRANSFORMS.exp.inv = Math.log;
TRANSFORMS.logistic.inv = p => Math.log(p / (1 - p)); TRANSFORMS.neg.inv = x => -x;
function applyTransform(key, arr){
  const f = (hasOwn(TRANSFORMS, key) ? TRANSFORMS[key] : TRANSFORMS.none).f, out = new Float64Array(arr.length);
  for (let i = 0; i < arr.length; i++) out[i] = f(arr[i]);
  return out;
}

/* ---------- Population (true) ROC and AUC ---------- */
/**
 * True ROC of the pair of distributions: points (1 − F_N(t), 1 − F_Y(t)).
 * Thresholds are refined adaptively until no cell carries more than `tol`
 * probability mass of either class, so the trapezoidal area equals
 * AUC = P(S_Y > S_N) = ∫ F_N dF_Y to high accuracy, even for spiky densities.
 */
function trueROC(dY, dN, tol){
  tol = tol || 5e-4;
  const [aY, bY] = distBracket(dY), [aN, bN] = distBracket(dN);
  const L = Math.min(aY, aN), R = Math.max(bY, bN);
  const pt = x => ({ x, fy: distCdf(dY, x), fn: distCdf(dN, x) });
  const out = [pt(L)];
  function refine(a, b, depth){
    if (depth < 60 && (b.fy - a.fy > tol || b.fn - a.fn > tol)){
      const xm = 0.5 * (a.x + b.x);
      if (xm > a.x && xm < b.x){ const m = pt(xm); refine(a, m, depth + 1); refine(m, b, depth + 1); return; }
    }
    out.push(b);
  }
  const K = 64;
  let prev = out[0];
  for (let k = 1; k <= K; k++){ const b = pt(k === K ? R : L + (R - L) * k / K); refine(prev, b, 0); prev = b; }
  const fpr = [0], tpr = [0], thr = [Infinity];
  for (let i = out.length - 1; i >= 0; i--){ fpr.push(1 - out[i].fn); tpr.push(1 - out[i].fy); thr.push(out[i].x); }
  fpr.push(1); tpr.push(1); thr.push(-Infinity);
  return { fpr, tpr, thr, auc: rocArea(fpr, tpr) };
}
function rocArea(fpr, tpr){
  let a = 0;
  for (let k = 1; k < fpr.length; k++) a += (fpr[k] - fpr[k - 1]) * (tpr[k] + tpr[k - 1]) / 2;
  return a;
}
/** ROC after a score transform: unchanged if increasing, rotated 180° (AUC → 1 − AUC) if decreasing. */
function transformROC(roc, key){
  if ((hasOwn(TRANSFORMS, key) ? TRANSFORMS[key] : TRANSFORMS.none).inc) return roc;
  const L = roc.fpr.length, fpr = new Array(L), tpr = new Array(L);
  for (let k = 0; k < L; k++){ fpr[k] = 1 - roc.fpr[L - 1 - k]; tpr[k] = 1 - roc.tpr[L - 1 - k]; }
  return { fpr, tpr, auc: 1 - roc.auc };
}

/* ---------- Empirical statistics ---------- */
function aucRank(y, s){
  const n = y.length;
  const idx = Array.from({length:n}, (_,i)=>i).sort((a,b)=>s[a]-s[b]);
  let rankSum = 0, m = 0;
  let i = 0;
  while (i < n){
    let j = i;
    while (j+1 < n && s[idx[j+1]] === s[idx[i]]) j++;
    const avgRank = (i + 1 + j + 1) / 2; // 1-based
    for (let k = i; k <= j; k++) if (y[idx[k]] === 1) rankSum += avgRank;
    i = j + 1;
  }
  for (let k = 0; k < n; k++) if (y[k] === 1) m++;
  const nn = n - m;
  if (m === 0 || nn === 0) return NaN;
  return (rankSum - m*(m+1)/2) / (m*nn);
}

/**
 * Empirical ROC from per-class scores: one vertex per distinct score (tied Y/N scores give a diagonal step).
 * Vertex k uses the rule "predict Y iff score >= thr[k]". AUC by trapezoid = Mann–Whitney statistic.
 */
function rocFromSamples(pos, neg){
  const P = Float64Array.from(pos).sort(), Q = Float64Array.from(neg).sort(), m = P.length, n = Q.length;
  const fpr = [0], tpr = [0], thr = [Infinity];
  let i = m - 1, j = n - 1;
  while (i >= 0 || j >= 0){
    const sc = i < 0 ? Q[j] : j < 0 ? P[i] : Math.max(P[i], Q[j]);
    while (i >= 0 && P[i] === sc) i--;
    while (j >= 0 && Q[j] === sc) j--;
    fpr.push((n - 1 - j) / n); tpr.push((m - 1 - i) / m); thr.push(sc);
  }
  return { fpr, tpr, thr, auc: rocArea(fpr, tpr), P: m, N: n };
}
function computeROC(y, s){ const c = splitByClass(y, s); return rocFromSamples(c.pos, c.neg); }

/**
 * For every value a in sortedA: lo = #{b in sortedB : b < a}, hi = #{b : b <= a}. Two-pointer merge, O(|A| + |B|).
 */
function countBelow(sortedA, sortedB){
  const m = sortedA.length, n = sortedB.length, lo = new Int32Array(m), hi = new Int32Array(m);
  let p = 0, q = 0;
  for (let i = 0; i < m; i++){
    const a = sortedA[i];
    while (p < n && sortedB[p] < a) p++;
    if (q < p) q = p;
    while (q < n && sortedB[q] <= a) q++;
    lo[i] = p; hi[i] = q;
  }
  return { lo, hi };
}
function zForLevel(level){ return normInv(0.5 + (level || 0.95) / 2); }

/**
 * DeLong et al. (1988) variance from the structural components
 *   V10(i) = share of N scores below Y case i,  V01(j) = share of Y scores above N case j  (ties count ½).
 * Computed after sorting each class once (O(N log N)), equivalent to the mid-rank method of Sun & Xu (2014).
 * CI is built on the logit scale and mapped back, so limits stay inside (0, 1).
 */
function delongFromSamples(pos, neg, level){
  const m = pos.length, n = neg.length;
  if (m < 2 || n < 2) return { auc: NaN, se: NaN, lo: NaN, hi: NaN, degenerate: true };
  const P = Float64Array.from(pos).sort(), Q = Float64Array.from(neg).sort();
  const a = countBelow(P, Q), b = countBelow(Q, P);
  const v10 = new Float64Array(m), v01 = new Float64Array(n);
  let auc = 0;
  for (let i = 0; i < m; i++){ v10[i] = (a.lo[i] + 0.5 * (a.hi[i] - a.lo[i])) / n; auc += v10[i]; }
  auc /= m;
  for (let j = 0; j < n; j++) v01[j] = (m - b.hi[j] + 0.5 * (b.hi[j] - b.lo[j])) / m;
  const sampVar = x => { let mu = 0; for (const v of x) mu += v; mu /= x.length; let s = 0; for (const v of x) s += (v - mu) * (v - mu); return s / (x.length - 1); };
  const se = Math.sqrt(Math.max(0, sampVar(v10) / m + sampVar(v01) / n));
  return logitCI(auc, se, level);
}
/** Wald CI on the logit scale, mapped back to (0, 1). Degenerate (zero width) if AUC is 0 or 1 or SE is 0. */
function logitCI(auc, se, level){
  if (!(auc > 0 && auc < 1) || !(se > 0)) return { auc, se, lo: auc, hi: auc, degenerate: true };
  const z = zForLevel(level), L = Math.log(auc / (1 - auc)), h = z * se / (auc * (1 - auc));
  return { auc, se, lo: 1 / (1 + Math.exp(-(L - h))), hi: 1 / (1 + Math.exp(-(L + h))), degenerate: false };
}
function splitByClass(y, s){
  const pos = [], neg = [];
  for (let i = 0; i < y.length; i++) (y[i] === 1 ? pos : neg).push(s[i]);
  return { pos: Float64Array.from(pos), neg: Float64Array.from(neg) };
}
/** Back-compatible wrapper: DeLong CI from labels + scores. */
function delongCI(y, s, auc, level){
  const { pos, neg } = splitByClass(y, s);
  return delongFromSamples(pos, neg, level);
}

function quantile(sorted, q){
  if (!sorted.length) return NaN;
  const p = (sorted.length-1)*q, b = Math.floor(p), r = p-b;
  return sorted[b] + (sorted[b+1]!==undefined ? r*(sorted[b+1]-sorted[b]) : 0);
}

/**
 * Stratified bootstrap, O(N) per replicate. Both classes are sorted once and, for each Y case, the number of
 * N cases below / tied is precomputed. A replicate only redraws multiplicity weights w (multinomial), then
 *   AUC* = Σ_i wY_i · (W_N(below i) + ½ W_N(tied with i)) / (n_Y · n_N),
 * using a cumulative sum of the N weights. Returns a function rand → AUC*.
 */
function makeAUCResampler(pos, neg){
  const m = pos.length, n = neg.length;
  const P = Float64Array.from(pos).sort(), Q = Float64Array.from(neg).sort();
  const { lo, hi } = countBelow(P, Q);
  const wP = new Int32Array(m), wN = new Int32Array(n), C = new Float64Array(n + 1);
  return function(rand){
    wP.fill(0); wN.fill(0);
    for (let i = 0; i < m; i++) wP[(rand() * m) | 0]++;
    for (let j = 0; j < n; j++) wN[(rand() * n) | 0]++;
    for (let j = 0; j < n; j++) C[j + 1] = C[j] + wN[j];
    let num = 0;
    for (let i = 0; i < m; i++){
      const w = wP[i];
      if (w) num += w * (0.5 * (C[lo[i]] + C[hi[i]]));
    }
    return num / (m * n);
  };
}
function bootstrapAUC(y, s, B, seed){
  const { pos, neg } = splitByClass(y, s);
  const rand = mulberry32(seed ^ 0x9e3779b9), rep = makeAUCResampler(pos, neg);
  const out = new Array(B);
  for (let b = 0; b < B; b++) out[b] = rep(rand);
  return out;
}

function metricsAt(y, s, t){
  let tp=0,tn=0,fp=0,fn=0;
  for (let i=0;i<y.length;i++){
    const p = s[i]>=t?1:0;
    if (p===1&&y[i]===1)tp++; else if (p===0&&y[i]===0)tn++;
    else if (p===1)fp++; else fn++;
  }
  const sens=tp/(tp+fn||1), spec=tn/(tn+fp||1);
  const prec=tp/(tp+fp||1), npv=tn/(tn+fn||1), acc=(tp+tn)/(y.length||1);
  const f1=2*prec*sens/((prec+sens)||1);
  return {tp,tn,fp,fn,sens,spec,prec,npv,acc,f1,youden:sens+spec-1,
    prevalence:(tp+fn)/(y.length||1), predPos:(tp+fp)};
}

/** Same confusion counts as metricsAt, but O(log N) using per-class sorted scores (for live threshold dragging). */
function lowerBound(a, t){ let lo = 0, hi = a.length; while (lo < hi){ const mid = (lo + hi) >> 1; if (a[mid] < t) lo = mid + 1; else hi = mid; } return lo; }
function metricsSorted(P, Q, t){
  const m = P.length, n = Q.length, tp = m - lowerBound(P, t), fp = n - lowerBound(Q, t), fn = m - tp, tn = n - fp;
  const sens = tp / (m || 1), spec = tn / (n || 1), prec = tp / (tp + fp || 1), npv = tn / (tn + fn || 1);
  const f1 = 2 * prec * sens / ((prec + sens) || 1);
  return { tp, tn, fp, fn, sens, spec, prec, npv, acc: (tp + tn) / (m + n || 1), f1, youden: sens + spec - 1,
    prevalence: m / (m + n || 1), predPos: tp + fp };
}

function youdenThreshold(roc){
  let best=-Infinity, bt=NaN;
  for (let i=0;i<roc.fpr.length;i++){
    const j=roc.tpr[i]-roc.fpr[i];
    if (j>best && isFinite(roc.thr[i])){best=j;bt=roc.thr[i];}
  }
  return bt;
}

/* ---------- Simulation ---------- */
/** Draw one experiment: raw scores per class, then the (monotone) score transform. */
function drawSample(cfg, rng){
  const rawPos = distSample(cfg.Y, rng, cfg.nY), rawNeg = distSample(cfg.N, rng, cfg.nN);
  return { rawPos, rawNeg, pos: applyTransform(cfg.transform, rawPos), neg: applyTransform(cfg.transform, rawNeg) };
}
/** One replicate of the whole experiment: sample AUC, DeLong CI and (optionally) a bootstrap percentile CI. */
function simulateReplicate(cfg, rng, opts){
  opts = opts || {};
  const { pos, neg } = drawSample(cfg, rng);
  const d = delongFromSamples(pos, neg, cfg.level);
  const r = { auc: d.auc, se: d.se, lo: d.lo, hi: d.hi, bLo: NaN, bHi: NaN, pos, neg };
  if (opts.bootB > 0){
    const rep = makeAUCResampler(pos, neg), v = new Float64Array(opts.bootB);
    for (let b = 0; b < opts.bootB; b++) v[b] = rep(rng.u);
    v.sort();
    const a = (1 - cfg.level) / 2;
    r.bLo = quantile(v, a); r.bHi = quantile(v, 1 - a);
  }
  return r;
}
/** Summaries across replicates: bias, empirical SE, coverage (with Monte-Carlo error) and power vs chance. */
function summarizeReplicates(reps, trueAUC){
  const R = reps.length;
  const aucs = Float64Array.from(reps, r => r.auc).sort();
  let mean = 0; for (const v of aucs) mean += v; mean /= R;
  let sd = 0; for (const v of aucs) sd += (v - mean) * (v - mean); sd = Math.sqrt(sd / Math.max(1, R - 1));
  let seMean = 0, cov = 0, width = 0, above = 0, bCov = 0, bN = 0, bAbove = 0;
  for (const r of reps){
    seMean += r.se;
    if (r.lo <= trueAUC && trueAUC <= r.hi) cov++;
    width += r.hi - r.lo;
    if (r.lo > 0.5) above++;
    if (isFinite(r.bLo)){ bN++; if (r.bLo <= trueAUC && trueAUC <= r.bHi) bCov++; if (r.bLo > 0.5) bAbove++; }
  }
  const p = cov / R, bp = bN ? bCov / bN : NaN;
  return { R, mean, bias: mean - trueAUC, sd, seMean: seMean / R,
    coverage: p, coverageMC: Math.sqrt(p * (1 - p) / R), width: width / R, power: above / R,
    bootCoverage: bp, bootCoverageMC: bN ? Math.sqrt(bp * (1 - bp) / bN) : NaN, bootPower: bN ? bAbove / bN : NaN,
    q025: quantile(aucs, 0.025), q975: quantile(aucs, 0.975), sorted: aucs };
}
