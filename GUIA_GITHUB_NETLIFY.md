# Guía Paso a Paso: GitHub + Netlify

## Paso 1: Preparar el código para GitHub

### 1.1 Crear archivos necesarios

Crea un archivo `.gitignore` en la raíz del proyecto:

```bash
# Node modules
node_modules/
frontend/node_modules/
frontend/build/

# Python
__pycache__/
*.pyc
backend/__pycache__/

# Environment variables
.env
*/.env
!frontend/.env.production

# Logs
*.log
logs/

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
```

### 1.2 Inicializar Git (si no está inicializado)

```bash
cd /app
git init
git config user.name "Tu Nombre"
git config user.email "fdiazamarfil@gmail.com"
```

### 1.3 Hacer commit inicial

```bash
git add .
git commit -m "Initial commit: Los Capayanes website"
```

---

## Paso 2: Subir a GitHub

### Opción A: Desde la terminal (si tienes token)

```bash
# Crear repo en GitHub primero (https://github.com/new)
# Luego conectarlo:
git remote add origin https://github.com/TU_USUARIO/capayanes-camping.git
git branch -M main
git push -u origin main
```

### Opción B: Desde GitHub Desktop (más fácil)

1. Descargar GitHub Desktop: https://desktop.github.com/
2. Abrir GitHub Desktop
3. File → Add Local Repository → Seleccionar `/app`
4. Publish Repository
5. Elegir nombre: `capayanes-camping`
6. Hacer push

---

## Paso 3: Configurar Netlify (SOLO Frontend)

### 3.1 Crear cuenta en Netlify
- Ir a https://netlify.com
- Sign up con GitHub

### 3.2 Deploy desde GitHub

1. En Netlify Dashboard: **"Add new site" → "Import an existing project"**
2. Conectar con GitHub
3. Seleccionar repositorio `capayanes-camping`
4. Configuración:
   ```
   Base directory: frontend
   Build command: yarn build
   Publish directory: frontend/build
   ```

5. **Variables de entorno** (Dejar vacío por ahora):
   ```
   REACT_APP_BACKEND_URL=
   ```

6. Click "Deploy site"

### 3.3 ¡Listo! Tu sitio estará en:
`https://NOMBRE-RANDOM.netlify.app`

---

## Paso 4: El Formulario en Netlify

### Opción 1: Usar Netlify Forms (GRATIS - Recomendado)

El código ya está preparado. Solo necesitas modificar el formulario para que use Netlify Forms cuando esté en producción.

**Archivo a modificar:** `/app/frontend/src/components/ContactSection.jsx`

Agregar al form tag:
```jsx
<form 
  name="contact"
  method="POST"
  data-netlify="true"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
  {/* resto del formulario */}
</form>
```

Las consultas llegarán a:
- Netlify Dashboard → Forms
- Email: fdiazamarfil@gmail.com (configurable en Netlify)

### Opción 2: Hospedar Backend en Render.com

Si quieres que el backend siga funcionando:

1. Ir a https://render.com
2. Crear cuenta
3. "New +" → "Web Service"
4. Conectar tu repo de GitHub
5. Configuración:
   ```
   Root Directory: backend
   Build Command: pip install -r requirements.txt
   Start Command: uvicorn server:app --host 0.0.0.0 --port $PORT
   ```
6. Variables de entorno:
   ```
   MONGO_URL=TU_MONGO_ATLAS_URL
   DB_NAME=capayanes_db
   CORS_ORIGINS=*
   ```

7. Deploy

8. Copiar la URL de Render (ej: `https://capayanes-backend.onrender.com`)

9. En Netlify, agregar variable:
   ```
   REACT_APP_BACKEND_URL=https://capayanes-backend.onrender.com
   ```

10. Redeploy en Netlify

---

## MongoDB en la Nube (si usas Render para backend)

1. Ir a https://www.mongodb.com/cloud/atlas
2. Crear cuenta gratis
3. Create Cluster (M0 Free)
4. Database Access → Add User
5. Network Access → Add IP (0.0.0.0/0 para permitir todos)
6. Clusters → Connect → Connect your application
7. Copiar connection string
8. Usar en Render como `MONGO_URL`

---

## Solución de Problemas

### "El formulario no funciona en Netlify"
- Verifica que hayas agregado `data-netlify="true"` al form
- O configura REACT_APP_BACKEND_URL con tu backend en Render

### "404 en las rutas"
- Verifica que existe `/app/frontend/public/_redirects`
- Debe contener: `/*    /index.html   200`

### "Build falla en Netlify"
- Verifica que `netlify.toml` esté en `/app/frontend/`
- Verifica Base directory: `frontend`

---

## Resumen Rápido

**Para deploy SIN backend:**
1. Push a GitHub
2. Conectar Netlify con GitHub
3. Build command: `yarn build`
4. Publish directory: `frontend/build`
5. Usar Netlify Forms

**Para deploy CON backend:**
1. Backend en Render.com con MongoDB Atlas
2. Frontend en Netlify con REACT_APP_BACKEND_URL configurado

---

## URLs Útiles

- GitHub: https://github.com
- Netlify: https://netlify.com
- Render: https://render.com  
- MongoDB Atlas: https://mongodb.com/cloud/atlas
- GitHub Desktop: https://desktop.github.com
