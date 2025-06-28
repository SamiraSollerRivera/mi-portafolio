'use client'; // Necesario por el uso de useState

import styles from './contacto.module.css';
import { useState } from 'react';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mensaje enviado:', form);
    setEnviado(true);

    setForm({
      nombre: '',
      correo: '',
      mensaje: '',
    });

    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <section className={styles.contactoContainer} id="contacto">
      <h2 className={styles.titulo}>Contáctame</h2>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <div className={styles.contenido}>
          <label className={styles.labeltext} htmlFor="nombre">Nombre</label>
          <input className={`${styles.ingresardato}`}
            type="text"
            name="nombre"
            placeholder="Ingresa tu nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.contenido}>
          <label className={styles.labeltext} htmlFor="correo">Correo electrónico</label>
          <input className={`${styles.ingresardato}`}
            type="email"
            name="correo"
            placeholder="Ingresa tu correo electrónico"
            value={form.correo}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.contenido}>
          <label className={styles.labeltext} htmlFor="mensaje">Mensaje</label>
          <textarea className={`${styles.ingresardato} ${styles.mensaje}`}
            name="mensaje"
            placeholder="Escribe tu mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.botonenviar}>Enviar mensaje</button>
        {enviado && <p className={styles.confirmacion}>¡Mensaje enviado correctamente!</p>}
      </form>
      <div className={styles.redes}>
        <a href="https://wa.me/51999999999" target="_blank" rel="noreferrer" className={styles.icono}>
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </a>
        <a href="https://facebook.com/tuusuario" target="_blank" rel="noreferrer" className={styles.icono}>
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </a>
        <a href="https://instagram.com/tuusuario" target="_blank" rel="noreferrer" className={styles.icono}>
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer" className={styles.icono}>
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="/cv-anselmo.pdf" download className={styles.icono}>
          <FontAwesomeIcon icon={faFilePdf} /> Descargar CV
      </a>
      </div>
    </section>
  );
}
