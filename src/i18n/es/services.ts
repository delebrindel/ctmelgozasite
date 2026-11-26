import type { PackageTier } from '../en/services';

export const packages = {
  title: 'Servicios de ingeniería de software',
  intro: 'Incorpora soporte de ingeniería senior para una evaluación enfocada, una iniciativa de entrega o trabajo continuo en la plataforma.',
  tiers: [
    {
      name: 'Diagnóstico técnico independiente', kind: 'Piloto · alcance limitado',
      desc: 'Un diagnóstico técnico independiente para aplicaciones web y plataformas SaaS.',
      includesLabel: 'Qué recibes',
      bullets: [
        'Evaluación de arquitectura',
        'Registro de deuda técnica',
        'Clasificación de riesgos',
        'Recomendaciones priorizadas',
        'Resumen ejecutivo',
        'Hoja de ruta técnica',
      ],
      price: 'Desde $200 USD',
      priceApprox: '≈ $3,600 MXN',
      priceNote: 'Precio piloto para una aplicación y un repositorio, con reporte final por escrito. No es una auditoría ilimitada.',
      offer: { amount: '200', currency: 'USD' },
      cta: 'Solicita un diagnóstico', slug: 'diagnostico-tecnico', projectIds: [],
    },
    {
      name: 'Sprint de modernización de sistemas legados', kind: 'Por proyecto',
      tagline: 'Mejora lo que ya tienes.',
      desc: 'Reduce el riesgo técnico y mejora la mantenibilidad de aplicaciones existentes mediante iniciativas de ingeniería enfocadas.',
      bullets: [
        'Mejoras de arquitectura',
        'Modernización de dependencias',
        'Calidad de código y mantenibilidad',
        'Rendimiento y confiabilidad',
        'Mejoras en pruebas',
      ],
      price: 'Alcance a medida',
      priceNote: 'Cotización después de una evaluación técnica inicial.',
      cta: 'Hablemos de modernización', slug: 'modernizacion-sistemas-legados', projectIds: ['migration-tool'],
    },
    {
      name: 'Liderazgo de ingeniería temporal', kind: 'Compromiso continuo',
      tagline: 'Orientación de ingeniería senior sin contratar a tiempo completo.',
      desc: 'Ayuda a tu equipo a tomar mejores decisiones técnicas, mejorar sus prácticas de entrega y avanzar con las iniciativas de producto.',
      bullets: [
        'Arquitectura y dirección técnica',
        'Estándares de ingeniería y revisiones de código',
        'Planeación y priorización técnica',
        'Flujos de desarrollo asistidos por IA',
        'Mentoría y orientación de ingeniería',
      ],
      price: 'Compromiso mensual',
      priceNote: 'Disponibilidad y alcance mensual definidos.',
      cta: 'Cuéntame más', slug: 'liderazgo-tecnico-temporal', projectIds: ['raffoom-platform', 'ui-library'],
    },
  ] satisfies PackageTier[],
};
