'use client'; // Necesario por el uso de useState
//Correo

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Crear el FormData para enviar a Formspree
    const formData = new FormData();
    formData.append('Nombre', form.nombre);
    formData.append('Correo', form.correo);
    formData.append('Mensaje', form.mensaje);

    // Reemplaza con tu endpoint real de Formspree
    const response = await fetch('https://formspree.io/f/mrbkjzop', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setEnviado(true);
      setForm({
        nombre: '',
        correo: '',
        mensaje: '',
      });

      setTimeout(() => setEnviado(false), 3000);
    } else {
      alert('Hubo un error al enviar el formulario.');
    }
  };

  return (
    <section className={styles.contactoContainer} id="contacto">
      <h2 className={styles.titulo}>Contáctame</h2>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <div className={styles.contenido}>
          <label className={styles.labeltext} htmlFor="nombre">Nombre</label>
          <input
            className={styles.ingresardato}
            type="text"
            name="nombre"
            placeholder="..."
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.contenido}>
          <label className={styles.labeltext} htmlFor="correo">Correo electrónico</label>
          <input
            className={styles.ingresardato}
            type="email"
            name="correo"
            placeholder="...@"
            value={form.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.contenido}>
          <label className={styles.labeltext} htmlFor="mensaje">Mensaje</label>
          <textarea
            className={`${styles.ingresardato} ${styles.mensaje}`}
            name="mensaje"
            placeholder="..."
            value={form.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.botonenviar}>Enviar mensaje</button>
        {enviado && <p className={styles.confirmacion}>¡Mensaje enviado correctamente!</p>}
      </form>

      <div className={styles.redes}>
        <a href="https://wa.link/33paui" target="_blank" rel="noreferrer" className={styles.icono}>
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </a>
        <a href="https://www.facebook.com/share/16L88ea5AU/" target="_blank" rel="noreferrer" className={styles.icono}>
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </a>
        <a href="https://www.instagram.com/666el_primo?igsh=ejIyMWQ2c3I5M3lz&utm_source=ig_contact_invite" target="_blank" rel="noreferrer" className={styles.icono}>
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
