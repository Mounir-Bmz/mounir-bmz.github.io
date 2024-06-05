// Selection du bouton dark mode
const darkModeButton = document.getElementById('darkModeButton');
const navElement = document.querySelector("nav.BG");
const footerElement = document.querySelector("footer.BG");

const aGitElement = document.querySelector(".aGit");
const faSymbol = document.querySelector(".faSymbol");
const bgProjects = document.querySelector("#projects");

const cardos = document.querySelectorAll(".item-project");
const avatarImages = document.querySelectorAll('.img-fluid');
const profilImages = document.querySelectorAll('.img-overlay');

// Fonction mode sombre
function enableDarkMode() {
  document.body.classList.add('dark-mode');

  document.querySelector("#home").classList.add('dark-mode');
  document.querySelector(".copy-home").classList.add('dark-mode');
  

  navElement.classList.add('dark-mode');
  footerElement.classList.add('dark-mode');
  bgProjects.classList.add('dark-mode');
  aGitElement.classList.add('dark-mode');

  cardos.forEach(cardo => {
    cardo.classList.add('dark-mode');
  });

  navElement.classList.remove('navbar-light');
  navElement.classList.add('navbar-dark');
  
  faSymbol.classList.remove('fa-moon');
  faSymbol.classList.add('fa-sun');

  // On change l'image en dark
  avatarImages.forEach(image => {
    image.src = './public/assets/images/Dark_560x560.png';
  });
  profilImages.forEach(image => {
    image.src = './public/assets/images/Light_Mounir_560x560_v03.png'; // Pour l'instant, je change pas l'image en dark
  });

}

// Fonction delet mode sombre
function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  navElement.classList.remove('dark-mode');
  footerElement.classList.remove('dark-mode');
  bgProjects.classList.remove('dark-mode');
  aGitElement.classList.remove('dark-mode');

  document.querySelector("#home").classList.remove('dark-mode');
  document.querySelector(".copy-home").classList.remove('dark-mode');

  cardos.forEach(cardo => {
    cardo.classList.remove('dark-mode');
  });

  navElement.classList.remove('navbar-dark');
  navElement.classList.add('navbar-light');

  faSymbol.classList.remove('fa-sun');
  faSymbol.classList.add('fa-moon');

  // On change l'image en light
  avatarImages.forEach(image => {
    image.src = './public/assets/images/Light_560x560.png';
  });
  profilImages.forEach(image => {
    image.src = './public/assets/images/Light_Mounir_560x560_v03.png';
  });

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