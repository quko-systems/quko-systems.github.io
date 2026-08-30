(function () {
  'use strict';

  var root = document.querySelector('[data-resources-root]');
  if (!root) return;

  var search = root.querySelector('[data-resource-search]');
  var cards = Array.prototype.slice.call(root.querySelectorAll('[data-resource-card]'));
  var emptyState = root.querySelector('[data-resource-empty]');

  function normalize(value) {
    return value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }

  search.addEventListener('input', function () {
    var query = normalize(search.value);
    var visibleCards = 0;

    cards.forEach(function (card) {
      var matches = !query || normalize(card.textContent).indexOf(query) !== -1;
      card.hidden = !matches;
      if (matches) visibleCards += 1;
    });

    emptyState.hidden = visibleCards !== 0;
  });
}());
