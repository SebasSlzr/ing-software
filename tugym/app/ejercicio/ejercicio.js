"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import styles from "./ejercicio.module.css";
import Image from 'next/image'

export default function Ejercicio() {
  const [ejercicios, setEjercicios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    Swal.fire({
      title: "Tus Rutinas",
      text: "Consulta tus ejercicios favoritos.",
      icon: "info",
      confirmButtonColor: "darkred"
    });

    const fetchEjercicios = async () => {
      try {
        const res = await fetch("http://localhost:3366/api/v1/exercises");
        const data = await res.json();
        setEjercicios(data.data || []);
      } catch (err) {
        console.error("Error al obtener los ejercicios:", err);
        setError("Error al cargar los ejercicios.");
      }
    };

    fetchEjercicios();
  }, []);

  const obtenerNombreCategoria = (categoryId) => {
    const categorias = {
      1: "Pierna",
      2: "Pecho",
      3: "Espalda",
      4: "Brazos",
      5: "Hombros",
      6: "Abdomen",
    };
    return categorias[categoryId] || "Categoría Desconocida";
  };

  const categoriasMap = ejercicios.reduce((acc, ejercicio) => {
    if (!acc[ejercicio.category_id]) {
      acc[ejercicio.category_id] = [];
    }
    acc[ejercicio.category_id].push(ejercicio);
    return acc;
  }, {});

  return (
    <>
    <div className={styles.fondoCompleto}>
      <header className="header">
        <a href="/" className="logo-gym">
          <Image src="/GymFitLogo_transparent.png" alt="Logo del Gimnasio" width={200} height={200}/>
        </a>
        <h2 className="nombrelogo">TuGym</h2>
        <nav>
          <ul>
            <a href="/Home"><li>Inicio</li></a>
            <a href="/AcercaDe"><li>Acerca de</li></a>
            <a href="/registro"><li>Registrar</li></a>
            <a href="/calculadora"><li>Calculadora</li></a>
            <a href="/Ejercicio"><li>Ejercicios</li></a>
            <a href="/Contacto"><li>Contactos</li></a>
          </ul>
        </nav>
      </header>

      <main className={styles.contenido}>
        <h1>Lista de Ejercicios</h1>
        {error && <p>{error}</p>}
        {!error && ejercicios.length === 0 && <p>No hay ejercicios disponibles.</p>}
        <ul>
          {Object.entries(categoriasMap).map(([categoriaId, lista]) => (
            <li key={categoriaId}>
              <h2>{obtenerNombreCategoria(categoriaId)}</h2>
              <ul>
                {lista.map((ejercicio, index) => (
                  <li key={index} className={styles.ejercicioItem}>
                    <strong>{ejercicio.name}</strong> - {ejercicio.description}
                    <br />
                    (Sets: {ejercicio.sets}, Reps: {ejercicio.repetitions})
                    {ejercicio.media_url && (
                      <div>
                        <img
                          src={ejercicio.media_url}
                          alt={ejercicio.name}
                          className={styles.gifEjercicio}
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </div>

      <footer>
        <div className="footer-content">
          <img src="/GymFitLogo_transparent.png" alt="Logo del gimnasio" className="logo" width={100} height={100}/>
          <ul>
            <li><a href="/AcercaDe">Sobre nosotros</a></li>
            <li><a href="/Contacto">Contáctanos</a></li>
            <li><a href="/Rutinas">Cuestionarios</a></li>
            <li><a href="/PoliticaPrivacidad">Política de privacidad</a></li>
          </ul>
        </div>
      </footer>
    
    </>
  );
}
