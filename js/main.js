// ============================================================
// NAVBAR — scroll shadow
// ============================================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ============================================================
// MEGA MENU — dropdown au clic
// ============================================================
document.querySelectorAll('.nav-drop-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const item = btn.closest('.nav-item');
    const isOpen = item.classList.contains('open');
    // fermer tous
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    } else {
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('open'));
  document.querySelectorAll('.nav-drop-btn').forEach(b => b.setAttribute('aria-expanded','false'));
});

// ============================================================
// MOBILE NAV — toggle burger
// ============================================================
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
navToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.classList.toggle('active', isOpen);
});
// Fermer au clic sur lien mobile
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================================
// ACTIVE NAV LINK on scroll
// ============================================================
const sections = document.querySelectorAll('section[id], div.stats-bar');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id || '';
  });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
}, { passive: true });

// ============================================================
// REVEAL on scroll (IntersectionObserver)
// ============================================================
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

// ============================================================
// FORMULAIRE DE CONTACT — feedback visuel
// ============================================================
const form = document.querySelector('.contact-form-wrap form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Message envoyé';
    btn.style.background = '#1a4fa0';
    setTimeout(() => {
      btn.textContent = 'Envoyer le message';
      btn.style.background = '';
      form.reset();
    }, 3500);
  });
}

// ============================================================
// HERO SCROLL indicator — smooth fade out
// ============================================================
const heroScroll = document.querySelector('.hero-scroll');
if (heroScroll) {
  window.addEventListener('scroll', () => {
    heroScroll.style.opacity = Math.max(0, 1 - window.scrollY / 200);
  }, { passive: true });
}
