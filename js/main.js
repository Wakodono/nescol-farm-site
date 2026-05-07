/**
 * Sunshine Farm Park – main script
 * Toggles mobile nav when Menu button is clicked.
 */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  if (!toggle || !navList) return;

  toggle.addEventListener('click', function () {
    const expanded = toggle.getAttribute('aria-expanded');
    toggle.setAttribute('aria-expanded', !expanded);
    navList.classList.toggle('is-open', !expanded);
  });
})();
