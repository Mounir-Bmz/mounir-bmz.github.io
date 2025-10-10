// src/components/Projects.jsx
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../assets/styles/Projects.scss';

const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const projects = [
    {
      title: 'Ankama - MadLab Animation',
      image: '/assets/images/ankama_home.png',
      link: '#',
      description: 'Projet d\'automatisation pour optimiser le workflow de production d\'animation avec JavaScript, Python, Toon Boom Harmony, et Kitsu.',
    },
    {
      title: 'Trip O\'dvisor',
      image: '/assets/images/tripodvisor_home.png',
      link: '#',
      description: 'Site web de conseils touristiques avec thème sombre/clair, slider d\'images, et gestion des commentaires en JavaScript, HTML, CSS.',
    },
    {
      title: 'Art Portfolio',
      image: '/assets/images/mounir-bmz-art_home.png',
      link: '#',
      description: 'Portfolio artistique showcasing digital artwork and design projects.',
    },
    {
      title: 'Pokedex',
      image: '/assets/images/poke_data_home.jpeg',
      link: '#',
      description: 'Application Pokedex avec données Pokémon et interface interactive.',
    },
    {
      title: 'Poudlock',
      image: '/assets/images/poudlock_home.png',
      link: '#',
      description: 'Projet de sécurité web avec authentification et gestion des accès.',
    },
    {
      title: 'JustCookIt',
      image: '/assets/images/JustCookIt_home.png',
      link: '#',
      description: 'Application de recettes avec recherche et filtres personnalisés.',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Mes projets en ligne</h2>
        <div className="masonry-grid">
          {projects.map((project, index) => (
            <div key={index} className="masonry-item">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="project-card">
                  <img src={project.image} alt={project.title} />
                  <div className="overlay">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;