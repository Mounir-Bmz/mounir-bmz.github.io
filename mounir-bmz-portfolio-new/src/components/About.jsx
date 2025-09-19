// src/components/About.jsx
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../assets/styles/About.scss';

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const imageSrc = isDarkMode ? '/assets/images/Dark_560x560.png' : '/assets/images/Light_560x560.png';

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>À propos de moi</h2>
        <div className="main-infos">
          <div className="left">
            <img src={imageSrc} alt="Mounir Boumaza" />
            <div className="info">
              <p><strong>Nom :</strong> Mounir Boumaza</p>
              <p><strong>Né le :</strong> 29/04/1996 à Saint-Germain-en-Laye</p>
              <p><strong>Ville actuelle :</strong> Paris - Ile-de-France</p>
              <p><strong>Hobbies :</strong> Fitness, Volleyball, Basketball, Cinéma, Cuisine, Jeux de plateaux</p>
            </div>
          </div>
          <div className="right">
            <div className="description">
              <p>Développeur web passionné, je cherche un poste en CDI pour continuer à relever des défis techniques stimulants et grandir au sein d'une équipe collaborative et ambitieuse.</p>
              <p>Mes compétences principales sont en React, JavaScript, HTML, CSS et PHP, ce qui me rend polyvalent et capable de m'adapter à différents projets web, que ce soit front-end ou back-end. J’ai eu l’occasion de développer des applications de bout en bout, en cherchant toujours l'innovation et l'efficacité.</p>
              <p>Avant de me consacrer au développement web, j'ai eu l'occasion de travailler en équipe sur des productions de séries et films d'animation pour des clients. Ces années d'expérience m'ont permis de maîtriser parfaitement le travail en équipe, la gestion des deadlines et les retakes (retours d'amélioration). J'ai également pu mettre en pratique ces compétences dans des projets de développement web en équipe, obtenant ainsi des retours positifs et des résultats concrets. Cette expérience m'a préparé à relever de nouveaux défis et à apporter une valeur ajoutée significative à tout projet que j'entreprends.</p>
              <p>Doté d'une nature autonome, je suis à l'aise tant dans le travail individuel que dans la collaboration en groupe. Lorsqu'on me donne la liberté d'exprimer mes idées, je n'hésite pas à faire des propositions constructives afin d'améliorer et d'optimiser les projets au maximum.</p>
              <p>Ouvert à de nouvelles opportunités, n’hésitez pas à me contacter pour discuter de collaborations possibles ou en savoir plus sur mes projets. Je suis enthousiaste à l'idée de contribuer au succès de votre équipe et d'explorer des projets motivants.</p>
            </div>
          </div>
        </div>
        <div className="footer-like">
          <div className="buttons">
            <a href="#contact" className="btn">Me contacter</a>
            <a href="cv-url" target="_blank" rel="noopener noreferrer" className="btn">Afficher mon CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;