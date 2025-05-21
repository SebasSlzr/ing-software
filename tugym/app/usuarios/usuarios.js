'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { jwtDecode } from 'jwt-decode';
import styles from './Usuarios.module.css'
import Image from 'next/image'

export default function Usuarios() {
  const router = useRouter()
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      router.push('/')
      return
    }

    let decoded
    try {
      decoded = jwtDecode(token)
    } catch {
      router.push('/')
      return
    }

    if (decoded.role !== 'admin') {
      router.push('/')
      return
    }

    fetch('http://localhost:3366/api/v1/user/all')
      .then(res => res.json())
      .then(data => {
        if (data.status === 0) {
          setUsuarios(data.data)
        }
      })
      .catch(err => console.error(err))
  }, [])

  return (
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
            <a href="/usuarios"><li>Usuarios</li></a>
          </ul>
        </nav>
      </header>

      <main className={styles.general}>
        <h1 className={styles.titulo}>Lista de Usuarios Registrados</h1>
        <table className={styles.tabla}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Username</th>
              <th>Email</th>
              <th>Celular</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id_user}>
                <td>{usuario.id_user}</td>
                <td>{usuario.first_name}</td>
                <td>{usuario.last_name}</td>
                <td>{usuario.username}</td>
                <td>{usuario.email}</td>
                <td>{usuario.phone}</td>
                <td>{usuario.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

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
    </div>
  )
}
