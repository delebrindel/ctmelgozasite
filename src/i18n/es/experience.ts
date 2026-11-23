import type { Experience } from '../en/experience';

export const experience: Experience[] = [
  {
    id: 'necodex', role: 'Desarrollador web senior', company: 'Necodex', period: '10/2025 – Actualidad',
    stack: ['NestJS', 'Vue', 'Micro-frontends', 'Jest', 'Playwright'],
    description: [
      'Refactoricé 2 APIs de producción de Koa a NestJS, rediseñando su arquitectura',
      'Lideré la migración de 2 módulos frontend de Vue 2 a Vue 3 (unos 24 componentes) en un equipo de 4 desarrolladores',
      'Extraje el módulo de Ventas como un micro-frontend dentro de una plataforma de compras de 17 módulos',
      'Automaticé los flujos de pruebas con Jest y Playwright; actualicé Node.js de la versión 20 a la 24',
    ],
  },
  {
    id: 'raffoom', role: 'Líder técnico', company: 'Raffoom Digital', period: '10/2021 – 10/2025',
    stack: ['React', 'Next.js', 'Micro-frontends', 'CI/CD'],
    description: [
      'Diseñé y construí desde cero una plataforma de rifas con un equipo de 4 desarrolladores, dando soporte a 7 empresas a través de 4 sitios de rifas orientados al cliente',
      'Diseñé la arquitectura de la plataforma: apps para clientes, back office, pipelines de CI/CD, estructuras de datos y el diccionario de datos central',
      'Construí una arquitectura de micro-frontends con React y Next.js en las apps de cliente y de back office, con 3 pipelines',
      'Creé librerías de componentes reutilizables y un sistema de componentes de rifas y un CMS que los clientes usan sin cambios de código',
      'Establecí lineamientos de desarrollo que cubren linting, uso de herramientas, revisión de PR y arquitectura',
    ],
  },
  {
    id: 'rank', role: 'Líder técnico', company: 'Rank Interactive', period: '10/2018 – 10/2021',
    stack: ['NestJS', 'Express', 'Angular', 'GraphQL', 'Kubernetes'],
    description: [
      'Impulsé la modernización de 12 plataformas de juegos en producción (8 de casino, 4 de bingo), pasando de un monolito legado en PHP a NestJS, Express, Angular y microservicios',
      'Diseñé el framework compartido y el sistema de skins que usan las 12 plataformas',
      'Dividí el monolito en servicios de dominio, incluidos los servicios de correo y de recompensas de casino',
      'Reduje el tiempo de despliegue de 120 a 30 minutos; introduje despliegues redundantes en AWS para plataformas con hasta unos 9,000 usuarios diarios',
      'Me promovieron a Líder técnico después de proponer y contribuir a la estrategia de migración',
    ],
  },
  {
    id: 'cenfes', role: 'Desarrollador web senior', company: 'CENFES A.C.', period: '05/2016 – 10/2018',
    stack: ['PHP', 'Laravel', 'Vue'],
    description: [
      'Reconstruí 4 aplicaciones que gestionan operadores de transporte público en la Ciudad de México, reemplazando Perl legado por PHP, Laravel y Vue',
      'Moví la lógica de negocio a servicios de Laravel y plantillas reutilizables',
      'Introduje control de versiones y entornos separados de desarrollo y staging, reduciendo la dependencia de los sistemas de producción',
    ],
  },
  {
    id: 'telmex', role: 'Desarrollador web', company: 'Telmex A.C.', period: '08/2010 – 05/2016',
    stack: ['Drupal', 'WordPress'],
    description: [
      'Desarrollé sistemas internos de gestión de eventos basados en Drupal para carreras, rifas y cursos de capacitación',
      'Configuré un entorno de desarrollo dedicado',
      'Desarrollé y di mantenimiento a sitios web en WordPress para la Asociación Telmex y ASUME A.C.',
    ],
  },
];

export const skills = ['React', 'TypeScript', 'Node.js', 'NestJS', 'Next.js', 'GraphQL', 'Kubernetes', 'Micro-frontends'];
export const cvSummary = 'Desarrollador Full Stack senior y Líder técnico con experiencia en desarrollo web desde 2010. Se especializa en modernizar plataformas legadas hacia productos sostenibles y de largo plazo: evolucionar aplicaciones monolíticas hacia arquitecturas modulares basadas en microservicios con React, TypeScript, Node.js y NestJS. Construye sistemas de componentes y APIs reutilizables, y lidera migraciones tecnológicas entre equipos de desarrollo.';
export const education = 'Licenciatura en Ciencias, Soluciones de TI (Programación, DBA, Redes), Universidad La Salle Cuernavaca';
export const languages = ['Español (nativo)', 'Inglés (fluido)'];
