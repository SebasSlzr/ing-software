// app/Calculadora/Calculadora.js
'use client';
import React, { useState, useEffect } from 'react';
import styles from './Calculadora.module.css';
import Swal from 'sweetalert2';
import Image from 'next/image';

export default function Calculadora() {
  const [form, setForm] = useState({
    edad: '',
    sexo: 'masculino',
    altura: '',
    peso: '',
    actividad: '1.2'
  });

  const [resultado, setResultado] = useState('');

  useEffect(() => {
    Swal.fire({
      title: 'Calcula tu gasto calorico diario',
      icon: 'info',
      confirmButtonColor: 'darkred'
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const calcularCalorias = () => {
    const { edad, sexo, altura, peso, actividad } = form;
    if (!edad || !altura || !peso) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    let bmr =
      sexo === 'masculino'
        ? 10 * peso + 6.25 * altura - 5 * edad + 5
        : 10 * peso + 6.25 * altura - 5 * edad - 161;

    const caloriasDiarias = bmr * parseFloat(actividad);
    setResultado(`Tu gasto calorico diario es aproximadamente: ${Math.round(caloriasDiarias)} calorias`);
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
  <h2 className={styles.title}>Calculadora de Calorias</h2>
  <form>
    <label htmlFor="edad" className={styles.label}>Edad:</label>
    <input type="number" id="edad" value={form.edad} onChange={handleChange} required className={styles.input} />

    <label htmlFor="sexo" className={styles.label}>Genero:</label>
    <select id="sexo" value={form.sexo} onChange={handleChange} className={styles.select}>
      <option value="masculino">Masculino</option>
      <option value="femenino">Femenino</option>
    </select>

    <label htmlFor="altura" className={styles.label}>Altura (cm):</label>
    <input type="number" id="altura" value={form.altura} onChange={handleChange} required className={styles.input} />

    <label htmlFor="peso" className={styles.label}>Peso (kg):</label>
    <input type="number" id="peso" value={form.peso} onChange={handleChange} required className={styles.input} />

    <label htmlFor="actividad" className={styles.label}>Nivel de actividad:</label>
    <select id="actividad" value={form.actividad} onChange={handleChange} className={styles.select}>
      <option value="1.2">Sedentario (poco o ningun ejercicio)</option>
      <option value="1.375">Ligero (1-3 dias/semana)</option>
      <option value="1.55">Moderado (3-5 dias/semana)</option>
      <option value="1.725">Activo (6-7 dias/semana)</option>
      <option value="1.9">Muy activo (ejercicio intenso diario)</option>
    </select>

    <button type="button" onClick={calcularCalorias} className={styles.button}>Calcular</button>
  </form>

  {resultado && <div className={styles.resultado}>{resultado}</div>}
</div>
</div>

<footer className={styles.footer}>
  <div className={styles.footerContent}>
    <img src="/GymFitLogo_transparent.png" alt="Logo del gimnasio" width={100} height={100} />
    <ul className={styles.footerList}>
      <li className={styles.footerItem}><a href="/AcercaDe" className={styles.footerLink}>Sobre nosotros</a></li>
      <li className={styles.footerItem}><a href="/Contacto" className={styles.footerLink}>Contactanos</a></li>
      <li className={styles.footerItem}><a href="/Rutinas" className={styles.footerLink}>Cuestionarios</a></li>
      <li className={styles.footerItem}><a href="/PoliticaPrivacidad" className={styles.footerLink}>Politica de privacidad</a></li>
    </ul>
  </div>
</footer>
    </>
  )
}
