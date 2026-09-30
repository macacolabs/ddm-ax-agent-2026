// 커리큘럼 아코디언: 같은 날짜 묶음 안에서 하나를 열면 나머지는 닫힘
document.querySelectorAll('[data-accordion]').forEach(function (group) {
  group.querySelectorAll('details').forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      group.querySelectorAll('details[open]').forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });
});

// 스크롤 등장 효과 (지원하지 않는 브라우저에서는 바로 표시)
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(function (el) { io.observe(el); });
})();
