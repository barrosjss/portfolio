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
    name: "Domino's Pizza",
    client: "Domino's",
    top: true,
    color: "#E31837",
    screenshot: "dominos.png",
    description: "Ingeniería de software para la aplicación líder mundial de pizza delivery. Trabajo centrado en optimizar la experiencia de pedido y seguimiento dinámico (Domino's Tracker®), coordinando millones de entregas globales con precisión mediante geolocalización avanzada.",
    challenge: "Implementar funcionalidades de alto rendimiento como iOS Live Activities para el seguimiento desde la pantalla de bloqueo y optimizar sistemas de rastreo GPS en tiempo real. El reto fue garantizar la escalabilidad absoluta frente a picos masivos de demanda internacional.",
    meta: { "Tipo": "Retail / FoodTech", "Duración": "2024", "Plataforma": "iOS / Live Activities", "Alcance": "Global / Remote" },
    url: "https://www.dominos.com/",
  },

  {
    name: "Overwatch League – The Official Mobile App",
    client: "Activision Blizzard / Overwatch League",
    top: true,
    color: "#F99E1A",
    clientLogo: "overwatch.png",
    screenshot: "overwatch-league.webp",
    description: "Ecosistema móvil oficial diseñado para seguir cada instante de la liga de esports más importante del mundo de Activision Blizzard. La aplicación permite a millones de fans globales acceder a transmisiones 4K en vivo, alertas instantáneas de partidas, estadísticas en tiempo real y perfiles detallados de todos los equipos profesionales de la liga.",
    challenge: "Desarrollar una arquitectura de alto rendimiento capaz de gestionar flujos masivos de datos sincrónicos con la acción en vivo. El reto principal fue la integración de sistemas de video on-demand y notificaciones push personalizadas ('Never Miss a Match') bajo los rigurosos estándares de calidad técnica e infraestructura de Blizzard e Ideaware.",
    meta: { "Tipo": "Esports Ecosystem", "Duración": "2019 - 2020", "Partner": "Ideaware", "Cliente": "Activision Blizzard" },
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
    description: "Desarrollo integral de aplicaciones móviles para iPhone para The Walt Disney Company. Trabajo enfocado en potenciar la experiencia digital del ecosistema de entretenimiento líder mundial, llevando la magia de Disney a dispositivos móviles con altos estándares de calidad.",
    challenge: "Escalar una arquitectura móvil robusta y fluida para millones de usuarios globales. El reto fue implementar interfaces altamente interactivas y animaciones sofisticadas, integrando servicios críticos en tiempo real bajo la meticulosa dirección técnica de Globant y Disney.",
    meta: { "Tipo": "B2C / Entertainment", "Duración": "2015 - 2016", "Plataforma": "iOS (iPhone)", "Cliente": "Globant" },
    note: "Debido a acuerdos de confidencialidad (NDA), no se pueden compartir detalles técnicos ni capturas adicionales de este proyecto.",
    url: "https://www.disney.com/",
  },

  // ── OTROS PROYECTOS (Ordenados por impacto y relevancia) ────────────────

  {
    name: "Hola FOMO – EventTech",
    client: "Hola FOMO",
    clientLogo: "fomo-ico.png",
    screenshot: "fomo.png",
    description: "Plataforma EventTech líder e innovadora diseñada para la gestión, distribución y descubrimiento de eventos a escala global. Como co-fundadores, lideramos la arquitectura tecnológica y el roadmap de producto, posicionando a FOMO como el motor digital del ecosistema de eventos mediante una experiencia de usuario disruptiva y una infraestructura robusta de alto rendimiento.",
    challenge: "Liderar la evolución técnica y de producto desde cero, integrando frontend, backend e infraestructura en una solución escalable de clase mundial. Reconocida en 2026 como la startup más influyente del ecosistema (Universidad del Norte), el mayor reto ha sido la gestión estratégica del roadmap y la validación técnica constante para asegurar un crecimiento acelerado.",
    tags: ["EventTech", "Product Engineering", "Software Architecture", "SaaS", "Co-Founder"],
    color: "#FF4D4D",
    meta: { "Tipo": "SaaS / EventTech", "Roles": "Co-Founders", "Plataforma": "Web Ecosystem", "Mérito": "Startup Influyente 2026" },
    url: "https://holafomo.com/es",
  },

  {
    name: "InnoLogix – Plataforma Inmersiva de Realidad Virtual",
    client: "Universidad Libre / InnoGrowth",
    screenshot: "innologix.webp",
    description: "Proyecto avanzado de formación disruptiva en colaboración con la Universidad Libre. Se trata de un ecosistema inmersivo diseñado para la enseñanza de logística y operaciones industriales, permitiendo a estudiantes y profesionales vivir experiencias reales de bodega y transporte mediante simulaciones gamificadas en entornos VR y AR.",
    challenge: "Digitalizar procesos industriales complejos integrando storytelling técnico y escenarios de alta fidelidad. El reto principal fue el desarrollo de simulaciones realistas de maquinaria de carga y flujos logísticos críticos, permitiendo un entrenamiento 'libre de riesgos' con evaluación automatizada de competencias.",
    tags: ["Virtual Reality", "Industry 4.0", "Augmented Reality", "EdTech", "Logistics"],
    color: "#00E5FF",
    meta: { "Tipo": "EdTech / Industrial", "Cliente": "Univ. Libre", "Sede": "Colombia", "Duración": "2025 - Presente" },
    url: "https://youtu.be/dxfvEPRck0I?si=5JmACepLax8lbYJM",
  },

  {
    name: "Expedia",
    client: "Expedia Group",
    color: "#FFC107",
    screenshot: "expedia.png",
    description: "Desarrollo de la aplicación insignia Expedia.com, el marketplace de viajes líder mundial. Trabajo centrado en potenciar la experiencia móvil de millones de usuarios, permitiendo la reserva sin fricciones de hoteles, vuelos y paquetes vacacionales en una sola plataforma nativa.",
    challenge: "Optimizar el flujo de reserva y la visualización de datos complejos en tiempo real. El reto fue desarrollar funcionalidades avanzadas en Swift/SwiftUI que garantizan una navegación ultra profesional y rápida, integrando servicios de geolocalización y notificaciones críticas para el viajero.",
    meta: { "Tipo": "B2C / Booking Platform", "Duración": "2024 - 2026", "Plataforma": "iOS (Swift / SwiftUI)", "Alcance": "Global" },
    url: "https://www.expedia.com/",
  },

  {
    name: "Aditum – Plataforma de Gestión ISP & Impacto Social",
    client: "Aditum Latinoamérica",
    screenshot: "aditum.png",
    description: "Ecosistema digital integral diseñado para revolucionar la operatividad de los Proveedores de Servicios de Internet (ISP) en zonas rurales de Latinoamérica. Aditum centraliza la gestión de usuarios, el control administrativo y la facturación automatizada, permitiendo que la conectividad llegue a comunidades de difícil acceso bajo un modelo de servicios prepago justo y sostenible.",
    challenge: "Sincronizar módulos críticos de operación (activación de servicios, monitoreo y facturación) en un backend robusto con uptime absoluto. El éxito del proyecto radicó en la integración de una potente automatización vía WhatsApp que gestiona recordatorios de pago y reconexiones inmediatas, convirtiéndose en un motor de transformación social respaldado por Microsoft Airband y LACNIC.",
    tags: ["ISP Management", "FinTech", "Social Impact", "WhatsApp Automation", "B2B SaaS"],
    color: "#2979FF",
    meta: { "Tipo": "B2B / Impact Tech", "Mérito": "Microsoft Partner", "Alcance": "Rural LATAM", "Plataforma": "Web Ecosystem" },
    url: "https://www.aditumla.org/",
  },

  {
    name: "Lobby",
    client: "Lobby PMS",
    color: "#A0D9EF",
    screenshot: "lobby.png",
    description: "Plataforma integral All-in-One para la gestión hotelera diseñada para simplificar operaciones y aumentar reservas. Lobby centraliza el control de inventario, check-in online y la facturación, permitiendo a hoteles y hostales escalar su negocio mediante tecnología intuitiva.",
    challenge: "Consolidar las necesidades operativas de la hospitalidad moderna en una interfaz única. El reto fue optimizar la sincronización en tiempo real con OTAs globales y desarrollar un motor de reservas directas que elimine comisiones de terceros y maximice la rentabilidad.",
    meta: { "Tipo": "B2B / Hospitality SaaS", "Duración": "2024 - 2025", "Plataforma": "Web Ecosystem", "Alcance": "Latinoamérica" },
    note: "Debido a acuerdos de confidencialidad (NDA), no se pueden compartir detalles técnicos ni capturas adicionales de este desarrollo.",
    url: "https://lobbypms.com/",
  },

  {
    name: "CloudTask",
    client: "CloudTask",
    color: "#3574e3",
    screenshot: "cloudtask.png",
    description: "Plataforma líder para la contratación de talento SaaS remoto en Latinoamérica. CloudTask conecta empresas globales con profesionales pre-verificados en ventas, marketing y soporte, optimizando el ROI mediante talento AI-enabled con alineación horaria perfecta.",
    challenge: "Escalar equipos de Go-To-Market (GTM) eliminando barreras de contratación internacional. El reto fue crear un ecosistema que garantiza el despliegue de talento bilingüe especializado en herramientas críticas (HubSpot, Salesforce) en menos de 48 horas.",
    meta: { "Tipo": "B2B / SaaS Ecosystem", "Duración": "2022 - 2025", "Plataforma": "Web Ecosystem", "Alcance": "Global" },
    url: "https://cloudtask.com/",
  },

  {
    name: "CloudX",
    client: "Bergen Logistics / CloudX Systems",
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
    meta: { "Tipo": "AgTech / ESG", "Duración": "2022 - 2024", "Plataforma": "Android / Web Cloud", "Impacto": "Amazonía" },
    url: "https://www.ganaderointeligente.com/",
  },

  {
    name: "BetFanatics",
    client: "X-Team / Fanatics International",
    clientLogo: "fanatic-icon.png",
    color: "#D30F25",
    screenshot: "fanatics.webp",
    description: "Ingeniería de software para BetFanatics, la división de apuestas y tecnología de Fanatics. Trabajo enfocado en expandir el ecosistema del líder mundial en merchandise deportivo hacia soluciones digitales de alto rendimiento en 180 países.",
    challenge: "Integrar la infraestructura tecnológica de Kitbag con las soluciones masivas de Fanatics U.S. El reto fue desarrollar aplicaciones escalables para clubes de la Premier League, La Liga y las ligas mayores de EE.UU. en entornos multiidioma.",
    meta: { "Tipo": "Mobile Engineering", "Duración": "2022 - 2023", "Plataforma": "iOS / Multiplatform (KMM)", "Alcance": "Reino Unido / Global" },
    url: "https://www.fanatics-intl.com/",
  },

  {
    name: "HelloFresh",
    client: "HelloFresh SE",
    clientLogo: "hellofresh-icon.jpeg",
    color: "#4d9d2a",
    screenshot: "hellofresh.jpg",
    description: "Ingeniería de software senior para HelloFresh SE, el mayor proveedor mundial de kits de comida por suscripción. Trabajo realizado desde la sede global en Berlín, enfocado en potenciar la experiencia móvil de millones de usuarios en mercados de EE.UU., Europa y Australia.",
    challenge: "Escalar y modernizar la plataforma iOS durante una fase de hiper-crecimiento internacional tras su salida a bolsa. El desafío fue liderar mejoras en la gestión de suscripciones y la visualización de recetas complejas, asegurando un rendimiento fluido bajo demanda masiva global.",
    meta: { "Tipo": "B2C / FoodTech", "Duración": "mar. 2018 - dic. 2018", "Plataforma": "iOS (Swift / Obj-C)", "Sede": "Berlín, Alemania" },
    url: "https://www.hellofresh.es/",
  },

  {
    name: "NOA – Tu Asistente Virtual en Salud",
    client: "NOA",
    screenshot: "noa.png",
    description: "Plataforma integral diseñada para facilitar la gestión diaria de los profesionales de la salud en Colombia. NOA actúa como un asistente virtual que automatiza el registro de consultas y la facturación, eliminando la dependencia de procesos manuales ineficientes y asegurando el bienestar financiero y operativo del médico.",
    challenge: "Digitalizar y centralizar la gestión de especialistas médicos para evitar la pérdida de ingresos por olvidos en cobranza o errores contables. El reto principal fue la sistematización del flujo de facturación y el registro clínico en una app intuitiva que reduzca drásticamente los errores del equipo financiero y libere tiempo valioso para la atención al paciente.",
    tags: ["HealthTech", "FinTech", "Process Automation", "UX/UI Design", "Mobile App"],
    color: "#54B3FF",
    meta: { "Tipo": "B2C / HealthTech", "Duración": "Mar. 2021 – Mar. 2023", "Alcance": "Colombia", "Plataforma": "App / Mobile" },
    url: "https://www.behance.net/gallery/201534717/NOA-App-V1",
  },

  {
    name: "PetLuv – Pet Lovers Social Network",
    client: "PetLuv",
    screenshot: "Petluv.png",
    description: "PetLuv is an exciting project that aims to unite the pet lover community. Our mission is to build a platform that allows pet owners to find other pet owners and build communities based on shared interests. In addition, we offer a wide range of activities and services ideal for your pet, which means you'll always have something fun and exciting to do with your furry companion.",
    challenge: "Build a motivated community of Pet Lovers willing to help and contribute. The challenge was to create an online environment that facilitates real-world connections and access to specialized pet services, bringing owners and their companions closer together.",
    tags: ["Social Network", "PetTech", "Mobile App", "React Native", "UX/UI Design"],
    color: "#FF1744",
    meta: { "Tipo": "B2C / Social Network", "Duración": "Jul. 2020 - Feb. 2022", "Alcance": "Colombia", "Plataforma": "iOS / Android" },
    url: "https://www.behance.net/gallery/201453819/PetLuv-App-V1",
  },

  {
    name: "Rabbit – Logistics & Delivery Ecosystem",
    client: "Rabbit Delivery",
    screenshot: "rabbit.png",
    description: "Plataforma logística inteligente diseñada para optimizar la gestión de mensajería y procesos operativos extensivos para pequeñas y medianas empresas. Rabbit Delivery centraliza el envío de documentos, la trazabilidad de paquetes y la coordinación de trámites fuera de sede, proporcionando a las pymes herramientas de alto nivel para controlar su logística de última milla con total transparencia.",
    challenge: "Desarrollar una interfaz robusta capaz de gestionar múltiples puntos de entrega y estados de envío en tiempo real. El reto principal fue la creación de un flujo de usuario simplificado para la solicitud de servicios y el seguimiento detallado de documentos críticos, garantizando que procesos complejos de mensajería se resuelvan con pocos clics y máxima seguridad.",
    tags: ["Logística", "UX/UI Design", "Last-Mile Delivery", "B2B SaaS", "Mobile App"],
    color: "#2962FF",
    meta: { "Tipo": "B2B / Logistics Tech", "Duración": "Sep. 2021 - Ene. 2022", "Alcance": "Colombia", "Plataforma": "iOS / Android" },
    url: "https://www.behance.net/gallery/132067379/Rabbit-UXUI-App-Dev",
  },

  {
    name: "Bikee – Smart Mobility Ecosystem",
    client: "Bikee",
    screenshot: "bikee.png",
    description: "Bikee is an innovative project that aims to make renting bicycles more efficient and user-friendly. Our app allows users to easily rent electric and conventional bicycles at affordable prices. With Bikee, users can rent bicycles with ease and explore their cities in a sustainable way. Join us and be a part of our mission to make cycling accessible to everyone!",
    challenge: "Our challenge is to create a platform that gives users access to the location, price, and type of bicycle to rent. We also aim to facilitate payment and generate reports for administrators.",
    tags: ["Smart Mobility", "UX/UI Design", "Mobile App", "React Native", "Maps Integration"],
    color: "#D500F9",
    meta: { "Tipo": "B2C / Smart Mobility", "Duración": "Sep. 2021 - Ene. 2022", "Alcance": "Colombia", "Plataforma": "iOS / Android" },
    url: "https://www.behance.net/gallery/140620909/Bikee-UXUI-App-Dev",
  }
];
