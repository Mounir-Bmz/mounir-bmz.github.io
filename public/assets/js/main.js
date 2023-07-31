// Selection du bouton dark mode
const darkModeButton = document.getElementById('darkModeButton');
const navElement = document.querySelector("nav.BG");
const footerElement = document.querySelector("footer.BG");
const faSymbol = document.querySelector(".faSymbol");

// Fonction mode sombre
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  navElement.classList.add('dark-mode');
  footerElement.classList.add('dark-mode');

  navElement.classList.remove('navbar-light');
  navElement.classList.add('navbar-dark');
  
  faSymbol.classList.remove('fa-moon');
  faSymbol.classList.add('fa-sun');

  // On change l'image en dark
  const avatarImage = document.querySelector('.img-fluid');
  avatarImage.src = './public/assets/images/Dark_560x560.png';
}

// Fonction delet mode sombre
function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  navElement.classList.remove('dark-mode');
  footerElement.classList.remove('dark-mode');

  navElement.classList.remove('navbar-dark');
  navElement.classList.add('navbar-light');

  faSymbol.classList.remove('fa-sun');
  faSymbol.classList.add('fa-moon');

  // On change l'image en light
  const avatarImage = document.querySelector('.img-fluid');
  avatarImage.src = './public/assets/images/Light_560x560.png';
}

// Fonction switch
function toggleDarkMode() {
  if (document.body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

// Ecoute du bouton
darkModeButton.addEventListener('click', toggleDarkMode);


// ABOUT CHANGEMENT TEL

window.addEventListener('DOMContentLoaded', function () {
  function updateBox2Class() {
    const box2 = document.querySelector('.box2');
    if (window.innerWidth <= 991) {
      box2.classList.remove('col-8');
      box2.classList.add('col-12');
    } else {
      box2.classList.remove('col-12');
      box2.classList.add('col-8');
    }
  }

  // Au chargement initial de la page
  updateBox2Class();

  // Écouteur d'événement pour redimensionner la fenêtre
  window.addEventListener('resize', function () {
    updateBox2Class();
  });
});
