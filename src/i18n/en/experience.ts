export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  stack: string[];
  description: string[];
}

export const experience: Experience[] = [
  {
    id: 'necodex', role: 'Senior Web Developer', company: 'Necodex', period: '10/2025 – Present',
    stack: ['NestJS', 'Vue', 'Micro-frontends', 'Jest', 'Playwright'],
    description: [
      'Refactored 2 production APIs from Koa to NestJS, redesigning their architecture',
      'Led the migration of 2 frontend modules from Vue 2 to Vue 3 (about 24 components) in a 4-developer team',
      'Extracted the Sales module into a micro-frontend within a 17-module purchasing platform',
      'Automated testing workflows with Jest and Playwright; upgraded Node.js from 20 to 24',
    ],
  },
  {
    id: 'raffoom', role: 'Technical Lead', company: 'Raffoom Digital', period: '10/2021 – 10/2025',
    stack: ['React', 'Next.js', 'Micro-frontends', 'CI/CD'],
    description: [
      'Architected and built a raffle platform from the ground up with a 4-developer team, supporting 7 companies across 4 customer-facing raffle websites',
      'Designed the platform architecture: customer-facing apps, back office, CI/CD pipelines, data structures, and core data dictionary',
      'Built a micro-frontend architecture with React and Next.js across customer-facing and back-office apps, with 3 pipelines',
      'Created reusable component libraries and a raffle component system and CMS that customers use without code changes',
      'Established development guidelines covering linting, tool usage, PR review, and architecture',
    ],
  },
  {
    id: 'rank', role: 'Technical Lead', company: 'Rank Interactive', period: '10/2018 – 10/2021',
    stack: ['NestJS', 'Express', 'Angular', 'GraphQL', 'Kubernetes'],
    description: [
      'Drove the modernization of 12 production gaming platforms (8 casino, 4 bingo) from a legacy PHP monolith to NestJS, Express, Angular, and microservices',
      'Designed the shared framework and skin system used across all 12 platforms',
      'Decomposed the monolith into domain services, including email and casino reward services',
      'Reduced deployment time from 120 to 30 minutes; introduced redundant AWS deployments for platforms serving up to about 9,000 daily users',
      'Promoted to Technical Lead after proposing and contributing to the migration strategy',
    ],
  },
  {
    id: 'cenfes', role: 'Senior Web Developer', company: 'CENFES A.C.', period: '05/2016 – 10/2018',
    stack: ['PHP', 'Laravel', 'Vue'],
    description: [
      'Rebuilt 4 applications that manage public transportation operators in Mexico City, replacing legacy Perl with PHP, Laravel, and Vue',
      'Moved business logic into Laravel services and reusable templates',
      'Introduced version control and separate development and staging environments, reducing reliance on production systems',
    ],
  },
  {
    id: 'telmex', role: 'Web Developer', company: 'Telmex A.C.', period: '08/2010 – 05/2016',
    stack: ['Drupal', 'WordPress'],
    description: [
      'Developed Drupal-based internal event management systems for races, raffles, and training courses',
      'Set up a dedicated development environment',
      'Developed and maintained WordPress websites for Asociación Telmex and ASUME A.C.',
    ],
  },
];

export const skills = ['React', 'TypeScript', 'Node.js', 'NestJS', 'Next.js', 'GraphQL', 'Kubernetes', 'Micro-frontends'];
export const cvSummary = 'Senior Full Stack Developer and Technical Lead with web development experience since 2010. Specializes in modernizing legacy platforms into sustainable, long-term products: evolving monolithic applications into modular, microservice-based architectures with React, TypeScript, Node.js, and NestJS. Builds reusable component systems and APIs, and leads technology migrations across development teams.';
export const education = 'Bachelor of Science, IT Solutions (Coding, DBA, Networking), Universidad La Salle Cuernavaca';
export const languages = ['Spanish (native)', 'English (fluent)'];
