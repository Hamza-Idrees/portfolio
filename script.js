// ===== CV DOWNLOAD =====
function downloadCV() {
  const a = document.createElement('a');
  a.href = 'HamzaIdrees.pdf';
  a.download = 'HamzaIdrees.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

document.querySelectorAll('.cv-download').forEach(el => {
  el.addEventListener('click', downloadCV);
});

// ===== THEME =====
const html = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
html.setAttribute('data-theme', localStorage.getItem('theme') || 'dark');

themeBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ===== NAV SCROLL =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ===== MOBILE MENU =====
const hamburger = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        navLinkEls.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}, { passive: true });

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.07, rootMargin: '0px 0px -24px 0px' }
);

revealEls.forEach(el => observer.observe(el));

// ===== COUNT-UP FOR HERO STATS =====
const countUp = (el, original) => {
  const match = original.match(/^([\d,.]+)(\S*)$/);
  if (!match) return;
  const raw = match[1].replace(/,/g, '');
  const target = parseFloat(raw);
  const suffix = match[2] || '';
  const isDecimal = raw.includes('.');
  const hasComma = match[1].includes(',');
  const duration = 1400;
  const steps = 50;
  let step = 0;

  const timer = setInterval(() => {
    step++;
    const eased = 1 - (1 - step / steps) ** 2;
    let current = target * eased;
    if (step >= steps) { current = target; clearInterval(timer); }

    let display = isDecimal ? current.toFixed(1) : Math.floor(current);
    if (hasComma && display >= 1000) display = Number(display).toLocaleString();
    el.textContent = display + suffix;
  }, duration / steps);
};

const statNums = document.querySelectorAll('.hstat-num');
let counted = false;

const statsObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !counted) {
      counted = true;
      statNums.forEach(el => countUp(el, el.textContent.trim()));
      statsObs.disconnect();
    }
  });
}, { threshold: 0.8 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObs.observe(heroStats);

// ===== TERMINAL TYPING EFFECT =====
const termLines = document.querySelectorAll('.terminal-body .term-line');
termLines.forEach((line, i) => {
  line.style.opacity = '0';
  line.style.transition = 'opacity 0.2s ease';
  setTimeout(() => { line.style.opacity = '1'; }, 600 + i * 80);
});
