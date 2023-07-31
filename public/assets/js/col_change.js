// ABOUT CHANGEMENT TEL (about)

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

/////////////////////


// ABOUT CHANGEMENT TEL (CARD projects)
function updateCardoClasses() {
  const cardos = document.querySelectorAll('.cardo');
  cardos.forEach(cardo => {
    if (window.innerWidth <= 991) {
      cardo.classList.remove('col-md-6');
      cardo.classList.add('col-md-12');
    } else {
      cardo.classList.remove('col-md-12');
      cardo.classList.add('col-md-6');
    }
  });
}

// Au chargement initial de la page
updateCardoClasses();

// Écouteur d'événement pour redimensionner la fenêtre
window.addEventListener('resize', updateCardoClasses);
