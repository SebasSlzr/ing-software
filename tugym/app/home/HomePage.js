'use client'
import styles from './Home.module.css'
import Swal from 'sweetalert2'
import { useEffect } from 'react'
import Image from 'next/image'

export default function HomePage() {
  useEffect(() => {
    Swal.fire({
      title: "¡Bienvenido a TuGym!",
      text: "Disfruta de tu entrenamiento.",
      icon: "info",
      confirmButtonColor: "darkred"
    });
  }, [])

  return (
    <>
      <header className={styles.header}>
        <a href="#" className={styles.logoGym}>
          <Image src="/GymFitLogo_transparent.png" alt="Logo del gimnasio" width={200} height={200} />
        </a>
        <h2 className={"nombrelogo"}>TuGym</h2>
        <nav>
          <ul>
            <a href="/"><li>Inicio</li></a>
            <a href="/acercade"><li>Acerca de</li></a>
            <a href="/registro"><li>Registrar</li></a>
            <a href="/calculadora"><li>Calculadora</li></a>
            <a href="/ejercicio"><li>Ejercicios</li></a>
            <a href="/contacto"><li>Contactos</li></a>
          </ul>
        </nav>
      </header>

      <div className={styles.bienvenida}>
       <h1 className={styles.titulo}>Bienvenido</h1>
        <button className={styles.btn} onClick={() => window.location.href = '/registro'}>Registrarse</button>
        <button className={styles.btn} onClick={() => window.location.href = '/login'}>Iniciar sesión</button>
      </div>

      <div className={styles.masInfo}>
        <p>¿Quieres saber más?</p>
        <button className={styles.btn} onClick={() => window.location.href = '/preguntasfrecuentes/CharlaIA'}>Presiona aquí</button>
      </div>

      <footer>
        <div className={styles.footerContent}>
          <Image src="/GymFitLogo_transparent.png" alt="Logo del gimnasio" width={100} height={100} className={styles.logo} />
          <ul>
            <li><a href="/acercade">Sobre nosotros</a></li>
            <li><a href="/contacto">Contáctanos</a></li>
            <li><a href="/rutinas">Cuestionarios</a></li>
            <li><a href="/politicaprivacidad">Política de privacidad</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
