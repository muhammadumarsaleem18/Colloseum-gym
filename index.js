document.addEventListener('DOMContentLoaded', () => {
  const exploreCards = document.querySelectorAll('.explore__card .card');
  const zoomableImages = document.querySelectorAll('.zoomable');
  exploreCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flip-card'); // Toggles flip class on click
    });
  });

  zoomableImages.forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('zoom'); // Toggles flip class on click
    });
  });

});
