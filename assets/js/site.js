
(function () {
  const ticker = document.querySelector('.ticker');
  const track = document.querySelector('.ticker__track');

  if (ticker && track && track.dataset.duplicated !== "true") {
    const items = Array.from(track.children);
    items.forEach(el => track.appendChild(el.cloneNode(true)));
    track.dataset.duplicated = "true";
  }

  const toggleBtn = document.querySelector('[data-ticker-toggle]');
  const iconPlay = document.querySelector('[data-icon-play]');
  const iconPause = document.querySelector('[data-icon-pause]');

  const modal = document.querySelector('[data-modal]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalBody = document.querySelector('[data-modal-body]');
  const closeBtns = document.querySelectorAll('[data-modal-close]');

  function setPaused(paused) {
    if (!ticker) return;
    ticker.classList.toggle('paused', paused);
    if (toggleBtn) toggleBtn.setAttribute("aria-pressed", paused ? "true" : "false");
    if (iconPlay && iconPause) {
      iconPlay.style.display = paused ? "inline" : "none";
      iconPause.style.display = paused ? "none" : "inline";
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const paused = ticker.classList.contains('paused');
      setPaused(!paused);
    });
  }

  function openModal(title, detail) {
    if (!modal) return;
    setPaused(true);
    modalTitle.textContent = title || "Highlight";
    modalBody.textContent = detail || "";
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const close = modal.querySelector('[data-modal-close]');
    if (close) close.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setPaused(false);
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-highlight]');
    if (btn) {
      e.preventDefault();
      openModal(btn.getAttribute('data-title'), btn.getAttribute('data-detail'));
    }
  });

  closeBtns.forEach(b => b.addEventListener('click', closeModal));

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target.matches('.modal__overlay')) closeModal();
    });
  }
})();
