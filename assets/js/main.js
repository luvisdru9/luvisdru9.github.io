const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.nav-toggle');
const navLinks = [...document.querySelectorAll('.nav-links a')];

function setMenu(open) {
  if (!nav || !toggle) return;
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

toggle?.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
navLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach(item => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -45px' });
  revealItems.forEach(item => revealObserver.observe(item));
}

const sectionLinks = navLinks.filter(link => link.getAttribute('href')?.startsWith('#')).map(link => ({ link, section: document.querySelector(link.getAttribute('href')) })).filter(item => item.section);
function updateActiveSection() {
  const probe = window.scrollY + (nav?.offsetHeight || 70) + 70;
  let active = sectionLinks[0]?.link;
  sectionLinks.forEach(item => { if (item.section.offsetTop <= probe) active = item.link; });
  sectionLinks.forEach(item => item.link.classList.toggle('is-active', item.link === active));
}
window.addEventListener('scroll', updateActiveSection, { passive: true });
window.addEventListener('resize', () => { if (window.innerWidth > 720) setMenu(false); updateActiveSection(); }, { passive: true });
updateActiveSection();
