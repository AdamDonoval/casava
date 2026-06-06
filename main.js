function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Odoslané ✓';
  btn.style.background = '#16a34a';
  btn.disabled = true;
}

const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  links.style.position = 'absolute';
  links.style.top = '68px';
  links.style.right = '24px';
  links.style.background = '#fff';
  links.style.flexDirection = 'column';
  links.style.padding = '16px 24px';
  links.style.borderRadius = '12px';
  links.style.boxShadow = '0 8px 32px rgba(0,0,0,.12)';
  links.style.border = '1px solid #e8ecf2';
});
