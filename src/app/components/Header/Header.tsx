import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  onMySQLClick: () => void;
}

export default function Header({ onMySQLClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <nav className={`${styles.navbar} ${darkMode ? styles.navbarDark : styles.navbarLight}`}>
      <div className={styles.leftSide}>
        <div className={styles.logo}>MI PORTAFOLIO</div>
      </div>

      <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </button>

      <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <a href="#inicio" className={styles.botonnav} onClick={() => setIsOpen(false)}>Inicio</a>
        <a href="#contacto" className={styles.botonnav} onClick={() => setIsOpen(false)}>Contacto</a>

        <div className={styles.dropdown}>
          <a href="#proyectos" className={styles.botonnav} onClick={() => setIsOpen(false)}>Proyectos</a>
          <div className={styles.dropdownContent}>
            <a
              href="#mysql"
              onClick={() => {
                onMySQLClick();
                setIsOpen(false);
              }}
            >
              MySQL
            </a>
            <a href="#taller" onClick={() => setIsOpen(false)}>Taller</a>
            <a href="#otros" onClick={() => setIsOpen(false)}>Otros</a>
          </div>
        </div>

        <a href="https://github.com/AnselmoTrade" target="_blank" className={styles.botonnav} rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </div>


      <div className={styles.rightSide}>
        <button className={styles.toggleButton} onClick={() => setDarkMode(!darkMode)} aria-label="Cambiar tema">
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
        </button>
      </div>
    </nav>
  );
}
