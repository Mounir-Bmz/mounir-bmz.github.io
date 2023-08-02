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

  // Écouteur d'événement pour redimensionner la fenêtre
  window.addEventListener('resize', function () {
    updateBox2Class();
    updateCardoClasses();
    updateContactBoxClasses();
  });

  // Appel initial pour mettre à jour la classe de box2
  updateBox2Class();

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

// Écouteur d'événement pour redimensionner la fenêtre
window.addEventListener('resize', updateCardoClasses);


// CONTACT CHANGEMENT TEL (item contact-box)
function updateContactBoxClasses() {
  const contactBoxes = document.querySelectorAll('.contact-box');
  contactBoxes.forEach(contactBox => {
    if (window.innerWidth <= 991) {
      contactBox.classList.remove('col-3');
      contactBox.classList.add('col-12');
    } else {
      contactBox.classList.remove('col-12');
      contactBox.classList.add('col-3');
    }
  });
}
