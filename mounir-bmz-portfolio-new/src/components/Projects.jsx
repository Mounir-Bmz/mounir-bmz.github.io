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
    },
    {
      title: 'Trip O\'dvisor',
      image: '/assets/images/tripodvisor_home.png',
      link: '#',
    },
    {
      title: 'Art Portfolio',
      image: '/assets/images/mounir-bmz-art_home.png',
      link: '#',
    },
    {
      title: 'Pokedex',
      image: '/assets/images/poke_data_home.jpeg',
      link: '#',
    },
    {
      title: 'Poudlock',
      image: '/assets/images/poudlock_home.png',
      link: '#',
    },
    {
      title: 'JustCookIt',
      image: '/assets/images/JustCookIt_home.png',
      link: '#',
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