import '../assets/styles/Home.scss';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <h1>Mounir Boumaza</h1>
        <h2>Développeur web full-stack</h2>
        <div className="skills">
          <span>Front-end</span>
          <span>Back-end</span>
          <span>Mobile</span>
          <span>Web Design</span>
          <span>Anglais</span>
        </div>
        <a href="#projects" className="btn">
          Mes projets
        </a>
        <a href="linkedin-url" target="_blank" rel="noopener noreferrer" className="btn">
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Home;