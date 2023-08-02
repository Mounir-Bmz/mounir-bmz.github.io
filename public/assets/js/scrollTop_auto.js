// Selection de toutes les div overlay
const overlays = document.querySelectorAll('.overlay');

// Ecouteur reset
overlays.forEach((overlay) => {
  overlay.addEventListener('mouseleave', () => {
    overlay.scrollTop = 0;
  });
});
