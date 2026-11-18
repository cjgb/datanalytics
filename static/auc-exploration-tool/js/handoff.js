/*
 * handoff.js: pass a simulated experiment from auc-simulator.html to auc-robustness.html (pure; depends on stats.js).
 * The link carries the *recipe* (distributions, sample sizes, seed, transform), not the data: both pages use the
 * same seeded generator, so the robustness lab regenerates exactly the same sample, and also knows the true AUC.
 */
"use strict";

function encodeSimConfig(cfg, label){
  const o = { v: 1, Y: cfg.Y, N: cfg.N, nY: cfg.nY, nN: cfg.nN, seed: cfg.seed, transform: cfg.transform, label: label || "" };
  return "sim=" + encodeURIComponent(JSON.stringify(o));
}

/** Parse and validate a "#sim=..." hash. Returns a safe config, or null if there is none / it is malformed. */
function decodeSimConfig(hash){
  const m = String(hash || "").replace(/^#/, "").match(/(?:^|&)sim=([^&]*)/);
  if (!m) return null;
  let o;
  try { o = JSON.parse(decodeURIComponent(m[1])); } catch (e) { return null; }
  if (!o || typeof o !== "object" || Array.isArray(o)) return null;
  const int = (v, lo, hi, d) => { v = Math.round(Number(v)); return isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d; };
  return {
    Y: cleanDist(o.Y || {}), N: cleanDist(o.N || {}),
    nY: int(o.nY, 3, 20000, 100), nN: int(o.nN, 3, 20000, 100),
    seed: (Number(o.seed) || 0) >>> 0,
    transform: hasOwn(TRANSFORMS, o.transform) ? o.transform : "none",
    label: String(o.label || "").slice(0, 160)
  };
}
/** Regenerate the simulator's sample as labelled cases (ids Y001…, N001…) plus the true ROC/AUC. */
function casesFromSim(cfg){
  const { pos, neg } = drawSample(cfg, makeRNG(cfg.seed));
  const cases = [];
  const wY = String(cfg.nY).length, wN = String(cfg.nN).length;
  pos.forEach((s, i) => cases.push({ id: "Y" + String(i + 1).padStart(wY, "0"), y: 1, s }));
  neg.forEach((s, i) => cases.push({ id: "N" + String(i + 1).padStart(wN, "0"), y: 0, s }));
  const truth = transformROC(trueROC(cfg.Y, cfg.N), cfg.transform);
  return { cases, trueAuc: truth.auc, trueRoc: truth };
}
