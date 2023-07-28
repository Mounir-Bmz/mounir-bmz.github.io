// Selection du bouton dark mode
const darkModeButton = document.getElementById('darkModeButton');
const navElement = document.querySelector("nav.BG");
const footerElement = document.querySelector("footer.BG");

// Fonction mode sombre
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  navElement.classList.add('dark-mode');
  footerElement.classList.add('dark-mode');

  navElement.classList.remove('navbar-light');
  navElement.classList.add('navbar-dark');
  

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
