# Guía de Deploy en Netlify - Los Capayanes

## Opción 1: Deploy Estático Simple (Sin Backend Funcional)

### Paso 1: Build de React
```bash
cd /app/frontend
yarn build
```

Esto generará una carpeta `/app/frontend/build` con todos los archivos estáticos.

### Paso 2: Configurar Netlify

1. En tu cuenta de Netlify, crea un nuevo site desde GitHub
2. Build command: `yarn build`
3. Publish directory: `build`
4. Add environment variable:
   - Key: `REACT_APP_BACKEND_URL`
   - Value: `https://tu-backend-si-existe.com` (o déjalo vacío si no tienes backend externo)

### Paso 3: Configuración del Formulario

**Opción A: Usar Netlify Forms** (Recomendado - Gratis en Netlify)

El formulario ya funcionará automáticamente con Netlify Forms. Los datos se guardarán en Netlify y te llegarán por email.

1. En Netlify Dashboard → Site Settings → Forms
2. Activa notifications por email a: fdiazamarfil@gmail.com

**Opción B: Usar Formspree** (Alternativa)

1. Crear cuenta en https://formspree.io
2. Crear form y obtener el endpoint
3. Actualizar el código del formulario para usar Formspree

---

## Opción 2: Deploy Full-Stack (Backend + Frontend)

### Backend en Render.com o Railway.app (Gratis)

#### Usando Render.com:

1. Crear cuenta en https://render.com
2. Crear nuevo "Web Service"
3. Conectar tu repositorio de GitHub
4. Configuración:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
   - Environment: Python 3
5. Agregar variables de entorno:
   - `MONGO_URL`: tu MongoDB connection string (usa MongoDB Atlas gratis)
   - `DB_NAME`: capayanes_db
   - `CORS_ORIGINS`: *

#### Frontend en Netlify:

1. Build tu React app con el backend URL de Render
2. Variable de entorno en Netlify:
   - `REACT_APP_BACKEND_URL`: https://tu-app.onrender.com

---

## Opción 3: Todo en Vercel (Recomendado para Full-Stack)

Vercel soporta serverless functions que pueden reemplazar tu backend FastAPI.

### Pasos:

1. Instalar Vercel CLI: `npm i -g vercel`
2. En tu proyecto: `vercel`
3. Seguir los pasos del CLI

---

## MongoDB Atlas (Gratis - Para cualquier opción)

Si necesitas MongoDB en la nube:

1. Crear cuenta en https://www.mongodb.com/cloud/atlas
2. Crear cluster gratis (M0)
3. Obtener connection string
4. Usar ese string en tu backend (Render/Railway/Vercel)

---

## Configuración de Variables de Entorno

### Para Netlify:
```
REACT_APP_BACKEND_URL=https://tu-backend.onrender.com
```

### Para Render (Backend):
```
MONGO_URL=mongodb+srv://usuario:password@cluster.mongodb.net/capayanes_db
DB_NAME=capayanes_db
CORS_ORIGINS=*
```

---

## Estructura de Archivos para Deploy

Asegúrate de tener estos archivos en tu repositorio:

```
/frontend
  /build (generado con yarn build)
  package.json
  .env.production

/backend
  server.py
  requirements.txt
  /models
  /routes
```

---

## Troubleshooting

### Formulario no funciona en Netlify:
- Verifica que REACT_APP_BACKEND_URL esté configurado
- Si no tienes backend, usa Netlify Forms (ya configurado en el código)

### CORS errors:
- Asegúrate que tu backend tenga CORS configurado para permitir tu dominio de Netlify

### 404 en producción:
- Agrega archivo `_redirects` en /public:
  ```
  /*    /index.html   200
  ```

---

## Contacto

Si tienes problemas con el deploy, las consultas se pueden recibir por:
- WhatsApp: +5493834050043
- Email: fdiazamarfil@gmail.com
