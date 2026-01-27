// Duplicate ticker track so it can loop seamlessly
(function() {
  const track = document.querySelector('.ticker__track');
  if (!track) return;
  const clone = track.cloneNode(true);
  track.parentElement.appendChild(clone);
})();