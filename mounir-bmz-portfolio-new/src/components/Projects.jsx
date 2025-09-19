import '../assets/styles/Projects.scss';

const Projects = () => {
  const projects = [
    {
      title: 'Ankama - MadLab Animation',
      tech: ['JavaScript', 'Python', 'Toon Boom Harmony', 'Kitsu'],
      description:
        'Projet d\'automatisation pour optimiser le workflow de production chez Ankama. Développement de scripts pour automatiser des tâches répétitives et intégrer Toon Boom Harmony avec le pipeline Kitsu.',
      details: [
        'Automatisation des paramétrages de scènes dans Toon Boom Harmony.',
        'Optimisation de l\'intégration des décors et des animations.',
        'Gestion du pipeline avec Kitsu pour suivre la production en temps réel.',
      ],
      link: '#',
    },
    // Add other projects (Art Portfolio, Trip O'dvisor, etc.) similarly
    // For brevity, adding just one more
    {
      title: 'Trip O\'dvisor',
      tech: ['JavaScript', 'HTML', 'CSS'],
      description:
        'Site web de conseils touristiques utilisant Javascript (vanilla).',
      details: [
        'Changement de thème : sombre/clair avec stockage local.',
        'Choix de couleur de thème : rouge, bleu, vert.',
        'Slider d\'images et gestion des commentaires.',
      ],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Mes projets en ligne</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <div className="tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <p>{project.description}</p>
              <ul>
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <a href={project.link} className="btn">
                Voir le projet
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;