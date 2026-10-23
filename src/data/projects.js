// Reemplaza los valores entre [corchetes] por tus cifras reales.
// Reemplaza los valores entre [corchetes] por tus cifras reales.
export const projects = [
  {
    slug: 'shipping-rest-api',
    featured: true,
    visual: 'onion',
    kind: 'Backend',
    media: '/shipping-demo.gif',
    title: 'Shipping REST API',
    description: 'API de logística y envíos en C# ASP.NET Core con Arquitectura Onion, diseñada para crecer sin romperse.',
    highlights: [
      'Capas Dominio, Aplicación, Infraestructura y API con dependencias hacia el núcleo.',
      'Endpoints RESTful con validaciones y manejo de errores consistente.',
    ],
    tags: ['C#', 'ASP.NET Core', 'Onion', 'REST'],
    href: 'https://github.com/merlynt/shipping-rest-api.git',
    
  },
  {
    slug: 'materiales-trinidad',
    kind: 'Aplicación web',
    media: '/proyecto_ferreteria.gif',
    title: 'Sistema de Ferretería',
    description: 'Cotizaciones, inventario y ventas de Materiales Trinidad en una sola aplicación web.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    href: 'https://github.com/melissaraujo00/MaterialesTrinidad.git',
  },
  {
    slug: 'biological-kingdom',
    kind: 'Backend',
    media: '/reinos_api.gif',
    title: 'API Biological Kingdom',
    description: 'Backend que modela la clasificación taxonómica y la expone mediante endpoints RESTful.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    href: 'https://github.com/merlynt/APIBiological_kingdom.git',
  }
];
