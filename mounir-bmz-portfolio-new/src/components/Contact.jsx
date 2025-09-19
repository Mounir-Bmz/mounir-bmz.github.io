import '../assets/styles/Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contactez-moi !</h2>
        <div className="subtitle contact-subtitle">
          Je suis intéressé par les postes de :
          <ul>
            <li>Développeur Full-stack</li>
            <li>Développeur Front-end</li>
            <li>Intégrateur web</li>
          </ul>
        </div>
        <div className="outer-container">
          <div className="space-between row">
            <div className="item contact-box phone">
              <i className="fas fa-phone"></i>
              <div className="text">+33 6 20 52 27 88</div>
            </div>
            <div className="item contact-box email">
              <i className="fas fa-envelope"></i>
              <div className="text">
                <a href="mailto:mounir.boumaza.dev@gmail.com">mounir.boumaza.dev@gmail.com</a>
              </div>
            </div>
            <div className="item contact-box meet">
              <i className="fas fa-map-marker-alt"></i>
              <div className="text">Vous souhaitez me rencontrer ?<br />Je suis disponible à Paris et ses alentours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;