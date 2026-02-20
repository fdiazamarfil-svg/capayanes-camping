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
  phone: "+5493834050043",
  whatsapp: "+5493834050043",
  mapUrl: "https://maps.app.goo.gl/hrb6TPGDswDv9stH6",
  coordinates: {
    lat: -28.3447,
    lng: -65.6059
  }
};

export const gallery = [
  {
    id: 1,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/80lngbcc_Screenshot_2026-02-18-11-27-44-451_com.google.android.apps.maps.jpg",
    alt: "Exterior de la cabaña de troncos rodeada de naturaleza",
    category: "cabaña"
  },
  {
    id: 2,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/3wojecyn_Screenshot_2026-02-18-11-27-20-012_com.google.android.apps.maps.jpg",
    alt: "Baño privado con ducha",
    category: "cabaña"
  },
  {
    id: 3,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/97smdx6m_Screenshot_2026-02-18-11-27-17-007_com.google.android.apps.maps.jpg",
    alt: "Entrada Reserva Los Capayanes",
    category: "reserva"
  },
  {
    id: 4,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/ntq6pxir_Screenshot_2026-02-18-11-27-23-786_com.google.android.apps.maps.jpg",
    alt: "Actividades en la montaña",
    category: "actividades"
  },
  {
    id: 5,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/nnqiqj7e_Screenshot_2026-02-18-11-27-28-478_com.google.android.apps.maps.jpg",
    alt: "Las Palmas Catamarca",
    category: "ubicacion"
  },
  {
    id: 6,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/x6xmnb07_Screenshot_2026-02-18-11-27-31-702_com.google.android.apps.maps.jpg",
    alt: "Naturaleza y campo verde",
    category: "naturaleza"
  },
  {
    id: 7,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/bl1biyp3_WhatsApp%20Image%202026-02-16%20at%2020.18.06.jpeg",
    alt: "Visitantes disfrutando del campo verde",
    category: "visitantes"
  },
  {
    id: 8,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/1kzksile_WhatsApp%20Image%202026-02-16%20at%2020.18.07.jpeg",
    alt: "Momento de relax en el camping",
    category: "visitantes"
  },
  {
    id: 9,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/s4w79y0q_WhatsApp%20Image%202026-02-17%20at%2021.18.02.jpeg",
    alt: "Asado y actividades en el camping",
    category: "actividades"
  },
  {
    id: 10,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/2j68vbhy_WhatsApp%20Image%202026-02-17%20at%2021.18.09.jpeg",
    alt: "Trekking guiado con vistas panorámicas",
    category: "actividades"
  },
  {
    id: 11,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/9is2cs8o_WhatsApp%20Image%202026-02-17%20at%2021.18.11.jpeg",
    alt: "Vista panorámica de las montañas de Los Capayanes",
    category: "naturaleza"
  },
  {
    id: 12,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/51u3g58o_WhatsApp%20Image%202026-02-18%20at%2019.31.35.jpeg",
    alt: "Interior de la cabaña con hogar a leña",
    category: "cabaña"
  },
  {
    id: 13,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/nvftbokb_WhatsApp%20Image%202026-02-18%20at%2019.31.36%20%281%29.jpeg",
    alt: "Horno de barro tradicional",
    category: "actividades"
  },
  {
    id: 14,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/tr7cv4m8_WhatsApp%20Image%202026-02-18%20at%2019.31.37%20%281%29.jpeg",
    alt: "Taller de artesanías con arcilla",
    category: "actividades"
  },
  {
    id: 15,
    url: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/bp43axmw_WhatsApp%20Image%202026-02-18%20at%2019.31.37.jpeg",
    alt: "Creación de artesanías tradicionales",
    category: "actividades"
  }
];

export const heroImages = {
  main: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/97smdx6m_Screenshot_2026-02-18-11-27-17-007_com.google.android.apps.maps.jpg",
  secondary: "https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/x6xmnb07_Screenshot_2026-02-18-11-27-31-702_com.google.android.apps.maps.jpg"
};

export const testimonials = [
  {
    id: 1,
    name: "María González",
    location: "Buenos Aires",
    rating: 5,
    date: "Noviembre 2025",
    text: "Una experiencia increíble. La cabaña es tal cual las fotos, muy rústica y acogedora. El dueño es súper amable y nos guió por todos los senderos. La cascada petrificada es impresionante.",
    avatar: "MG"
  },
  {
    id: 2,
    name: "Carlos Fernández",
    location: "Córdoba",
    rating: 5,
    date: "Octubre 2025",
    text: "Lugar ideal para desconectar. El camping tiene todo lo necesario y la naturaleza es espectacular. Las charlas sobre pueblos originarios nos fascinaron. Volveremos seguro.",
    avatar: "CF"
  },
  {
    id: 3,
    name: "Laura y Diego",
    location: "Rosario",
    rating: 5,
    date: "Septiembre 2025",
    text: "Pasamos un fin de semana maravilloso. La cabaña es muy confortable, el hogar a leña mantiene todo cálido. Los paseos guiados son excelentes, aprendimos mucho sobre la flora nativa.",
    avatar: "LD"
  },
  {
    id: 4,
    name: "Roberto Sánchez",
    location: "Mendoza",
    rating: 5,
    date: "Agosto 2025",
    text: "Hicimos la cabalgata por los senderos de montaña y fue una aventura única. El lugar transmite mucha paz y tranquilidad. La atención del dueño es excelente, muy servicial.",
    avatar: "RS"
  },
  {
    id: 5,
    name: "Ana Martínez",
    location: "Tucumán",
    rating: 5,
    date: "Julio 2025",
    text: "La reserva es hermosa y Los Capayanes es el lugar perfecto para explorarla. La cabaña tiene todas las comodidades. El WiFi funciona bien, aunque fuimos para desconectar jaja.",
    avatar: "AM"
  },
  {
    id: 6,
    name: "Familia Rodríguez",
    location: "Salta",
    rating: 5,
    date: "Junio 2025",
    text: "Vinimos con nuestros 3 hijos y fue perfecto. La cabaña tiene espacio para todos, los chicos disfrutaron muchísimo del camping y los paseos. Una experiencia educativa y divertida.",
    avatar: "FR"
  }
];
