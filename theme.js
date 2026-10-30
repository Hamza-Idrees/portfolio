// Apply a saved preference before the first paint. Storage may be unavailable.
(() => {
  let theme = 'light';
  try {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark' || saved === 'light') theme = saved;
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark';
  } catch (_) {}
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#242c39' : '#edeef1';
})();
