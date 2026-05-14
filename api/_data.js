/**
 * _data.js — Fuente única de verdad de proyectos.
 * Prefijo _ para que Vercel NO lo exponga como ruta pública.
 *
 * Principio Single Responsibility: este módulo solo sabe de datos.
 * Los handlers (projects.js, projects/[id].js) lo consumen.
 */

const projects = [
  {
    id: 'tallerapp',
    name: 'TallerApp',
    description:
      'Sistema integral de gestión para talleres mecánicos con control de órdenes de trabajo, inventario y facturación electrónica.',
    objectives: [
      'Digitalizar procesos internos de talleres mecánicos',
      'Reducir tiempos de atención en un 40%',
      'Automatizar control de inventario y proveedores',
    ],
    stack: [
      { name: 'React',       category: 'frontend'  },
      { name: 'Node.js',     category: 'backend'   },
      { name: 'PostgreSQL',  category: 'database'  },
      { name: 'TailwindCSS', category: 'frontend'  },
    ],
    phase: 'production',
    status: 'active',
    url: 'https://tallerapp.cl',
    imageUrl: '/images/tallerapp-demo.jpg',
  },
  {
    id: 'ditev',
    name: 'Ditev',
    description:
      'Plataforma moderna para gestión de eventos y comunidades religiosas, con módulos de seguimiento de miembros y agenda digital.',
    objectives: [
      'Centralizar comunicación de eventos comunitarios',
      'Automatizar recordatorios y seguimiento de asistentes',
      'Dashboard administrativo intuitivo',
    ],
    stack: [
      { name: 'Next.js',    category: 'frontend' },
      { name: 'Express',    category: 'backend'  },
      { name: 'MongoDB',    category: 'database' },
      { name: 'TypeScript', category: 'other'    },
    ],
    phase: 'development',
    status: 'active',
    url: 'https://ditev.cl',
    imageUrl: '/images/ditev-demo.jpg',
  },
  {
    id: 'thepool',
    name: 'The Pool',
    description:
      'Sistema de reservas y administración para complejos de piscinas, con gestión de turnos, pagos y control de aforo.',
    objectives: [
      'Optimizar uso de espacios mediante reservas online',
      'Integrar pasarela de pagos',
      'Dashboards para administradores con métricas en tiempo real',
    ],
    stack: [
      { name: 'Vue.js',  category: 'frontend' },
      { name: 'Laravel', category: 'backend'  },
      { name: 'MySQL',   category: 'database' },
      { name: 'Docker',  category: 'devops'   },
    ],
    phase: 'production',
    status: 'active',
    url: 'https://thepool.cl',
    imageUrl: '/images/thepool-demo.jpg',
  },
  {
    id: 'mantos',
    name: 'MantOS',
    description:
      'Sistema de gestión de mantenimiento general: órdenes de trabajo, preventivos, indicadores y trazabilidad completa de activos.',
    objectives: [
      'Centralizar solicitudes de mantenimiento',
      'Reducir tiempos de respuesta en un 50%',
      'Generar reportes automáticos de KPIs',
    ],
    stack: [
      { name: 'React',       category: 'frontend' },
      { name: 'Firebase',    category: 'backend'  },
      { name: 'Vercel',      category: 'devops'   },
      { name: 'Material UI', category: 'frontend' },
    ],
    phase: 'proof_of_concept',
    status: 'active',
    url: 'https://mantenimiento-general.vercel.app/dashboard',
    imageUrl: '/images/mantos-demo.jpg',
  },
  {
    id: 'sielco-intranet',
    name: 'Sielco Intranet',
    description:
      'CRM personal completo para gestión de clientes, seguimiento de ventas, proyectos internos y automatización de reportes ejecutivos.',
    objectives: [
      'Unificar datos de clientes y prospectos',
      'Automatizar flujos de seguimiento comercial',
      'Visualización de KPIs con dashboards interactivos',
    ],
    stack: [
      { name: 'Next.js',    category: 'frontend' },
      { name: 'Supabase',   category: 'backend'  },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Vercel',     category: 'devops'   },
    ],
    phase: 'production',
    status: 'active',
    url: 'https://intranet.sielco.cl',
    imageUrl: '/images/sielco-demo.jpg',
  },
  {
    id: 'ya-no-lo-uso',
    name: 'Ya No Lo Uso',
    description:
      'Marketplace de compraventa de artículos de segunda mano: publica lo que ya no usas, encuentra lo que necesitas. Plataforma de clasificados con geolocalización y chat integrado.',
    objectives: [
      'Facilitar la economía circular entre particulares',
      'Publicación rápida de artículos con fotos y geolocalización',
      'Sistema de chat entre comprador y vendedor en tiempo real',
    ],
    stack: [
      { name: 'React Native', category: 'frontend' },
      { name: 'Node.js',      category: 'backend'  },
      { name: 'MongoDB',      category: 'database' },
      { name: 'Firebase',     category: 'other'    },
    ],
    phase: 'proof_of_concept',
    status: 'archived',
    url: 'https://github.com/trangol/ya-no-lo-uso',
    imageUrl: '/images/ya-no-lo-uso-demo.jpg',
    additionalInfo: {
      githubUrl: 'https://github.com/trangol/ya-no-lo-uso',
      isOpenSource: true,
    },
  },
];

module.exports = { projects };
