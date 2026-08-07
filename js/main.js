// Navbar scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
toggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  toggle.classList.toggle('active');
});

// Close nav on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    toggle.classList.remove('active');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Animate on scroll (simple fade-in)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.domaine-card, .membre-card, .stat-item, .apropos-inner, .contact-inner').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// Form submit (demo)
const form = document.querySelector('.contact-form form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Message envoyé';
    btn.style.background = '#1a4fa0';
    setTimeout(() => {
      btn.textContent = 'Envoyer le message';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}
