/* guide.js: highlight the current section in the table of contents (auc-guide.html). */
"use strict";
(function(){
  const links = [...document.querySelectorAll("nav.toc a[href^='#']")];
  const items = links.map(a => ({ a, el: document.getElementById(a.getAttribute("href").slice(1)) })).filter(x => x.el);
  if (!items.length) return;
  let queued = false;
  function update(){
    queued = false;
    // the current section is the last heading that has scrolled past the top of the window
    let cur = items[0];
    for (const it of items) if (it.el.getBoundingClientRect().top < 140) cur = it;
    for (const it of items) it.a.classList.toggle("active", it === cur);
  }
  addEventListener("scroll", () => { if (!queued){ queued = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener("hashchange", update);
  update();
})();
