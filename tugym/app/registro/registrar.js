'use client';
import { useState } from 'react';
import styles from './Registrar.module.css';
import Swal from 'sweetalert2';
import Image from 'next/image'

export default function Registrar() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, username, email, phone, password } = formData;

    if (!first_name || !last_name || !username || !email || !phone || !password) {
      Swal.fire('Error', 'Completa todos los campos.', 'error');
      return;
    }

    try {
      const res = await fetch('http://localhost:3366/api/v1/user/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire('¡Registro exitoso!', 'Ahora puedes iniciar sesión.', 'success')
          .then(() => window.location.href = '/Login');
      } else {
        Swal.fire('Error', 'No se pudo registrar el usuario.', 'error');
      }
    } catch {
      Swal.fire('Error', 'Error de conexión con el servidor.', 'error');
    }
  };

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

      {/* FORMULARIO */}
      <main className={styles.general}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.formDiv}>
            <label className={styles.formLabel}>Nombre</label>
            <input className={styles.formInput} type="text" name="first_name" onChange={handleChange} required />
          </div>
          <div className={styles.formDiv}>
            <label className={styles.formLabel}>Apellido</label>
            <input className={styles.formInput} type="text" name="last_name" onChange={handleChange} required />
          </div>
          <div className={styles.formDiv}>
            <label className={styles.formLabel}>Nombre de Usuario</label>
            <input className={styles.formInput} type="text" name="username" onChange={handleChange} required />
          </div>
          <div className={styles.formDiv}>
            <label className={styles.formLabel}>Correo</label>
            <input className={styles.formInput} type="email" name="email" onChange={handleChange} required />
          </div>
          <div className={styles.formDiv}>
            <label className={styles.formLabel}>Celular</label>
            <input className={styles.formInput} type="text" name="phone" onChange={handleChange} required />
          </div>
          <div className={styles.formDiv}>
            <label className={styles.formLabel}>Contraseña</label>
            <input className={styles.formInput} type="password" name="password" onChange={handleChange} required />
          </div>
          <button className={styles.formButton} type="submit">Enviar</button>
          <p className={styles.textoIniciarSesion}>
            ¿Ya tienes cuenta? <a href="/Login" className={styles.linkIniciarSesion}>Inicia sesión</a>
          </p>
        </form>
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
