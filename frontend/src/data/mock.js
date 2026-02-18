// Mock data para Cabaña Los Capayanes

export const cabinInfo = {
  name: "Cabaña Los Capayanes",
  tagline: "Ecoturismo en la Reserva Natural",
  description: "Podés disfrutar de una estadía en un lugar cómodo y confortable en medio del monte nativo entre la vegetación autóctona y los yacimientos de piezas arqueológicas de incalculable valor histórico. Te ofrecemos paz y tranquilidad con la amable atención de su dueño. Paseos a la montaña con guía y la posibilidad de conocer las curiosidades del monte nativo.",
  location: "Ubicado justo en la entrada de la Reserva Natural de Los Capayanes en la Localidad de Las Palmas (Catamarca).",
  capacity: 6,
  rooms: 2,
  features: [
    "Cabaña de troncos estilo rústico",
    "Amplio living comedor con hogar a leña",
    "Dos habitaciones privadas (2-3 personas cada una)",
    "Baño privado con ducha y agua caliente",
    "Dos galerías techadas con vista al parque",
    "Agua caliente",
    "WiFi",
    "Ventiladores",
    "Calefacción a leña"
  ]
};

export const campingInfo = {
  description: "El camping se encuentra junto a un amplio campo verde con vegetación autóctona y salida al monte.",
  services: [
    "Sector de asadores con luz",
    "Hamacas",
    "Acceso al monte",
    "Campo verde natural"
  ]
};

export const activities = [
  {
    id: 1,
    title: "Caminata a la Cascada Petrificada",
    description: "Paseo guiado a uno de los atractivos naturales más impresionantes de la zona",
    icon: "mountain"
  },
  {
    id: 2,
    title: "Ascenso al Calvario",
    description: "Trekking con vistas panorámicas de la reserva natural",
    icon: "trekking"
  },
  {
    id: 3,
    title: "Visita a los Morteros",
    description: "Descubrí las huellas de los pueblos originarios",
    icon: "history"
  },
  {
    id: 4,
    title: "Ascenso al Cerro El Capayán",
    description: "Aventura en las alturas con guía experto",
    icon: "peak"
  },
  {
    id: 5,
    title: "Ruinas de Pueblos Originarios",
    description: "Paseo histórico por las antiguas civilizaciones",
    icon: "ruins"
  },
  {
    id: 6,
    title: "Cabalgata por Senderos de Montaña",
    description: "Recorrido a caballo por paisajes únicos",
    icon: "horse"
  },
  {
    id: 7,
    title: "Visita al Río",
    description: "Refrescate en las aguas naturales de la zona",
    icon: "water"
  },
  {
    id: 8,
    title: "Aula Viva - Artesanías",
    description: "Recolección de arcilla y creación de artesanías",
    icon: "craft"
  },
  {
    id: 9,
    title: "Charlas sobre Pueblos Originarios",
    description: "Conocé hábitos, vida y costumbres de las culturas ancestrales",
    icon: "culture"
  }
];

export const pricing = {
  cabin: {
    price: 25000,
    unit: "por persona",
    description: "Incluye todas las comodidades de la cabaña"
  },
  camping: {
    price: 10000,
    unit: "por carpa",
    description: "Acceso a servicios del camping"
  }
};

export const contact = {
  address: "Capayán 1234, Las Palmas",
  city: "San Fernando del Valle de Catamarca",
  phone: "+5490500433834",
  whatsapp: "+5490500433834",
  mapUrl: "https://maps.app.goo.gl/hrb6TPGDswDv9stH6",
  coordinates: {
    lat: -28.3447,
    lng: -65.6059
  }
};

export const gallery = [
  {
    id: 1,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/97smdx6m_Screenshot_2026-02-18-11-27-17-007_com.google.android.apps.maps.jpg",
    alt: "Entrada Reserva Los Capayanes",
    category: "reserva"
  },
  {
    id: 2,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/3wojecyn_Screenshot_2026-02-18-11-27-20-012_com.google.android.apps.maps.jpg",
    alt: "Baño privado con ducha",
    category: "cabaña"
  },
  {
    id: 3,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/ntq6pxir_Screenshot_2026-02-18-11-27-23-786_com.google.android.apps.maps.jpg",
    alt: "Actividades en la montaña",
    category: "actividades"
  },
  {
    id: 4,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/nnqiqj7e_Screenshot_2026-02-18-11-27-28-478_com.google.android.apps.maps.jpg",
    alt: "Las Palmas Catamarca",
    category: "ubicacion"
  },
  {
    id: 5,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/x6xmnb07_Screenshot_2026-02-18-11-27-31-702_com.google.android.apps.maps.jpg",
    alt: "Naturaleza y campo verde",
    category: "naturaleza"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1763743259620-d63b1aa32f2e",
    alt: "Cabaña rústica en el bosque",
    category: "cabaña"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1660433012125-0f2f948fff97",
    alt: "Cabaña entre árboles",
    category: "cabaña"
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/5644485/pexels-photo-5644485.jpeg",
    alt: "Cabaña con luz natural",
    category: "cabaña"
  }
];

export const heroImages = {
  main: "https://images.unsplash.com/photo-1511497584788-876760111969",
  secondary: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6"
};
