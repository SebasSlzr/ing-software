'use client';

import { useState } from 'react';
import styles from './inicioSesion.module.css';
import Swal from 'sweetalert2';
import Image from 'next/image'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos.'
      });
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(email)) {
      return Swal.fire({
        icon: 'error',
        title: 'Correo invalido',
        text: 'Ingresa un correo valido que termine en .com.'
      });
    }

    try {
      const response = await fetch('http://localhost:3366/api/v1/user/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (response.ok && result.status === 0 && result.token) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));

        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesion exitoso',
          text: 'Bienvenido de nuevo!',
          confirmButtonColor: 'darkred'
        }).then(() => {
          window.location.href = "/rutinas"; // Redirige según el rol si lo deseas
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar sesion',
          text: result.message || 'Credenciales incorrectas'
        });
      }
    } catch (error) {
      console.error("Error al iniciar sesion:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error de red',
        text: 'No se pudo conectar con el servidor.'
      });
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

        <div className={styles.general}>
          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Correo</label>
              <input
                id="email"
                type="email"
                placeholder="Debe incluir @ y terminar en .com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.button}>Enviar</button>
          </form>
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
