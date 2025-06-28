import styles from './proyecto.module.css';

const proyectos = [
  {
    titulo: "Tienda Virtual",
    descripcion: "Aplicación web desarrollada en Java con sistema de carrito de compras.",
    link: "https://miproyecto1.com"
  },
  {
    titulo: "App de Idiomas",
    descripcion: "App educativa para aprender inglés, francés y portugués.",
    link: "https://miproyecto2.com"
  },
  {
    titulo: "Gestor de Notas",
    descripcion: "Sistema para que los docentes suban y consulten notas fácilmente.",
    link: "https://miproyecto3.com"
  },
  {
    titulo: "Gestor de Notas",
    descripcion: "Sistema para que los docentes suban y consulten notas fácilmente.",
    link: "https://miproyecto3.com"
  },
  {
    titulo: "Gestor de Notas",
    descripcion: "Sistema para que los docentes suban y consulten notas fácilmente.",
    link: "https://miproyecto3.com"
  },
  {
    titulo: "Gestor de Notas",
    descripcion: "Sistema para que los docentes suban y consulten notas fácilmente.",
    link: "https://miproyecto3.com"
  },
  {
    titulo: "Gestor de Notas",
    descripcion: "Sistema para que los docentes suban y consulten notas fácilmente.",
    link: "https://miproyecto3.com"
  },
  {
    titulo: "Gestor de Notas",
    descripcion: "Sistema para que los docentes suban y consulten notas fácilmente.",
    link: "https://miproyecto3.com"
  }
  
];

export default function Proyectos() {
  return (
    <section id='proyectos' className={styles.proyectosContainer}>
      <h2 className={styles.titulo}>Mis Proyectos</h2>
      <div className={styles.grid}>
        {proyectos.map((proyecto, index) => (
          <div key={index} className={styles.card}>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.link} target="_blank" rel="noreferrer">Ver Proyecto</a>
          </div>
        ))}
      </div>
    </section>
  );
}
