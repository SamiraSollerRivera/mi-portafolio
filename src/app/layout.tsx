import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// ESTA ES LA CABESERA DE MI PORTAFOLIO
import Header from "./components/Header/Header";
// ESTA ES LA SECCION DE MI PORTAFOLIO
import Seccion from "./components/Seccion1.0/Seccion1";
// ESTA ES LA SECCION DE PROYECTOS DE MI PORTAFOLIO
import Proyectos from "./components/Seccion2.0/Proyectos";
// ESTA ES MI HABILIDADES (SKILLS) DE MI PORTAFOLIO
import Habilidades from "./components/Seccion4.0/Habilidades";
// ESTA ES LA SECCION DE CONTACTO DE MI PORTAFOLIO
import Contacto from "./components/Seccion3.0/Contacto";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Portafolio personal de Anselmo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {/*ESTA ES LA SECCION DE MI PORTAFOLIO */}
        <Seccion />
        {/* ESTA ES LA SECCION DE PROYECTOS DE MI PORTAFOLIO */}
        <Proyectos />
        {/* ESTA ES MI HABILIDADES (SKILLS) DE MI PORTAFOLIO */}
        <Habilidades />
        {/* ESTA ES LA SECCION DE CONTACTO DE MI PORTAFOLIO */}
        <Contacto />
        {/* Aquí se renderizarán los hijos de este layout */}
        {children}
      </body>
    </html>
  );
}