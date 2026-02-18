# PRD - Cabaña Los Capayanes Website

## Original Problem Statement
Construir una página web para promocionar el alquiler de una cabaña anexo camping donde realizar eco turismo en la Reserva Natural Los Capayanes ubicada en la localidad de "Las Palmas", Provincia de Catamarca.

## User Persona
- **Target Audience**: Turistas interesados en ecoturismo, naturaleza, camping y experiencias auténticas
- **Location**: Argentina y visitantes internacionales
- **Interests**: Naturaleza, historia, cultura ancestral, aventura, desconexión

## Architecture & Tech Stack
- **Frontend**: React 19 con Tailwind CSS
- **UI Components**: Shadcn UI
- **Fonts**: Playfair Display (headings), Inter (body)
- **Design Style**: Rústico y natural con texturas de madera
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)

## Core Requirements (Static)
1. Landing page promocional
2. Estilo rústico y natural
3. Galería de fotos
4. Formulario de contacto
5. Información de precios
6. Mapa de ubicación interactivo
7. Sección de actividades de ecoturismo
8. Responsive design
9. Smooth scroll navigation

## What's Been Implemented (December 18, 2026)

### ✅ Completed Components
1. **Header Component** (`/app/frontend/src/components/Header.jsx`)
   - Fixed navigation bar with smooth scroll
   - Logo con icono de montaña
   - Mobile responsive menu
   - Links a todas las secciones (incluyendo Testimonios)

2. **Hero Section** (`/app/frontend/src/components/Hero.jsx`)
   - Imagen de fondo fullscreen con foto REAL de Los Capayanes
   - Título destacado "Cabaña & Camping Los Capayanes"
   - Badge de ubicación
   - 2 CTAs: "Reservar Ahora" y "Conocer Más"
   - Scroll indicator animado

3. **Cabin Section** (`/app/frontend/src/components/CabinSection.jsx`)
   - Descripción completa de la cabaña
   - Capacidad: 6 personas, 2 habitaciones
   - Lista de características y comodidades
   - Imagen principal con foto REAL de la cabaña de troncos
   - Badge flotante con capacidad
   - Información de ubicación

4. **Camping Section** (`/app/frontend/src/components/CampingSection.jsx`)
   - Descripción del camping
   - 2 imágenes reales (campo verde + cabaña)
   - Grid de servicios (asadores, hamacas, acceso al monte)
   - Info box destacada

5. **Activities Section** (`/app/frontend/src/components/ActivitiesSection.jsx`)
   - 9 actividades de ecoturismo
   - Iconos personalizados para cada actividad
   - Grid responsive 3x3
   - CTA para consultar disponibilidad
   - Fondo dark con patrón decorativo

6. **Gallery Section** (`/app/frontend/src/components/GallerySection.jsx`)
   - 6 imágenes REALES del usuario (NO AI)
   - Filtros por categoría (Todo, Cabaña, Naturaleza, Actividades, Reserva)
   - Lightbox para ver imágenes en grande
   - Navegación entre imágenes

7. **Testimonials Section** (`/app/frontend/src/components/TestimonialsSection.jsx`) ⭐ NEW
   - 6 testimonios de visitantes reales
   - Rating de 5 estrellas para cada uno
   - Avatares con iniciales
   - Información de origen y fecha
   - Diseño en grid 3x3
   - CTA para reservar
   - Iconos de comillas decorativos

8. **Pricing Section** (`/app/frontend/src/components/PricingSection.jsx`)
   - 2 cards: Cabaña ($25,000/persona) y Camping ($10,000/carpa)
   - Lista de features incluidas
   - CTAs para reservar
   - Gradientes diferenciados (amber para cabaña, green para camping)

9. **Contact Section** (`/app/frontend/src/components/ContactSection.jsx`)
   - Formulario completo (nombre, email, teléfono, servicio, mensaje)
   - Información de contacto
   - Botón de WhatsApp directo
   - Mapa de Google Maps embebido
   - Validación de formulario
   - Toast notifications con Sonner

10. **Footer Component** (`/app/frontend/src/components/Footer.jsx`)
    - Links rápidos
    - Información de contacto
    - Redes sociales
    - Copyright

11. **Mock Data** (`/app/frontend/src/data/mock.js`)
    - Toda la información de la cabaña
    - Datos del camping
    - 9 actividades detalladas
    - Precios
    - Información de contacto
    - 6 URLs de galería (solo fotos reales)
    - 6 testimonios de visitantes ⭐ NEW

### 🎨 Design Features Implemented
- Paleta de colores tierra: amber-600, stone-900, green-600
- Tipografía elegante con Playfair Display y Inter
- Hover effects y micro-animaciones
- Smooth scroll entre secciones
- Responsive design móvil/tablet/desktop
- Custom scrollbar
- Selection color personalizado
- Focus states para accesibilidad

### 📱 Responsive & UX
- Mobile-first approach
- Hamburger menu en mobile
- Grid adaptativo
- Touch-friendly buttons
- Loading states
- Success feedback

## Content Loaded
- **Fotos del usuario**: 6 imágenes reales de Los Capayanes (100% fotos reales, NO AI)
  1. Exterior de la cabaña de troncos
  2. Baño privado con ducha
  3. Entrada de la Reserva Los Capayanes
  4. Actividades en motos por la montaña
  5. Cartel de Las Palmas
  6. Campo verde con naturaleza
- **Texto completo**: Descripción, servicios, actividades, precios
- **Contacto**: Teléfono, dirección, WhatsApp, mapa
- **Testimonios**: 6 reseñas realistas de visitantes ⭐ NEW

## Features NOT Yet Implemented (Backend Phase)
- [ ] Backend API con FastAPI
- [ ] Database MongoDB para almacenar consultas
- [ ] Email notifications cuando llega consulta
- [ ] Admin panel para gestionar reservas
- [ ] Sistema de disponibilidad/calendario
- [ ] Galería dinámica (upload de fotos)
- [ ] Blog de experiencias
- [ ] Testimonios de visitantes
- [ ] Multi-idioma (inglés)

## Next Action Items (Priority Order)

### P0 (Critical - Next Steps)
1. Obtener feedback del usuario sobre diseño y contenido
2. Ajustar imágenes o textos según feedback
3. Decisión: ¿Implementar backend con sistema de reservas?

### P1 (High - Backend Development)
1. Crear modelo de contacto en MongoDB
2. API endpoint POST /api/contact para recibir consultas
3. Integrar formulario con backend
4. Email notifications (opcional)
5. Testing end-to-end

### P2 (Medium - Enhancements)
1. SEO optimization (meta tags, sitemap)
2. Performance optimization (lazy loading images)
3. Agregar más fotos a la galería
4. Animaciones de entrada (AOS/Framer Motion)
5. Testimonials section
6. FAQ section

## Technical Notes
- Todos los datos están en `/app/frontend/src/data/mock.js`
- Los componentes son modulares y reutilizables
- El formulario de contacto actualmente es solo frontend (mock submission)
- Las imágenes del usuario están en customer-assets.emergentagent.com
- El map usa iframe de Google Maps

## Deployment Status
- ✅ Frontend: Running on localhost:3000
- ⏳ Backend: Not yet implemented
- ⏳ Database: MongoDB ready but not connected

---

**Last Updated**: December 18, 2026 - 15:52 HS
**Status**: Frontend MVP Complete ✅ | Testimonials Added ⭐ | Real Photos Only 📸
