import styles from './habilidades.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs, faJava, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export default function Habilidades() {
  return (
    <section id="habilidades" className={styles.habilidadesContainer}>
      <h2 className={styles.titulo}>Mis Habilidades</h2>
      <div className={styles.categorias}>

        <div className={styles.categoria}>
          <h3>Frontend</h3>
          <ul>
            <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
            <li><FontAwesomeIcon icon={faReact} /> React</li>
          </ul>
        </div>

        <div className={styles.categoria}>
          <h3>Backend</h3>
          <ul>
            <li><FontAwesomeIcon icon={faNodeJs} /> Node.js</li>
            <li><FontAwesomeIcon icon={faJava} /> Java</li>
            <li><FontAwesomeIcon icon={faPhp} /> PHP</li>
          </ul>
        </div>

        <div className={styles.categoria}>
          <h3>Bases de Datos</h3>
          <ul>
            <li><FontAwesomeIcon icon={faDatabase} /> MySQL</li>
            <li><FontAwesomeIcon icon={faDatabase} /> PostgreSQL</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
