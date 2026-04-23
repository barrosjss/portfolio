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
  // ── TOP PROJECTS (Flagship projects) ───────────────────────────────────

  {
    name: "Zali – Infraestructura Fintech & Crédito",
    client: "Zali Group",
    top: true,
    screenshot: "zali.png",
    description:
      "Plataforma SaaS de marca blanca para digitalizar la operación crediticia. Permite orquestar solicitudes masivas, scoring de riesgo, desembolsos y cobranzas mediante una infraestructura modular de alto rendimiento, eliminando la complejidad técnica de desarrollar tecnología financiera propia.",
    challenge:
      "Centralizar la operación de un gran grupo empresarial bajo una arquitectura fintech escalable. Desarrollamos un core de marca blanca para la gestión integral de cartera en tiempo real, garantizando seguridad y una experiencia optimizada para la administración de capital.",
    tags: [
      "FinTech",
      "White Label",
      "Credit Operations",
      "SaS Architecture",
      "Financial Systems",
    ],
    color: "#0072CE",
    meta: {
      Tipo: "FinTech / SaaS",
      Modelo: "White Label",
      Alcance: "Corporativo",
    },
    url: "https://zali.com.co/",
  },

  {
    name: "Domino's Pizza",
    client: "Domino's",
    color: "#E31837",
    screenshot: "dominos.png",
    description:
      "Ingeniería de software para la aplicación líder mundial de pizza delivery. Trabajo centrado en optimizar la experiencia de pedido y el seguimiento dinámico coordinando millones de entregas globales con precisión mediante geolocalización avanzada.",
    challenge:
      "Implementar funcionalidades de alto rendimiento como iOS Live Activities y sistemas de rastreo GPS en tiempo real. El reto fue asegurar la escalabilidad total frente a los picos masivos de demanda internacional de la plataforma.",
    meta: {
      Tipo: "Retail / FoodTech",
      Duración: "2024",
      Plataforma: "iOS / Live Activities",
      Alcance: "Global / Remote",
    },
    url: "https://www.dominos.com/",
  },

  {
    name: "Overwatch League – The Official Mobile App",
    client: "Activision Blizzard / Overwatch League",
    top: true,
    color: "#F99E1A",
    clientLogo: "overwatch.png",
    screenshot: "overwatch-league.webp",
    description:
      "Ecosistema móvil oficial para seguir la liga de esports de Activision Blizzard. La aplicación permite a fans globales acceder a transmisiones 4K en vivo, alertas instantáneas de partidas, estadísticas en tiempo real y perfiles detallados de todos los equipos profesionales.",
    challenge:
      "Desarrollar una arquitectura capaz de gestionar flujos masivos de datos sincrónicos con la acción en vivo. Integramos sistemas de video on-demand y notificaciones push personalizadas bajo los estrictos estándares de calidad técnica de Blizzard.",
    meta: {
      Tipo: "Esports Ecosystem",
      Duración: "2019 - 2020",
      Partner: "Ideaware",
      Cliente: "Activision Blizzard",
    },
    note: "Debido a acuerdos de confidencialidad (NDA), no se pueden compartir detalles técnicos internos adicionales ni capturas del proceso de desarrollo realizado para Blizzard.",
    url: "https://overwatchleague.com/",
  },

  {
    name: "Disney Company",
    client: "The Walt Disney Company / Globant",
    top: true,
    color: "#0059B2",
    clientLogo: "icon-disney.png",
    screenshot: "disney.avif",
    description:
      "Desarrollo de aplicaciones móviles para The Walt Disney Company. Trabajo enfocado en potenciar la experiencia digital de su ecosistema de entretenimiento, llevando la magia de Disney a dispositivos iOS con los más altos estándares de calidad y fluidez.",
    challenge:
      "Escalar una arquitectura móvil robusta para millones de usuarios globales. Implementamos interfaces altamente interactivas y animaciones sofisticadas, integrando servicios críticos en tiempo real bajo la dirección técnica de Globant y Disney.",
    meta: {
      Tipo: "B2C / Entertainment",
      Duración: "2015 - 2016",
      Plataforma: "iOS (iPhone)",
      Cliente: "Globant",
    },
    note: "Debido a acuerdos de confidencialidad (NDA), no se pueden compartir detalles técnicos ni capturas adicionales de este proyecto.",
    url: "https://www.disney.com/",
  },

  // ── OTROS PROYECTOS (Ordenados por impacto y relevancia) ────────────────

  {
    name: "Hola FOMO – EventTech",
    client: "Hola FOMO",
    clientLogo: "fomo-ico.png",
    screenshot: "fomo.png",
    description:
      "Plataforma EventTech liderada por nosotros desde la co-fundación y el roadmap de producto. FOMO es el motor digital del descubrimiento de eventos, ofreciendo una experiencia disruptiva gracias a una infraestructura robusta y de alto rendimiento.",
    challenge:
      "Evolucionar el producto desde cero, integrando frontend, backend e infraestructura escalable. Reconocida en 2026 como startup influyente, el mayor reto ha sido la gestión estratégica del roadmap para asegurar un crecimiento acelerado y validación técnica.",
    tags: [
      "EventTech",
      "Product Engineering",
      "Software Architecture",
      "SaaS",
      "Co-Founder",
    ],
    color: "#FF4D4D",
    meta: {
      Tipo: "SaaS / EventTech",
      Roles: "Co-Founders",
      Plataforma: "Web Ecosystem",
      Mérito: "Startup Influyente 2026",
    },
    url: "https://holafomo.com/es",
  },

  {
    name: "InnoLogix – Plataforma Inmersiva de Realidad Virtual",
    client: "Universidad Libre / InnoGrowth",
    screenshot: "innologix.webp",
    description:
      "Ecosistema inmersivo desarrollado con la Universidad Libre para la enseñanza de logística industrial. Permite vivir experiencias de bodega mediante simulaciones gamificadas en entornos VR/AR, preparando a estudiantes para escenarios operativos reales.",
    challenge:
      "Digitalizar procesos industriales complejos con storytelling técnico y visuales de alta fidelidad. Desarrollamos simulaciones realistas de maquinaria y flujos logísticos, permitiendo un entrenamiento libre de riesgos con evaluación automatizada de competencias.",
    tags: [
      "Virtual Reality",
      "Industry 4.0",
      "Augmented Reality",
      "EdTech",
      "Logistics",
    ],
    color: "#00E5FF",
    meta: {
      Tipo: "EdTech / Industrial",
      Cliente: "Univ. Libre",
      Sede: "Colombia",
      Duración: "2025 - Presente",
    },
    url: "https://youtu.be/dxfvEPRck0I?si=5JmACepLax8lbYJM",
  },

  {
    name: "Expedia",
    client: "Expedia Group",
    color: "#FFC107",
    screenshot: "expedia.png",
    description:
      "Desarrollo de la aplicación insignia Expedia.com para potenciar la experiencia de reserva de millones de usuarios. La plataforma permite contratar hoteles, vuelos y paquetes vacacionales sin fricciones mediante una navegación nativa ultra profesional.",
    challenge:
      "Optimizar el flujo de reserva y la visualización de datos complejos en tiempo real. Desarrollamos funcionalidades avanzadas en Swift/SwiftUI que garantizan una experiencia rápida e intuitiva, integrando geolocalización y notificaciones críticas.",
    meta: {
      Tipo: "B2C / Booking Platform",
      Duración: "2024 - 2026",
      Plataforma: "iOS (Swift / SwiftUI)",
      Alcance: "Global",
    },
    url: "https://www.expedia.com/",
  },

  {
    name: "Aditum – Plataforma de Gestión ISP & Impacto Social",
    client: "Aditum Latinoamérica",
    screenshot: "aditum.png",
    description:
      "Ecosistema digital diseñado para revolucionar la operatividad de los ISP en zonas rurales de Latinoamérica. Centraliza la gestión de usuarios y la facturación automatizada, llevando conectividad a comunidades aisladas bajo un modelo de prepago justo y sostenible.",
    challenge:
      "Sincronizar módulos críticos de operación en un backend robusto con uptime absoluto. Integramos una potente automatización vía WhatsApp para gestionar cobros y reconexiones inmediatas, convirtiéndolo en un motor de transformación social.",
    tags: [
      "ISP Management",
      "FinTech",
      "Social Impact",
      "WhatsApp Automation",
      "B2B SaaS",
    ],
    color: "#2979FF",
    meta: {
      Tipo: "B2B / Impact Tech",
      Mérito: "Microsoft Partner",
      Alcance: "Rural LATAM",
      Plataforma: "Web Ecosystem",
    },
    url: "https://www.aditumla.org/",
  },

  {
    name: "Lobby",
    client: "Lobby PMS",
    color: "#A0D9EF",
    screenshot: "lobby.png",
    description:
      "Plataforma integral All-in-One para la gestión hotelera diseñada para simplificar operaciones y aumentar reservas. Lobby centraliza el control de inventario, check-in online y facturación, permitiendo a hoteles escalar mediante tecnología intuitiva.",
    challenge:
      "Consolidar las necesidades operativas de la hospitalidad en una interfaz única. Optimizamos la sincronización en tiempo real con OTAs globales y desarrollamos un motor de reservas directas que elimina comisiones y maximiza la rentabilidad.",
    meta: {
      Tipo: "B2B / Hospitality SaaS",
      Duración: "2024 - 2025",
      Plataforma: "Web Ecosystem",
      Alcance: "Latinoamérica",
    },
    note: "Debido a acuerdos de confidencialidad (NDA), no se pueden compartir detalles técnicos ni capturas adicionales de este desarrollo.",
    url: "https://lobbypms.com/",
  },

  {
    name: "CloudTask",
    client: "CloudTask",
    color: "#3574e3",
    screenshot: "cloudtask.png",
    description:
      "Plataforma líder para la contratación de talento SaaS remoto en Latinoamérica. CloudTask conecta empresas globales con profesionales pre-verificados, optimizando el ROI mediante talento AI-enabled con alineación horaria perfecta.",
    challenge:
      "Escalar equipos de Go-To-Market (GTM) eliminando barreras de contratación internacional. Creamos un ecosistema que garantiza el despliegue de talento bilingüe especializado en herramientas críticas (HubSpot, Salesforce) en tiempo récord.",
    meta: {
      Tipo: "B2B / SaaS Ecosystem",
      Duración: "2022 - 2025",
      Plataforma: "Web Ecosystem",
      Alcance: "Global",
    },
    url: "https://cloudtask.com/",
  },

  {
    name: "CloudX",
    client: "Bergen Logistics / CloudX Systems",
    color: "#005EB8",
    screenshot: "cloudx.png",
    description:
      "Extensión móvil estratégica para CloudX Systems, un ecosistema SaaS líder en WMS. La aplicación permite la supervisión operativa total en bodegas de alto volumen, desde el control de inventario hasta la consolidación de carga en tiempo real.",
    challenge:
      "Extender la potencia de un WMS omnicanal a una experiencia móvil ágil. Optimizamos procesos críticos como escaneo de bins y gestión de supervisores para Bergen Logistics, garantizando eficiencia en centros de cumplimiento Retail y E-commerce.",
    meta: {
      Tipo: "B2B / Logistics SaaS",
      Duración: "2023 - 2024",
      Plataforma: "Android / iOS",
      Cliente: "Bergen Logistics",
    },
    note: "Debido a acuerdos de confidencialidad (NDA), no se pueden compartir detalles técnicos ni capturas adicionales de este proyecto.",
    url: "https://cloudxsystems.net/",
  },

  {
    name: "Ganadero Inteligente",
    client: "GAIN - Ganadero Inteligente",
    screenshot: "ganadero.png",
    description:
      "Herramienta líder para la transición de la ganadería extensiva a la regenerativa. La plataforma permite revitalizar el suelo y capturar carbono mediante informes detallados, control de salud del ganado y alertas estratégicas orientadas a la sostenibilidad.",
    challenge:
      "Digitalizar la complejidad del pastoreo rotacional y certificar la captura de carbono. Integramos tecnologías de monitoreo de emisiones y agroforestería, permitiendo a los finqueros proteger el Amazonas mientras acceden a nuevos mercados verdes.",
    tags: [
      "AgTech",
      "ESG / Carbon Credits",
      "Sustainability",
      "Mobile App",
      "Amazon Conservation",
    ],
    color: "#6DBE45",
    meta: {
      Tipo: "AgTech / ESG",
      Duración: "2022 - 2024",
      Plataforma: "Android / Web Cloud",
      Impacto: "Amazonía",
    },
    url: "https://www.ganaderointeligente.com/",
  },

  {
    name: "BetFanatics",
    client: "X-Team / Fanatics International",
    clientLogo: "fanatic-icon.png",
    color: "#D30F25",
    screenshot: "fanatics.webp",
    description:
      "Ingeniería de software para BetFanatics, la división de apuestas y tecnología de Fanatics. Trabajo enfocado en expandir el ecosistema del líder mundial en merchandise deportivo hacia soluciones digitales de alto rendimiento en 180 países.",
    challenge:
      "Integrar la infraestructura tecnológica de Kitbag con las soluciones masivas de Fanatics U.S. El reto fue desarrollar aplicaciones escalables para clubes de la Premier League, La Liga y las ligas mayores de EE.UU. en entornos multiidioma.",
    meta: {
      Tipo: "Mobile Engineering",
      Duración: "2022 - 2023",
      Plataforma: "iOS / Multiplatform (KMM)",
      Alcance: "Reino Unido / Global",
    },
    url: "https://www.fanatics-intl.com/",
  },

  {
    name: "HelloFresh",
    client: "HelloFresh SE",
    clientLogo: "hellofresh-icon.jpeg",
    color: "#4d9d2a",
    screenshot: "hellofresh.jpg",
    description:
      "Ingeniería de software senior para HelloFresh SE, el mayor proveedor mundial de kits de comida por suscripción. Trabajo realizado desde la sede global en Berlín, enfocado en potenciar la experiencia móvil de millones de usuarios en mercados de EE.UU., Europa y Australia.",
    challenge:
      "Escalar y modernizar la plataforma iOS durante una fase de hiper-crecimiento internacional tras su salida a bolsa. El desafío fue liderar mejoras en la gestión de suscripciones y la visualización de recetas complejas, asegurando un rendimiento fluido bajo demanda masiva global.",
    meta: {
      Tipo: "B2C / FoodTech",
      Duración: "mar. 2018 - dic. 2018",
      Plataforma: "iOS (Swift / Obj-C)",
      Sede: "Berlín, Alemania",
    },
    url: "https://www.hellofresh.es/",
  },

  {
    name: "NOA – Tu Asistente Virtual en Salud",
    client: "NOA",
    screenshot: "noa.png",
    description:
      "Plataforma integral diseñada para facilitar la gestión diaria de los profesionales de la salud en Colombia. NOA actúa como un asistente virtual que automatiza el registro de consultas y la facturación, eliminando la dependencia de procesos manuales ineficientes y asegurando el bienestar financiero y operativo del médico.",
    challenge:
      "Digitalizar y centralizar la gestión de especialistas médicos para evitar la pérdida de ingresos por olvidos en cobranza o errores contables. El reto principal fue la sistematización del flujo de facturación y el registro clínico en una app intuitiva que reduzca drásticamente los errores del equipo financiero y libere tiempo valioso para la atención al paciente.",
    tags: [
      "HealthTech",
      "FinTech",
      "Process Automation",
      "UX/UI Design",
      "Mobile App",
    ],
    color: "#54B3FF",
    meta: {
      Tipo: "B2C / HealthTech",
      Duración: "Mar. 2021 – Mar. 2023",
      Alcance: "Colombia",
      Plataforma: "App / Mobile",
    },
    url: "https://www.behance.net/gallery/201534717/NOA-App-V1",
  },

  {
    name: "PetLuv – Pet Lovers Social Network",
    client: "PetLuv",
    screenshot: "Petluv.png",
    description:
      "Red social diseñada para unir a la comunidad de amantes de las mascotas. La plataforma permite encontrar otros dueños, construir comunidades por intereses compartidos y acceder a una amplia gama de actividades y servicios ideales para el bienestar animal.",
    challenge:
      "Crear un entorno online que facilite conexiones en el mundo real y acceso a servicios especializados. El reto fue motivar a una comunidad activa dispuesta a contribuir, estrechando el vínculo entre los dueños y sus compañeros peludos.",
    tags: [
      "Social Network",
      "PetTech",
      "Mobile App",
      "React Native",
      "UX/UI Design",
    ],
    color: "#FF1744",
    meta: {
      Tipo: "B2C / Social Network",
      Duración: "Jul. 2020 - Feb. 2022",
      Alcance: "Colombia",
      Plataforma: "iOS / Android",
    },
    url: "https://www.behance.net/gallery/201453819/PetLuv-App-V1",
  },

  {
    name: "Rabbit – Logistics & Delivery Ecosystem",
    client: "Rabbit Delivery",
    screenshot: "rabbit.png",
    description:
      "Plataforma logística inteligente para optimizar la mensajería y procesos operativos de pymes. Centraliza el envío de documentos, la trazabilidad de paquetes y la coordinación de trámites, proporcionando herramientas de alto nivel para el control de última milla.",
    challenge:
      "Desarrollar una interfaz robusta capaz de gestionar múltiples puntos de entrega en tiempo real. Creamos un flujo simplificado para la solicitud de servicios y seguimiento de documentos críticos, logrando que procesos complejos se resuelvan con pocos clics.",
    tags: [
      "Logística",
      "UX/UI Design",
      "Last-Mile Delivery",
      "B2B SaaS",
      "Mobile App",
    ],
    color: "#2962FF",
    meta: {
      Tipo: "B2B / Logistics Tech",
      Duración: "Sep. 2021 - Ene. 2022",
      Alcance: "Colombia",
      Plataforma: "iOS / Android",
    },
    url: "https://www.behance.net/gallery/132067379/Rabbit-UXUI-App-Dev",
  },

  {
    name: "Bikee – Smart Mobility Ecosystem",
    client: "Bikee",
    screenshot: "bikee.png",
    description:
      "Ecosistema de movilidad inteligente enfocado en hacer el alquiler de bicicletas más eficiente. La aplicación permite rentar vehículos eléctricos y convencionales de forma sostenible, fomentando el transporte limpio y accesible dentro de las ciudades.",
    challenge:
      "Crear una plataforma que centralice la ubicación, precios y tipos de bicicletas disponibles. El reto fue facilitar el proceso de pago y generar reportes administrativos detallados, asegurando una experiencia de usuario fluida y amigable.",
    tags: [
      "Smart Mobility",
      "UX/UI Design",
      "Mobile App",
      "React Native",
      "Maps Integration",
    ],
    color: "#D500F9",
    meta: {
      Tipo: "B2C / Smart Mobility",
      Duración: "Sep. 2021 - Ene. 2022",
      Alcance: "Colombia",
      Plataforma: "iOS / Android",
    },
    url: "https://www.behance.net/gallery/140620909/Bikee-UXUI-App-Dev",
  },
];
