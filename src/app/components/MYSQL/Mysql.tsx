import styles from './mysql.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const mysql = [
  {
    titulo: "BASE DE DATOS ECHO EN CLASE",
    descripcion: "3 diagramas de base de datos hecho en clase de estudio.",
    pdf: "/pdfs/Tarea01.pdf"
  },
  {
    titulo: "CONSULTAS DE BASE DE DATOS 1",
    descripcion: "Consultas a base de datos con MySQL, en clase y entregado como tarea.",
    pdf: "/pdfs/MySQL.pdf"
  },
  {
    titulo: "CONSULTAS DE BASE DE DATOS 2",
    descripcion: "Consultas a base de datos con MySQL, en clase y entregado como tarea.",
    pdf: "/pdfs/MySQL2.pdf"
  }
];

type Props = {
  onClose: () => void;
};

export default function MySQL({ onClose }: Props) {
  return (
    <section id='mysql' className={styles.mysqlContainer}>
      <div className={styles.header}>
        <h2 className={styles.titulo}>CURSO DE BASE DE DATOS</h2>
        <button className={styles.cerrar} onClick={onClose}>X</button>
      </div>

      <div className={styles.grid}>
        {mysql.map((proyecto, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.titulosecundario}>{proyecto.titulo}</h3>
            <p className={styles.descripcion}>{proyecto.descripcion}</p>
            <h6 className={styles.colorblue}>Vista del PDF:</h6>
            <iframe
              className={styles.pdfViewer}
              src={proyecto.pdf}
              width="100%"
              height="300"
              title={`PDF de ${proyecto.titulo}`}
            ></iframe>
            <a href={proyecto.pdf} download className={styles.icono}>
              <FontAwesomeIcon icon={faFilePdf} /> Descargar PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
