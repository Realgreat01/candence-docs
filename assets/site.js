// Build the table of contents from the document's section headings
// and highlight the section currently in view.
(function () {
  var doc = document.querySelector('article.doc');
  var toc = document.getElementById('toc-list');
  if (!doc || !toc) return;

  var headings = Array.prototype.slice.call(doc.querySelectorAll('h2[id]'));
  headings.forEach(function (h) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    toc.appendChild(li);
  });

  var links = Array.prototype.slice.call(toc.querySelectorAll('a'));
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });

  if (!('IntersectionObserver' in window)) return;

  var current = null;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var link = byId[entry.target.id];
      if (!link || link === current) return;
      if (current) current.classList.remove('active');
      link.classList.add('active');
      current = link;
    });
  }, { rootMargin: '-80px 0px -70% 0px', threshold: 0 });

  headings.forEach(function (h) { observer.observe(h); });
})();
