'use client'
import styles from './AcercaDe.module.css'
import Swal from 'sweetalert2'
import { useEffect } from 'react'
import Image from 'next/image'

export default function AcercaDePage() {
  useEffect(() => {
    Swal.fire({
      title: "¡Conoce más sobre nosotros!",
      icon: "info",
      confirmButtonColor: "darkred"
    });
  }, [])

  return (
    <>
    <div className={styles.fondoCompleto}>
      <header className="header">
        <a href="/" className="logo-gym">
          <Image src="/GymFitLogo_transparent.png" alt="Logo del gimnasio" width={200} height={200} />
        </a>
        <h2 className="nombrelogo">TuGym</h2>
        <nav>
          <ul className="nav-list">
            <a href="/"><li>Inicio</li></a>
            <a href="/acercade"><li>Acerca de</li></a>
            <a href="/registro"><li>Registrar</li></a>
            <a href="/calculadora"><li>Calculadora</li></a>
            <a href="/ejercicio"><li>Ejercicios</li></a>
            <a href="/contacto"><li>Contactos</li></a>
          </ul>
        </nav>
      </header>

      <main>
      
        <section className={styles.infoBox}>
          <div className={styles.textContainer}>
            <h2 className={styles.titulo}>Sobre Nosotros</h2>
            <p>En TuGym estamos comprometidos con tu bienestar y rendimiento físico. Ofrecemos una plataforma innovadora que
        te ayuda a gestionar tus entrenamientos, alimentación y progreso de manera sencilla y efectiva. 📈🏋️‍♂️</p>
            <p>Nuestro objetivo es brindarte herramientas personalizadas para alcanzar tus metas fitness, con entrenadores
        especializados, rutinas adaptadas y un seguimiento detallado. ¿Qué esperas? ¡Únete a nuestra comunidad y lleva
        tu entrenamiento al siguiente nivel! 💪🔥</p>
          </div>
        </section>
        
      </main>
    </div>
    
      <footer className="footer">
        <div className="footer-content">
          <Image src="/GymFitLogo_transparent.png" alt="Logo del gimnasio" width={100} height={100} />
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
