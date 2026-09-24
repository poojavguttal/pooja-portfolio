/* Pooja Guttal — portfolio deck
   One section at a time. Arrows, keyboard, swipe, dots and links all move the deck.
   Without JavaScript the page falls back to a normal scrolling page. */
(function () {
  'use strict';

  var track = document.getElementById('track');
  var deck = document.getElementById('deck');
  var cards = Array.prototype.slice.call(track.querySelectorAll('.card'));
  var ids = cards.map(function (c) { return c.id; });
  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');
  var counter = document.getElementById('counter');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  var dotGroups = Array.prototype.slice.call(document.querySelectorAll('.dots'));
  var current = 0;

  // ---- dots (built once, one set per location) ----
  dotGroups.forEach(function (group) {
    ids.forEach(function (id, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'dot';
      b.tabIndex = -1;
      b.setAttribute('aria-label', 'Go to ' + id);
      b.addEventListener('click', function () { go(i); });
      group.appendChild(b);
    });
  });

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  // ---- position the track so the current card sits in the centre ----
  function layout(animate) {
    var card = cards[current];
    var cardW = card.offsetWidth;
    var deckW = deck.clientWidth;
    // offsetLeft ignores transforms, so this stays exact at every width
    var x = (deckW - cardW) / 2 - (card.offsetLeft - cards[0].offsetLeft);
    // the browser's own jump-to-anchor can scroll the deck sideways; undo it
    deck.scrollLeft = 0;
    deck.scrollTop = 0;
    if (!animate) track.classList.add('no-anim');
    track.style.transform = 'translate3d(' + x + 'px, 0, 0)';
    if (!animate) {
      track.getBoundingClientRect(); // flush
      track.classList.remove('no-anim');
    }
  }

  // ---- "scroll for more" hint on cards taller than the screen ----
  function updateMore(card) {
    var left = card.scrollHeight - card.clientHeight - card.scrollTop;
    card.style.setProperty('--st', card.scrollTop + 'px');
    card.classList.toggle('has-more', left > 8);
  }
  function updateAllMore() { cards.forEach(updateMore); }
  cards.forEach(function (card) {
    card.addEventListener('scroll', function () { updateMore(card); }, { passive: true });
  });
  // re-check whenever a card or its content changes size (web fonts arriving, resizes)
  if (window.ResizeObserver) {
    var ro = new ResizeObserver(function (entries) {
      entries.forEach(function (e) { updateMore(e.target.closest('.card')); });
    });
    cards.forEach(function (card) {
      ro.observe(card);
      Array.prototype.forEach.call(card.children, function (child) { ro.observe(child); });
    });
  }

  function setFocusable(card, on) {
    var els = card.querySelectorAll('a, button');
    for (var i = 0; i < els.length; i++) {
      if (on) els[i].removeAttribute('tabindex');
      else els[i].setAttribute('tabindex', '-1');
    }
  }

  function render(animate) {
    cards.forEach(function (card, i) {
      var active = i === current;
      card.classList.toggle('is-active', active);
      card.setAttribute('aria-hidden', active ? 'false' : 'true');
      setFocusable(card, active);
    });

    navLinks.forEach(function (a) {
      a.setAttribute('aria-current', a.getAttribute('data-go') === ids[current] ? 'true' : 'false');
    });

    dotGroups.forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (d, i) {
        d.classList.toggle('is-current', i === current);
        d.classList.toggle('is-past', i < current);
      });
    });

    deck.classList.toggle('at-start', current === 0);

    counter.textContent = pad(current + 1) + ' / ' + pad(cards.length);
    prevBtn.disabled = current === 0;
    nextBtn.setAttribute('aria-label', current === cards.length - 1 ? 'Back to start' : 'Next section');

    layout(animate);
    updateAllMore();
  }

  function go(i, fromHash) {
    if (i < 0) i = 0;
    if (i > cards.length - 1) i = 0; // the last arrow loops back to the start
    if (i === current && fromHash) return;
    current = i;
    render(true);
    if (!fromHash) {
      try { history.replaceState(null, '', '#' + ids[current]); } catch (e) { /* ignore */ }
    }
  }

  // ---- controls ----
  prevBtn.addEventListener('click', function () { go(current - 1); });
  nextBtn.addEventListener('click', function () { go(current + 1); });

  document.querySelectorAll('[data-go]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      go(ids.indexOf(el.getAttribute('data-go')));
    });
  });

  // clicking a peeking card opens it
  cards.forEach(function (card, i) {
    card.addEventListener('click', function (e) {
      if (i !== current) {
        e.preventDefault();
        go(i);
      }
    }, true);
  });

  document.addEventListener('keydown', function (e) {
    var tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); if (current < cards.length - 1) go(current + 1); }
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(current - 1); }
    if (e.key === 'Home') { e.preventDefault(); go(0); }
    if (e.key === 'End') { e.preventDefault(); go(cards.length - 1); }
  });

  // ---- swipe ----
  var startX = null, startY = null;
  deck.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  deck.addEventListener('touchend', function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    var dy = e.changedTouches[0].clientY - startY;
    startX = startY = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0 && current < cards.length - 1) go(current + 1);
      if (dx > 0) go(current - 1);
    }
  }, { passive: true });

  // ---- hash links (#research etc.) ----
  function fromHash() {
    var id = (location.hash || '').replace('#', '');
    var i = ids.indexOf(id);
    return i >= 0 ? i : 0;
  }
  window.addEventListener('hashchange', function () {
    go(fromHash(), true);
    layout(true);
  });
  deck.addEventListener('scroll', function () {
    if (deck.scrollLeft !== 0 || deck.scrollTop !== 0) layout(false);
  });

  // ---- resize ----
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    layout(false);
    resizeTimer = setTimeout(function () { layout(false); updateAllMore(); }, 120);
  });

  // ---- start ----
  current = fromHash();
  render(false);
  // fonts can change card widths slightly once loaded
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { layout(false); updateAllMore(); });
})();
