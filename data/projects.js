/**
 * EDITA ESTE ARCHIVO para agregar/quitar proyectos.
 * Cada objeto = 1 slide de proyecto.
 *
 * Campos:
 *   name           → Título del proyecto
 *   client         → Nombre del cliente
 *   clientLogo     → Archivo en assets/clients/  (ej: "petluv.png")
 *   screenshot     → Archivo en assets/projects/ (ej: "petluv.png") — puede ser un array ["a.png","b.png"]
 *   description    → Párrafo corto qué es el producto
 *   challenge      → Párrafo corto el desafío
 *   tags           → Array de tecnologías/categorías
 *   meta           → Objeto con hasta 4 kv (Tipo, Duración, Plataforma, País…)
 */
window.PROJECTS = [
  // ── TOP PROJECTS (Ordenados por fecha descendente) ───────────────────────

  {
    name: "Expedia",
    client: "Expedia Group",
    top: true,
    color: "#FFC107",
    screenshot: "expedia.png",
    description: "Desarrollo de la aplicación insignia Expedia.com, el marketplace de viajes líder mundial. Trabajo centrado en potenciar la experiencia móvil de millones de usuarios, permitiendo la reserva sin fricciones de hoteles, vuelos y paquetes vacacionales en una sola plataforma nativa.",
    challenge: "Optimizar el flujo de reserva y la visualización de datos complejos en tiempo real. El reto fue desarrollar funcionalidades avanzadas en Swift/SwiftUI que garantizan una navegación ultra profesional y rápida, integrando servicios de geolocalización y notificaciones críticas para el viajero.",
    meta: { "Tipo": "B2C / Booking Platform", "Duración": "2024 - 2026", "Plataforma": "iOS (Swift / SwiftUI)", "Alcance": "Global" },
    url: "https://www.expedia.com/",
  },

  {
    name: "Lobby",
    client: "Lobby PMS",
    top: true,
    color: "#A0D9EF",
    screenshot: "lobby.png",
    description: "Plataforma integral All-in-One para la gestión hotelera diseñada para simplificar operaciones y aumentar reservas. Lobby centraliza el control de inventario, check-in online y la facturación, permitiendo a hoteles y hostales escalar su negocio mediante tecnología intuitiva.",
    challenge: "Consolidar las necesidades operativas de la hospitalidad moderna en una interfaz única. El reto fue optimizar la sincronización en tiempo real con OTAs globales y desarrollar un motor de reservas directas que elimine comisiones de terceros y maximice la rentabilidad.",
    meta: { "Tipo": "B2B / Hospitality SaaS", "Duración": "2024 - 2025", "Plataforma": "Web / Multi-device", "Alcance": "Latinoamérica" },
    url: "https://lobbypms.com/",
  },

  {
    name: "CloudTask",
    client: "CloudTask",
    top: true,
    color: "#3574e3",
    screenshot: "cloudtask.png",
    description: "Plataforma líder para la contratación de talento SaaS remoto en Latinoamérica. CloudTask conecta empresas globales con profesionales pre-verificados en ventas, marketing y soporte, optimizando el ROI mediante talento AI-enabled con alineación horaria perfecta.",
    challenge: "Escalar equipos de Go-To-Market (GTM) eliminando barreras de contratación internacional. El reto fue crear un ecosistema que garantiza el despliegue de talento bilingüe especializado en herramientas críticas (HubSpot, Salesforce) en menos de 48 horas.",
    meta: { "Tipo": "B2B / SaaS Ecosystem", "Duración": "2022 - 2025", "Plataforma": "Web / Recruitment Tech", "Alcance": "Global" },
    url: "https://cloudtask.com/",
  },

  {
    name: "Domino's Pizza",
    client: "Domino's",
    top: true,
    color: "#E31837",
    screenshot: "dominos.png",
    description: "Ingeniería de software para la aplicación líder mundial de pizza delivery. Trabajo centrado en optimizar la experiencia de pedido y seguimiento dinámico (Domino's Tracker®), coordinando millones de entregas globales con precisión mediante geolocalización avanzada.",
    challenge: "Implementar funcionalidades de alto rendimiento como iOS Live Activities para el seguimiento desde la pantalla de bloqueo y optimizar sistemas de rastreo GPS en tiempo real. El reto fue garantizar la escalabilidad absoluta frente a picos masivos de demanda internacional.",
    meta: { "Tipo": "Retail / FoodTech", "Duración": "Mar. 2024 - Oct. 2024", "Plataforma": "iOS / Live Activities", "Alcance": "Global / Remote" },
    url: "https://www.dominos.com/",
  },

  {
    name: "CloudX",
    client: "Bergen Logistics / CloudX Systems",
    top: true,
    color: "#005EB8",
    screenshot: "cloudx.png",
    description: "Extensión móvil estratégica para CloudX Systems, un ecosistema SaaS líder en la gestión de almacenes (WMS). La aplicación permite la supervisión operativa total en bodegas de alto volumen, desde el control de inventario hasta la consolidación de carga en tiempo real.",
    challenge: "Extender la potencia de un WMS omnicanal a una experiencia móvil ágil. El reto fue optimizar procesos críticos como el escaneo de bins, conteo cíclico y gestión de supervisores para Bergen Logistics, garantizando eficiencia en centros de cumplimiento Retail y E-commerce.",
    meta: { "Tipo": "B2B / Logistics SaaS", "Duración": "2023 - 2024", "Plataforma": "Android / iOS", "Cliente": "Bergen Logistics" },
    note: "Debido a acuerdos de confidencialidad (NDA), no se pueden compartir detalles técnicos ni capturas adicionales de este proyecto.",
    url: "https://cloudxsystems.net/",
  },

  {
    name: "Ganadero Inteligente",
    client: "GAIN - Ganadero Inteligente",
    screenshot: "ganadero.png",
    description: "Ganadero Inteligente es la herramienta líder para la transición de la ganadería extensiva a la regenerativa. La plataforma permite a los productores implementar prácticas que revitalizan el suelo, capturan carbono y aseguran la rentabilidad mediante informes detallados, control de salud del ganado y alertas estratégicas en paz con el medio ambiente.",
    challenge: "Digitalizar la complejidad del pastoreo rotacional libre, la revegetación y el uso de biochar. El reto fue integrar tecnologías de monitoreo de emisiones y agroforestería para certificar la captura de carbono recalcitrante, permitiendo a los finqueros proteger el Amazonas mientras acceden a mercados de créditos de carbono.",
    tags: ["AgTech", "ESG / Carbon Credits", "Sustainability", "Mobile App", "Amazon Conservation"],
    color: "#6DBE45",
    top: true,
    meta: { "Tipo": "AgTech / ESG", "Duración": "2022 - 2024", "Plataforma": "Android / Web Cloud", "Impacto": "Amazonía" },
    url: "https://www.ganaderointeligente.com/",
  },



  {
    name: "BetFanatics",
    client: "X-Team / Fanatics International",
    top: true,
    color: "#D30F25",
    screenshot: "fanatics.webp",
    description: "Ingeniería de software para BetFanatics, la división de apuestas y tecnología de Fanatics. Trabajo enfocado en expandir el ecosistema del líder mundial en merchandise deportivo hacia soluciones digitales de alto rendimiento en 180 países.",
    challenge: "Integrar la infraestructura tecnológica de Kitbag con las soluciones masivas de Fanatics U.S. El reto fue desarrollar aplicaciones escalables para clubes de la Premier League, La Liga y las ligas mayores de EE.UU. en entornos multiidioma.",
    meta: { "Tipo": "Mobile Engineering", "Duración": "Oct. 2022 - Ene. 2023", "Plataforma": "iOS / Multiplatform (KMM)", "Alcance": "Reino Unido / Global" },
    url: "https://www.fanatics-intl.com/",
  },

  {
    name: "Disney Company",
    client: "The Walt Disney Company / Globant",
    top: true,
    color: "#0059B2",
    clientLogo: "icon-disney.png",
    screenshot: "disney.avif",
    description: "Desarrollo integral de aplicaciones móviles para iPhone para The Walt Disney Company. Trabajo enfocado en potenciar la experiencia digital del ecosistema de entretenimiento líder mundial, llevando la magia de Disney a dispositivos móviles con altos estándares de calidad.",
    challenge: "Escalar una arquitectura móvil robusta y fluida para millones de usuarios globales. El reto fue implementar interfaces altamente interactivas y animaciones sofisticadas, integrando servicios críticos en tiempo real bajo la meticulosa dirección técnica de Globant y Disney.",
    meta: { "Tipo": "B2C / Entertainment", "Duración": "2015 - 2016", "Plataforma": "iOS (iPhone)", "Cliente": "Globant" },
    note: "Debido a acuerdos de confidencialidad (NDA), no se pueden compartir detalles técnicos ni capturas adicionales de este proyecto.",
    url: "https://www.disney.com/",
  },

  {
    name: "HelloFresh",
    client: "HelloFresh SE",
    top: true,
    color: "#4d9d2a",
    screenshot: "hellofresh.jpg",
    description: "Ingeniería de software senior para HelloFresh SE, el mayor proveedor mundial de kits de comida por suscripción. Trabajo realizado desde la sede global en Berlín, enfocado en potenciar la experiencia móvil de millones de usuarios en mercados de EE.UU., Europa y Australia.",
    challenge: "Escalar y modernizar la plataforma iOS durante una fase de hiper-crecimiento internacional tras su salida a bolsa. El desafío fue liderar mejoras en la gestión de suscripciones y la visualización de recetas complejas, asegurando un rendimiento fluido bajo demanda masiva global.",
    meta: { "Tipo": "B2C / FoodTech", "Duración": "Mar. 2018 - Dic. 2018", "Plataforma": "iOS (Swift / Obj-C)", "Sede": "Berlín, Alemania" },
    url: "https://www.hellofresh.es/",
  },

  {
    name: "Overwatch League",
    client: "Activision Blizzard / Overwatch League",
    top: true,
    color: "#F99E1A",
    description: "Ecosistema digital para la liga profesional de esports.",
    challenge: "Desarrollo de interfaces dinámicas y sistemas de datos en tiempo real para fans.",
    meta: { "Tipo": "Esports", "Duración": "Digital Strategy", "Plataforma": "Web" },
    url: "#",
  },

  {
    name: "Samsung",
    client: "Samsung Electronics",
    top: true,
    color: "#1428A0",
    description: "Gigante coreano de electrónica y software.",
    challenge: "Desarrollo de aplicaciones y ecosistemas conectados para dispositivos inteligentes.",
    meta: { "Tipo": "Consumer Electronics", "Duración": "Consultoría", "Plataforma": "Cross-platform" },
    url: "#",
  },

  {
    name: "Escalable",
    client: "Escalable",
    top: true,
    color: "#607D8B",
    description: "Agencia de crecimiento y desarrollo estratégico.",
    challenge: "Liderazgo técnico en la creación de productos digitales preparados para el crecimiento masivo.",
    meta: { "Tipo": "Agencia / Consultoría", "Duración": "Liderazgo", "Plataforma": "Full-stack" },
    url: "#",
  },

  // ── OTROS PROYECTOS (Ordenados por fecha descendente) ─────────────────────

  {
    name: "InnoLogix VR",
    client: "InnoGrowth",
    clientLogo: "innologix.png",
    screenshot: "innologix.png",
    description: "Simulador inmersivo en realidad virtual para logística y operaciones industriales.",
    challenge: "Diseñar experiencias realistas de bodegas, maquinaria y procesos logísticos para formación académica y empresarial.",
    tags: ["VR", "AR", "Educación", "Simulación", "Innovación"],
    color: "#00E5FF",
    meta: { "Tipo": "EdTech / B2B", "Duración": "2025 - Actualidad", "Plataforma": "VR", "País": "Colombia" },
    url: "#",
  },

  {
    name: "FOMO",
    client: "Hola FOMO",
    clientLogo: "fomo.png",
    screenshot: "fomo.png",
    description: "Plataforma EventTech para gestión, distribución y descubrimiento de eventos.",
    challenge: "Construir una solución escalable para organizadores y asistentes, centralizando operaciones y experiencia digital.",
    tags: ["Startup", "SaaS", "EventTech", "UX/UI", "Producto"],
    color: "#FF4D4D",
    meta: { "Tipo": "B2B / B2C", "Duración": "2024 - Actualidad", "Plataforma": "Web", "País": "Colombia" },
    url: "https://coderlabs.com.co",
  },

  {
    name: "CIREXCO",
    client: "CIREXCO",
    clientLogo: "cirexco.png",
    screenshot: "cirexco.png",
    description: "Plataforma digital de test certificados para ventas y liderazgo.",
    challenge: "Migrar evaluaciones presenciales a una solución online con pagos y reportes automáticos.",
    tags: ["SaaS", "Tests", "Pagos", "Reportes", "Web"],
    color: "#00C853",
    meta: { "Tipo": "B2B", "Duración": "2025", "Plataforma": "Web", "País": "Colombia" },
    url: "#",
  },

  {
    name: "Aditum",
    client: "Aditum",
    clientLogo: "aditum.png",
    screenshot: "aditum.png",
    description: "ERP para proveedores de internet con facturación, clientes y panel analítico.",
    challenge: "Centralizar operaciones ISP e integrar automatización por WhatsApp para cobranza y soporte.",
    tags: ["ERP", "Automation", "Analytics", "WhatsApp", "B2B"],
    color: "#2979FF",
    meta: { "Tipo": "B2B", "Duración": "2025", "Plataforma": "Web", "País": "Colombia" },
    url: "#",
  },

  {
    name: "Cumbres Medellín",
    client: "Colegio Cumbres Medellín",
    clientLogo: "cumbres.png",
    screenshot: "cumbres.png",
    description: "Rediseño web institucional con enfoque moderno e internacional.",
    challenge: "Actualizar imagen digital e integrar SEO, multiidioma y gestión interna de contenidos.",
    tags: ["WordPress", "SEO", "UX/UI", "Web Design"],
    color: "#3D5AFE",
    meta: { "Tipo": "Institucional", "Duración": "2025", "Plataforma": "Web", "País": "Colombia" },
    url: "#",
  },

  {
    name: "CIE Barcelona",
    client: "CIE Barcelona",
    clientLogo: "cie.png",
    screenshot: "cie.png",
    description: "Diseño y desarrollo de ecosistema web para institución internacional.",
    challenge: "Construir presencia digital sólida y materiales visuales alineados a marca.",
    tags: ["WordPress", "Diseño Web", "Branding"],
    color: "#78909C",
    meta: { "Tipo": "Educación", "Duración": "Continuo", "Plataforma": "Web", "País": "España" },
    url: "#",
  },

  {
    name: "Naturchem",
    client: "Naturchem",
    clientLogo: "naturchem.png",
    screenshot: "naturchem.png",
    description: "Gestión creativa y estrategia digital para marca de insumos naturales.",
    challenge: "Fortalecer posicionamiento, engagement y ventas desde redes sociales.",
    tags: ["Marketing", "Branding", "Social Media"],
    color: "#76FF03",
    meta: { "Tipo": "B2C", "Duración": "Continuo", "Plataforma": "Digital", "País": "Colombia" },
    url: "#",
  },

  {
    name: "Komplit",
    client: "Komplit",
    clientLogo: "komplit.png",
    screenshot: "komplit.png",
    description: "E-commerce especializado en coleccionismo con seguimiento inteligente de colecciones.",
    challenge: "Detectar productos faltantes y conectar usuarios con vendedores dentro del marketplace.",
    tags: ["E-commerce", "Marketplace", "Automation", "UX/UI"],
    color: "#AA00FF",
    meta: { "Tipo": "B2C", "Duración": "2022 - 2024", "Plataforma": "Web", "País": "Colombia" },
    url: "#",
  },

  {
    name: "NOA",
    client: "NOA",
    clientLogo: "noa.png",
    screenshot: "noa.png",
    description: "Plataforma administrativa para especialistas médicos contratistas.",
    challenge: "Automatizar reportes, honorarios y procesos manuales del sector salud.",
    tags: ["HealthTech", "Automation", "Web", "Admin"],
    color: "#FF4081",
    meta: { "Tipo": "B2B", "Duración": "2021 - 2023", "Plataforma": "Web", "País": "Colombia" },
    url: "#",
  },

  {
    name: "Elika Luque",
    client: "Elika Luque",
    clientLogo: "elika.png",
    screenshot: "elika.png",
    description: "Sitio web estratégico orientado a conversión para marca personal médica.",
    challenge: "Transformar audiencia digital en pacientes mediante embudo de ventas.",
    tags: ["WordPress", "Funnels", "Branding", "UX/UI"],
    color: "#FFD600",
    meta: { "Tipo": "Personal Brand", "Duración": "2022", "Plataforma": "Web", "País": "Colombia" },
    url: "#",
  },

  {
    name: "PetLuv",
    client: "PetLuv",
    clientLogo: "petluv.png",
    screenshot: "petluv.png",
    description: "Comunidad digital para amantes de mascotas, servicios y actividades.",
    challenge: "Crear red social nicho con funcionalidades móviles escalables.",
    tags: ["React Native", "iOS", "Android", "Startup"],
    color: "#FF1744",
    meta: { "Tipo": "B2C", "Duración": "2020 - 2022", "Plataforma": "Mobile", "País": "Colombia" },
    url: "#",
  },

  {
    name: "Rabbit Delivery",
    client: "Rabbit",
    clientLogo: "rabbit.png",
    screenshot: "rabbit.png",
    description: "App logística para gestión externa de documentos y procesos.",
    challenge: "Facilitar seguimiento y operación logística para pymes.",
    tags: ["App", "Logística", "UX/UI"],
    color: "#2962FF",
    meta: { "Tipo": "B2B", "Duración": "2021", "Plataforma": "Mobile", "País": "Colombia" },
    url: "#",
  },

  {
    name: "Bikee",
    client: "Bikee",
    clientLogo: "bikee.png",
    screenshot: "bikee.png",
    description: "Aplicación para alquiler de bicicletas eléctricas y convencionales.",
    challenge: "Crear experiencia simple con mapas, pagos y panel administrativo.",
    tags: ["Mobility", "Payments", "Maps", "App"],
    color: "#D500F9",
    meta: { "Tipo": "B2C", "Duración": "2021", "Plataforma": "Mobile", "País": "Colombia" },
    url: "#",
  }
];
