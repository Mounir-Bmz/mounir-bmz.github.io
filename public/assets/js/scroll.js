// Fonction pour faire défiler la page vers le haut
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Pour une animation douce du défilement
    });
  }
  
  // Ecoute du clic sur le bouton
  const scrollTopButton = document.getElementById('scrollTopButton');
  scrollTopButton.addEventListener('click', scrollToTop);
  