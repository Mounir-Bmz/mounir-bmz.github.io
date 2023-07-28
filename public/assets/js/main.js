// Selection du bouton dark mode
const darkModeButton = document.getElementById('darkModeButton');
const elementBG = document.querySelector('.BG');
const footer = document.querySelector('footer.BG');

// Fonction mode sombre
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  elementBG.classList.add('dark-mode');
  footer.classList.add('dark-mode');

  // On change l'image en dark
  const avatarImage = document.querySelector('.img-fluid');
  avatarImage.src = './public/assets/images/Dark_560x560.png';
}

// Fonction delet mode sombre
function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  elementBG.classList.remove('dark-mode');
  footer.classList.remove('dark-mode');

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
