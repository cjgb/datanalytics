// Small progressive enhancements: table sorting, card filters, graph toggle, table filters.
(function () {
  // sortable tables
  document.querySelectorAll("table.sortable").forEach(function (tbl) {
    var ths = tbl.querySelectorAll("thead th");
    ths.forEach(function (th, col) {
      if (!th.dataset.type) return;
      var asc = true;
      th.addEventListener("click", function () {
        var body = tbl.tBodies[0];
        var rows = Array.prototype.slice.call(body.rows);
        rows.sort(function (a, b) {
          var ca = a.cells[col], cb = b.cells[col];
          var va = ca.dataset.sort !== undefined ? ca.dataset.sort : ca.textContent.trim();
          var vb = cb.dataset.sort !== undefined ? cb.dataset.sort : cb.textContent.trim();
          if (th.dataset.type === "num") { va = parseFloat(va) || 0; vb = parseFloat(vb) || 0; }
          return (va > vb ? 1 : va < vb ? -1 : 0) * (asc ? 1 : -1);
        });
        rows.forEach(function (r) { body.appendChild(r); });
        asc = !asc;
      });
    });
  });
  // card filter buttons
  document.querySelectorAll(".filters").forEach(function (box) {
    var sel = box.dataset.target;
    box.querySelectorAll("button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        box.querySelectorAll("button").forEach(function (b) { b.classList.remove("on"); });
        btn.classList.add("on");
        var f = btn.dataset.filter;
        document.querySelectorAll(sel).forEach(function (card) {
          card.style.display = !f || card.classList.contains(f) ? "" : "none";
        });
      });
    });
  });
  // evidence toggle on argument map
  var tog = document.getElementById("toggle-evidence");
  if (tog) tog.addEventListener("change", function () {
    document.getElementById("graph-core").classList.toggle("hidden", tog.checked);
    document.getElementById("graph-full").classList.toggle("hidden", !tog.checked);
  });
  // zoom: switch between fit-to-width and natural size
  document.querySelectorAll(".toggle-zoom").forEach(function (z) {
    z.addEventListener("change", function () {
      document.querySelectorAll(".graph-wrap").forEach(function (w) { w.classList.toggle("zoom", z.checked); });
    });
  });
  // filterable tables (issues / checks)
  var tbl = document.querySelector("table.filterable");
  if (tbl) {
    var fs = ["f-sev", "f-cat", "f-pap"].map(function (id) { return document.getElementById(id); });
    var apply = function () {
      var n = 0;
      Array.prototype.forEach.call(tbl.tBodies[0].rows, function (r) {
        var ok = (!fs[0] || !fs[0].value || r.dataset.sev === fs[0].value) &&
                 (!fs[1] || !fs[1].value || r.dataset.cat === fs[1].value) &&
                 (!fs[2] || !fs[2].value || r.dataset.pap === fs[2].value);
        r.style.display = ok ? "" : "none"; if (ok) n++;
      });
      var c = document.getElementById("f-count"); if (c) c.textContent = n + " shown";
    };
    fs.forEach(function (s) { if (s) s.addEventListener("change", apply); });
    var m = location.hash.match(/cat=([\w_]+)/);
    if (m && fs[1]) fs[1].value = m[1];
    apply();
  }
})();
