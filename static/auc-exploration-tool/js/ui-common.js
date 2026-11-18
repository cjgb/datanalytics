/* ui-common.js: SVG plotting and small DOM/format helpers shared by the AUC pages. */
"use strict";
const $ = id => document.getElementById(id);
const clampNum = (v, lo, hi, def) => { v = Number(v); if (!isFinite(v)) v = def; return Math.min(hi, Math.max(lo, v)); };
const f3 = v => isFinite(v) ? v.toFixed(3) : "—";
const pct = (v, d) => isFinite(v) ? (100 * v).toFixed(d === undefined ? 1 : d) + "%" : "—";
const escapeHTML = v => String(v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

/* ---------- SVG helpers ---------- */
const NS = "http://www.w3.org/2000/svg";
function el(tag, attrs, parent, text){
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) if (attrs[k] !== undefined && attrs[k] !== null) e.setAttribute(k, attrs[k]);
  if (text !== undefined) e.textContent = text;
  if (parent) parent.appendChild(e);
  return e;
}
function clearSVG(svg){ while (svg.firstChild) svg.removeChild(svg.firstChild); }
function niceTicks(lo, hi, n){
  const span = hi - lo; if (!(span > 0)) return { ticks: [lo], step: 1 };
  const raw = span / (n || 5), mag = Math.pow(10, Math.floor(Math.log10(raw))), e = raw / mag;
  const step = (e >= 7.5 ? 10 : e >= 3.5 ? 5 : e >= 1.5 ? 2 : 1) * mag;
  const ticks = [];
  for (let v = Math.ceil(lo / step - 1e-9) * step; v <= hi + step * 1e-9; v += step) ticks.push(Math.abs(v) < step * 1e-9 ? 0 : v);
  return { ticks, step };
}
const decimalsFor = step => Math.max(0, Math.min(6, -Math.floor(Math.log10(step) + 1e-9)));
function fmtNum(v){
  if (!isFinite(v)) return String(v);
  const a = Math.abs(v);
  if (a !== 0 && (a >= 1e5 || a < 1e-3)) return v.toExponential(1);
  return String(+v.toPrecision(3));
}
/** Plot frame: background, grid, ticks and axis labels. Returns scales X, Y and the plotting box. */
function frame(svg, W, H, m, xd, yd, o){
  o = o || {};
  const x0 = m.l, y0 = m.t, w = W - m.l - m.r, h = H - m.t - m.b;
  const X = v => x0 + (v - xd[0]) / (xd[1] - xd[0]) * w;
  const Y = v => y0 + h - (v - yd[0]) / (yd[1] - yd[0]) * h;
  el("rect", { x: x0, y: y0, width: w, height: h, fill: "#fcfcfd", stroke: "#e2e7ef" }, svg);
  const xt = o.xTicks || niceTicks(xd[0], xd[1], o.nx || 6), yt = o.yTicks || niceTicks(yd[0], yd[1], o.ny || 5);
  const xf = o.xFmt || (v => v.toFixed(decimalsFor(xt.step))), yf = o.yFmt || (v => v.toFixed(decimalsFor(yt.step)));
  for (const v of xt.ticks){ const x = X(v); if (x < x0 - .5 || x > x0 + w + .5) continue;
    el("line", { x1: x, y1: y0, x2: x, y2: y0 + h, stroke: "#eef1f5" }, svg);
    el("text", { x, y: y0 + h + 14, "text-anchor": "middle", "font-size": 11, fill: "#64748b" }, svg, xf(v)); }
  for (const v of yt.ticks){ const y = Y(v); if (y < y0 - .5 || y > y0 + h + .5) continue;
    el("line", { x1: x0, y1: y, x2: x0 + w, y2: y, stroke: "#eef1f5" }, svg);
    el("text", { x: x0 - 6, y: y + 3.5, "text-anchor": "end", "font-size": 11, fill: "#64748b" }, svg, yf(v)); }
  if (o.xLabel) el("text", { x: x0 + w / 2, y: H - 6, "text-anchor": "middle", "font-size": 12, fill: "#475569" }, svg, o.xLabel);
  if (o.yLabel) el("text", { x: 13, y: y0 + h / 2, "text-anchor": "middle", "font-size": 12, fill: "#475569",
    transform: `rotate(-90 13 ${y0 + h / 2})` }, svg, o.yLabel);
  return { X, Y, x0, y0, w, h };
}
function clipTo(svg, id, f){
  const defs = el("defs", {}, svg), cp = el("clipPath", { id }, defs);
  el("rect", { x: f.x0, y: f.y0, width: f.w, height: f.h }, cp);
  return el("g", { "clip-path": `url(#${id})` }, svg);
}
/** Drop ROC vertices closer than `eps` to the previously kept one (drawing only). */
function thinCurve(fpr, tpr, eps){
  const fx = [fpr[0]], ty = [tpr[0]];
  let lx = fpr[0], ly = tpr[0];
  for (let i = 1; i < fpr.length; i++){
    const last = i === fpr.length - 1;
    if (last || Math.abs(fpr[i] - lx) + Math.abs(tpr[i] - ly) >= eps){ fx.push(fpr[i]); ty.push(tpr[i]); lx = fpr[i]; ly = tpr[i]; }
  }
  return { fpr: fx, tpr: ty };
}
const ptsStr = (xs, ys, X, Y) => xs.map((v, i) => `${X(v).toFixed(1)},${Y(ys[i]).toFixed(1)}`).join(" ");
function toSVGCoords(svg, evt){
  const pt = svg.createSVGPoint(); pt.x = evt.clientX; pt.y = evt.clientY;
  return pt.matrixTransform(svg.getScreenCTM().inverse());
}

