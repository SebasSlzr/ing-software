'use client';
import styles from './rutinas.module.css';
import { useState } from 'react';
import Image from 'next/image'

export default function Rutinas() {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    peso: '',
    estatura: '',
    objetivo: '',
    frecuencia: '',
    correo: '',
    fecha: '',
    nivel: '',
    genero: '',
    observaciones: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
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
      <div className={styles.container}>
        <h1 className={styles.tituloPrincipal}>Formulario de Rutina de Entrenamiento</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.columna}>
              <label className={styles.etiqueta}>Nombre completo:</label>
              <input className={styles.entrada} type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
            </div>
            <div className={styles.columna}>
              <label className={styles.etiqueta}>Correo electrónico:</label>
              <input className={styles.entrada} type="email" name="correo" value={formData.correo} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.columna}>
              <label className={styles.etiqueta}>Edad:</label>
              <input className={styles.entrada} type="number" name="edad" value={formData.edad} onChange={handleChange} />
            </div>
            <div className={styles.columna}>
              <label className={styles.etiqueta}>Peso (kg):</label>
              <input className={styles.entrada} type="number" name="peso" value={formData.peso} onChange={handleChange} />
            </div>
            <div className={styles.columna}>
              <label className={styles.etiqueta}>Estatura (cm):</label>
              <input className={styles.entrada} type="number" name="estatura" value={formData.estatura} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.columna}>
              <label className={styles.etiqueta}>Fecha de inicio:</label>
              <input className={styles.entrada} type="date" name="fecha" value={formData.fecha} onChange={handleChange} />
            </div>
            <div className={styles.columna}>
              <label className={styles.etiqueta}>Frecuencia semanal:</label>
              <select className={styles.entrada} name="frecuencia" value={formData.frecuencia} onChange={handleChange}>
                <option value="">Selecciona</option>
                <option value="1-2">1-2 días</option>
                <option value="3-4">3-4 días</option>
                <option value="5-6">5-6 días</option>
              </select>
            </div>
            <div className={styles.columna}>
              <label className={styles.etiqueta}>Género:</label>
              <select className={styles.entrada} name="genero" value={formData.genero} onChange={handleChange}>
                <option value="">Selecciona</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.columna}>
              <label className={styles.etiqueta}>Objetivo principal:</label>
              <select className={styles.entrada} name="objetivo" value={formData.objetivo} onChange={handleChange}>
                <option value="">Selecciona</option>
                <option value="perder peso">Perder peso</option>
                <option value="ganar masa">Ganar masa muscular</option>
                <option value="resistencia">Aumentar resistencia</option>
                <option value="salud">Mejorar salud</option>
              </select>
            </div>
            <div className={styles.columna}>
              <label className={styles.etiqueta}>Nivel de condición:</label>
              <select className={styles.entrada} name="nivel" value={formData.nivel} onChange={handleChange}>
                <option value="">Selecciona</option>
                <option value="principiante">Principiante</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzado">Avanzado</option>
              </select>
            </div>
          </div>

          <div>
            <label className={styles.etiqueta}>Observaciones adicionales:</label>
            <textarea
              className={styles.entrada}
              name="observaciones"
              rows="4"
              value={formData.observaciones}
              onChange={handleChange}
            ></textarea>
          </div>

          <input className={styles.botonSubmit} type="submit" value="Enviar rutina" />
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
  
