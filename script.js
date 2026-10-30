'use strict';
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigationLinks = document.querySelector('#nav-links');
function closeMenu(returnFocus = false) {
  menuButton.setAttribute('aria-expanded', 'false');
  navigationLinks.classList.remove('is-open');
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigationLinks.classList.toggle('is-open', !expanded);
});
navigationLinks.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.navigation')) closeMenu();
});
window.matchMedia('(min-width: 761px)').addEventListener('change', () => closeMenu());
document.querySelector('#year').textContent = new Date().getFullYear();

const themeButton = document.querySelector('.theme-toggle');
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeButton.textContent = dark ? 'Light theme' : 'Dark theme';
  themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  themeButton.setAttribute('aria-pressed', String(dark));
}
updateThemeButton();
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#242c39' : '#edeef1';
  try { localStorage.setItem('portfolio-theme', theme); } catch (_) {}
  updateThemeButton();
});
