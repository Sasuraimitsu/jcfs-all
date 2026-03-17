/* ============================================
   JCFS Protocol — main.js
   ============================================ */

/* ── Navigation: scroll state ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('s', window.scrollY > 60);
});

/* ── Scroll reveal ── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('on');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.r').forEach(el => revealObs.observe(el));

/* ── Contact form ── */
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('ctaForm').style.display = 'none';
  document.getElementById('successBox').style.display = 'block';
}
