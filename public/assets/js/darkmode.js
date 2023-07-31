// Selection du bouton dark mode
const darkModeButton = document.getElementById('darkModeButton');
const navElement = document.querySelector("nav.BG");
const footerElement = document.querySelector("footer.BG");

const faSymbol = document.querySelector(".faSymbol");
const cardos = document.querySelectorAll(".item-project");
const bgProjects = document.querySelector("#projects");

const avatarImage = document.querySelector('.img-fluid');
const profilImage = document.querySelector('.img-overlay');

// Fonction mode sombre
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  navElement.classList.add('dark-mode');
  footerElement.classList.add('dark-mode');
  bgProjects.classList.add('dark-mode');

  cardos.forEach(cardo => {
    cardo.classList.add('dark-mode');
  });

  navElement.classList.remove('navbar-light');
  navElement.classList.add('navbar-dark');
  
  faSymbol.classList.remove('fa-moon');
  faSymbol.classList.add('fa-sun');

  // On change l'image en dark
  avatarImage.src = './public/assets/images/Dark_560x560_v02.png';
  profilImage.src = './public/assets/images/Dark_Mounir_560x560.png';
}

// Fonction delet mode sombre
function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  navElement.classList.remove('dark-mode');
  footerElement.classList.remove('dark-mode');
  bgProjects.classList.remove('dark-mode');

  cardos.forEach(cardo => {
    cardo.classList.remove('dark-mode');
  });

  navElement.classList.remove('navbar-dark');
  navElement.classList.add('navbar-light');

  faSymbol.classList.remove('fa-sun');
  faSymbol.classList.add('fa-moon');

  // On change l'image en light
  avatarImage.src = './public/assets/images/Light_560x560.png';
  profilImage.src = './public/assets/images/Light_Mounir_560x560.png';
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