'use client';

import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import MySQL from "./components/MYSQL/Mysql";
import Seccion from "./components/Seccion1.0/Seccion1";
import Proyectos from "./components/Seccion2.0/Proyectos";
import Habilidades from "./components/Seccion4.0/Habilidades";
import Contacto from "./components/Seccion3.0/Contacto";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mostrarMySQL, setMostrarMySQL] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mostrarMySQL ? "hidden" : "auto";
  }, [mostrarMySQL]);

  return (
    <>
      <Header onMySQLClick={() => setMostrarMySQL(true)} />
      {mostrarMySQL && <MySQL onClose={() => setMostrarMySQL(false)} />}
      <Seccion />
      <Proyectos />
      <Habilidades />
      <Contacto />
      {children}
    </>
  );
}
