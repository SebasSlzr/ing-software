const jwt = require('jsonwebtoken')

const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ message: 'Token requerido' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Acceso denegado: solo admins' })
    }
    next()
  } catch (err) {
    res.status(401).json({ message: 'Token inválido' })
  }
}

module.exports = verifyAdmin
