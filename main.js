// sticky nav shadow
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
});

// mobile nav
document.getElementById('hamburger').addEventListener('click', () => {
  const links = document.getElementById('navLinks');
  const open = links.style.display === 'flex';
  links.style.cssText = open ? '' : `
    display:flex; flex-direction:column; position:absolute;
    top:70px; left:0; right:0; background:#fff;
    padding:20px 24px; gap:16px;
    border-bottom:1px solid #e2e8f0;
    box-shadow:0 8px 24px rgba(0,0,0,.1);
    z-index:99;
  `;
});

// form submit
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '✓ Odoslané – ozveme sa do 24 hodín';
  btn.style.background = '#16a34a';
  btn.disabled = true;
}
