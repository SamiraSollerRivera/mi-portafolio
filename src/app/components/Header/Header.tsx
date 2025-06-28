'use client';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Aplica la clase global al body
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <nav className={`${styles.navbar} ${darkMode ? styles.navbarDark : styles.navbarLight}`}>
      <div className={styles.leftSide}>
        {/* <Image src="/image/LOGOFX.png" alt="Logo FX" width={50} height={50} className={styles.MiLogo} /> */}
        <div className={styles.logo}>MI PORTAFOLIO</div>
      </div>

      {/* Botón menú mobile */}
      <button
        className={styles.menuToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </button>

      {/* Enlaces */}
      <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <a href="#inicio" className={styles.navLink} onClick={() => setIsOpen(false)}>Inicio</a>
        <a href="#proyectos" className={styles.navLink} onClick={() => setIsOpen(false)}>Proyectos</a>
        <a href="#habilidades" className={styles.navLink} onClick={() => setIsOpen(false)}>Habilidades</a>
        <a href="#contacto" className={styles.navLink} onClick={() => setIsOpen(false)}>Contacto</a>
        <a href="https://github.com/" target="_blank" className={styles.navLink} rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </div>

      {/* Botón modo oscuro */}
      <div className={styles.rightSide}>
        <button className={styles.toggleButton} onClick={() => setDarkMode(!darkMode)} aria-label="Cambiar tema">
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
        </button>
      </div>
    </nav>
  );
}