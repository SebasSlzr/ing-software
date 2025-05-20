'use client';
import styles from './contacto.module.css';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

export default function Contacto() {
  useEffect(() => {
    Swal.fire({
      title: 'Contactanos para mas informacion',
      icon: 'question',
      confirmButtonColor: 'darkred'
    });
  }, []);

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


      <main className={styles.main}>
        <div className={styles.logoWhatsapp}>
          <a href="#">
            <Image src="/Whatsapp-logo.png" alt="WhatsApp" width={80} height={80} />
          </a>
        </div>
        <h2 className={styles.texto}>+57-3147553209</h2>

        <div className={styles.logoInstagram}>
          <a href="#">
            <Image src="/logo-instagram.png" alt="Instagram" width={80} height={80} />
          </a>
        </div>
        <h2 className={styles.texto}>@TuGym_</h2>
      </main>
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
  );
}
