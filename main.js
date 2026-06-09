// sticky nav shadow
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 10 ? '0 2px 16px rgba(0,0,0,.35)' : '';
});

// mobile hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  const links = document.getElementById('navLinks');
  const open = links.style.display === 'flex';
  links.style.cssText = open ? '' :
    'display:flex;flex-direction:column;position:absolute;top:62px;left:0;right:0;background:#141c26;padding:20px 24px;gap:14px;border-bottom:1px solid rgba(255,255,255,.1);z-index:99;';
});

// gallery switcher
function switchImg(el) {
  document.getElementById('mainGalleryImg').src = el.src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// auto-rotate gallery
let idx = 0;
const thumbs = document.querySelectorAll('.thumb');
if (thumbs.length) {
  setInterval(() => {
    idx = (idx + 1) % thumbs.length;
    switchImg(thumbs[idx]);
  }, 2500);
}

// form submit
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '✓ Odoslané – ozveme sa do 24 hodín';
  btn.style.background = '#16a34a';
  btn.disabled = true;
}
