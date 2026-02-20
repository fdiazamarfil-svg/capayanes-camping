// Configuración de servicios de contacto

// Para desarrollo local
export const LOCAL_API_URL = "http://localhost:8001";

// Para producción (Netlify/static hosting) - usar servicio alternativo
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvgoobld"; // Necesita configurarse

// Detectar entorno
export const isProduction = process.env.NODE_ENV === 'production';
export const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

// URL del backend (usar local en desarrollo, Formspree en producción)
export const getContactEndpoint = () => {
  if (isLocalhost) {
    return `${LOCAL_API_URL}/api/contact/`;
  }
  // Para producción estática, usar Formspree o similar
  return null; // Indicará que debe usar método alternativo
};

export const shouldUseBackendAPI = () => {
  return isLocalhost;
};
