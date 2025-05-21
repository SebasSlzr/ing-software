'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const decoded = jwtDecode(token)
        setUser({ ...decoded, token })
      } catch (e) {
        localStorage.removeItem('token')
      }
    }
  }, [])

  const login = (token) => {
    const decoded = jwtDecode(token)
    setUser({ ...decoded, token })
    localStorage.setItem('token', token)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
