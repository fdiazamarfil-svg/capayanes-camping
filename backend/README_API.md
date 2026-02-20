# Backend API - Los Capayanes

## Endpoints Disponibles

### Formulario de Contacto

#### 1. Crear Nueva Consulta
```bash
POST /api/contact/
```

**Body (JSON):**
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "phone": "+5491234567890",
  "service": "cabaña",
  "message": "Consulta sobre disponibilidad"
}
```

**Response (201):**
```json
{
  "id": "uuid-generado",
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "phone": "+5491234567890",
  "service": "cabaña",
  "message": "Consulta sobre disponibilidad",
  "status": "pending",
  "created_at": "2026-02-18T20:00:00Z"
}
```

#### 2. Obtener Todas las Consultas
```bash
GET /api/contact/
```

**Query Parameters:**
- `status_filter`: pending | contacted | resolved (opcional)
- `limit`: número máximo de resultados (default: 100)
- `skip`: paginación (default: 0)

**Response (200):**
```json
[
  {
    "id": "uuid",
    "name": "Juan Pérez",
    "email": "juan@example.com",
    ...
  }
]
```

#### 3. Obtener Consulta por ID
```bash
GET /api/contact/{contact_id}
```

#### 4. Actualizar Estado de Consulta
```bash
PATCH /api/contact/{contact_id}/status?new_status=contacted
```

**Estados válidos:**
- `pending`: Nueva consulta sin contactar
- `contacted`: Ya se contactó al cliente
- `resolved`: Consulta resuelta

---

## Ejemplos de Uso

### Obtener todas las consultas pendientes:
```bash
API_URL="https://capayanes-camping.stage-preview.emergentagent.com"
curl "$API_URL/api/contact/?status_filter=pending"
```

### Ver consultas desde la terminal:
```bash
API_URL=$(grep REACT_APP_BACKEND_URL /app/frontend/.env | cut -d '=' -f2)
curl -s "$API_URL/api/contact/" | python3 -m json.tool
```

### Marcar una consulta como contactada:
```bash
CONTACT_ID="uuid-de-la-consulta"
curl -X PATCH "$API_URL/api/contact/$CONTACT_ID/status?new_status=contacted"
```

---

## Base de Datos

**MongoDB Database:** `capayanes_db`
**Collection:** `contacts`

**Estructura del documento:**
```javascript
{
  _id: ObjectId("..."),
  id: "uuid-generado",
  name: "Nombre del cliente",
  email: "email@ejemplo.com",
  phone: "+54...",
  service: "cabaña | camping | ambos | actividades",
  message: "Mensaje del cliente",
  status: "pending | contacted | resolved",
  created_at: ISODate("...")
}
```

---

## Email de Notificaciones

**Email configurado:** fdiazamarfil@gmail.com

Este email está guardado en `/app/frontend/src/data/mock.js` para futuras integraciones de notificaciones por email.

---

## Acceder a la Documentación Interactiva

FastAPI genera documentación automática:

- **Swagger UI:** https://capayanes-camping.stage-preview.emergentagent.com/docs
- **ReDoc:** https://capayanes-camping.stage-preview.emergentagent.com/redoc

Desde ahí puedes probar todos los endpoints directamente desde el navegador.
