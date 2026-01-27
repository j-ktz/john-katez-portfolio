document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-flip]');
  if (!btn) return;
  const id = btn.getAttribute('data-flip');
  const card = document.getElementById(id);
  if (card) card.classList.toggle('is-flipped');
});