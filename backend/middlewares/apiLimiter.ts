import rateLimit from 'express-rate-limit'

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5, // 5 solicitudes
  message: 'Demasiados intentos, inténtalo de nuevo más tarde.',
  standardHeaders: true, 
  legacyHeaders: false,
});

export default apiLimiter