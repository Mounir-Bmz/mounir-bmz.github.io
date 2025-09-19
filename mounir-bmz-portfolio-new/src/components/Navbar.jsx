// src/components/Navbar.jsx
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../assets/styles/Navbar.scss';

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isTransparent ? 'bg-transparent' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-left">
        <span className="navbar-brand" onClick={(e) => scrollToSection(e, 'home')}>
          Mounir Boumaza
        </span>
        <button id="darkModeButton" onClick={toggleDarkMode}>
          <i className={isDarkMode ? 'fa fa-sun' : 'fa fa-moon'}></i>
        </button>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#home" className="nav-link" onClick={(e) => scrollToSection(e, 'home')}>
            Accueil
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, 'about')}>
            À propos
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link" onClick={(e) => scrollToSection(e, 'projects')}>
            Projets
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, 'contact')}>
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href="cv-url" className="nav-link" target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;