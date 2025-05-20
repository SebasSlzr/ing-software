'use client'
import styles from './politicaprivacidad.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function PoliticaPrivacidad() {
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

      {/* CONTENIDO CENTRAL */}
      <div className={styles.containerPolitica}> 
      <div className={styles.contentPolitica}>
        <h1>Política de Privacidad</h1>
        <p>
          En nuestro gimnasio, valoramos tu privacidad y nos comprometemos a proteger tu información personal.
          Esta política describe cómo recopilamos, usamos y protegemos los datos de nuestros usuarios.
        </p>
        <h2>1. Información que Recopilamos</h2>
        <p>
          Podemos recopilar información personal como nombre, correo electrónico, número de teléfono y datos de actividad física
          para mejorar tu experiencia en nuestra aplicación.
        </p>
        <h2>2. Uso de la Información</h2>
        <p>
          Utilizamos tus datos para personalizar planes de entrenamiento, enviar notificaciones y mejorar nuestros servicios.
          No compartiremos tu información con terceros sin tu consentimiento.
        </p>
        <h2>3. Seguridad de tus Datos</h2>
        <p>
          Implementamos medidas de seguridad para proteger tu información, pero te recomendamos no compartir tus credenciales de acceso.
        </p>
        <h2>4. Contacto</h2>
        <p>
          Si tienes preguntas sobre nuestra política de privacidad, contáctanos en soporte@gimnasio.com.
        </p>
      </div>
      </div>
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