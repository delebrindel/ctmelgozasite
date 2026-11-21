// Single source of truth for personal/profile content.
// Ported from the previous React site (see git history before the Astro remake).

export const site = {
  name: 'Cristóbal Torres',
  url: 'https://ctorres.lat',
  description:
    'Software engineering consultancy led by Cristóbal Torres in Mexico. Modernize legacy software and build internal tools with senior hands-on engineering.',
  intro:
    'I help product teams modernize legacy software and build internal tools, with a practical plan and senior hands-on engineering.',
  background:
    'Based in Mexico, working with international teams.',
  links: {
    linkedin: 'https://www.linkedin.com/in/ctmelgoza/',
    github: 'https://github.com/delebrindel',
    gitlab: 'https://gitlab.com/delebrindel',
  },
  social: [
    { href: 'https://www.linkedin.com/in/ctmelgoza/', icon: '/social/linkedin.svg', label: 'LinkedIn' },
    { href: 'https://github.com/delebrindel', icon: '/social/github.svg', label: 'GitHub' },
    { href: 'https://www.instagram.com/ctmelgoza/', icon: '/social/ig.svg', label: 'Instagram' },
    { href: 'https://photo.ctorres.lat/', icon: '/social/camera.svg', label: 'Photography' },
  ],
};

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
    id: 'necodex',
    role: 'Senior Web Developer',
    company: 'Necodex',
    period: '10/2025 – Present',
    stack: ['NestJS', 'Vue', 'Micro-frontends', 'Jest', 'Playwright'],
    description: [
      'Refactored 2 production APIs from Koa to NestJS, redesigning their architecture',
      'Led the migration of 2 frontend modules from Vue 2 to Vue 3 (about 24 components) in a 4-developer team',
      'Extracted the Sales module into a micro-frontend within a 17-module purchasing platform',
      'Automated testing workflows with Jest and Playwright; upgraded Node.js from 20 to 24',
    ],
  },
  {
    id: 'raffoom',
    role: 'Technical Lead',
    company: 'Raffoom Digital',
    period: '10/2021 – 10/2025',
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
    id: 'rank',
    role: 'Technical Lead',
    company: 'Rank Interactive',
    period: '10/2018 – 10/2021',
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
    id: 'cenfes',
    role: 'Senior Web Developer',
    company: 'CENFES A.C.',
    period: '05/2016 – 10/2018',
    stack: ['PHP', 'Laravel', 'Vue'],
    description: [
      'Rebuilt 4 applications that manage public transportation operators in Mexico City, replacing legacy Perl with PHP, Laravel, and Vue',
      'Moved business logic into Laravel services and reusable templates',
      'Introduced version control and separate development and staging environments, reducing reliance on production systems',
    ],
  },
  {
    id: 'telmex',
    role: 'Web Developer',
    company: 'Telmex A.C.',
    period: '08/2010 – 05/2016',
    stack: ['Drupal', 'WordPress'],
    description: [
      'Developed Drupal-based internal event management systems for races, raffles, and training courses',
      'Set up a dedicated development environment',
      'Developed and maintained WordPress websites for Asociación Telmex and ASUME A.C.',
    ],
  },
];

export const skills: string[] = [
  'React', 'TypeScript', 'Node.js', 'NestJS', 'Next.js', 'GraphQL', 'Kubernetes', 'Micro-frontends',
];

export const cvSummary =
  'Senior Full Stack Developer and Technical Lead since 2010. Specializes in modernizing legacy platforms into sustainable, long-term products: evolving monolithic applications into modular, microservice-based architectures with React, TypeScript, Node.js, and NestJS. Builds reusable component systems and APIs, and leads technology migrations across development teams.';

export const education = 'Bachelor of Science, IT Solutions (Coding, DBA, Networking), Universidad La Salle Cuernavaca';

export const languages = ['Spanish (native)', 'English (fluent)'];

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  outcome?: string;
  link?: string;
  github?: string;
  status: 'completed' | 'in-progress' | 'archived';
}

export const projects: Project[] = [
  {
    id: 'backoffice-system',
    title: 'Ghost Back-Office System',
    description:
      'Internal back-office for managing gaming operations: real-time dashboards, user management, and automated reporting.',
    stack: ['React', 'Node.js', 'Microservices', 'Socket.io'],
    status: 'completed',
  },
  {
    id: 'sanders-mantilla',
    title: 'Sanders y Mantilla Website',
    description: 'Multilingual website for a translation agency, built with Vue and PHP around lightweight, reusable components.',
    stack: ['Vue', 'PHP', 'Microservices'],
    link: 'https://www.sandersymantilla.com/',
    status: 'completed',
  },
  {
    id: 'raffoom-platform',
    title: 'Raffoom Website',
    description:
      'Architected and built a raffle platform from the ground up, supporting 7 companies across 4 customer-facing raffle websites.',
    stack: ['React', 'Node.js', 'PHP', 'Microservices'],
    link: 'https://www.raffoom.com/',
    status: 'completed',
  },
  {
    id: 'ui-library',
    title: 'Internal UI Component Lib',
    description:
      'A shared component library built to standardize UI/UX across multiple internal platforms. Focused on accessibility and performance.',
    stack: ['TypeScript', 'React', 'Storybook', 'Tailwind'],
    status: 'completed',
  },
  {
    id: 'migration-tool',
    title: 'Legacy Migration Orchestrator',
    description:
      'Automated tooling to assist in the migration of 12 high-traffic platforms from a legacy PHP monolith to modern microservices.',
    outcome: 'Used on the migration of 12 high-traffic platforms from legacy stacks to modern microservices.',
    stack: ['Node.js', 'Docker', 'Shell', 'AWS'],
    status: 'completed',
  },
  {
    id: 'portfolio-site',
    title: 'Personal Site',
    description:
      'This website. Rebuilt as a static Astro site with a Markdown blog. Previously a React + Vite single-page app.',
    stack: ['Astro', 'TypeScript', 'Markdown'],
    link: 'https://ctorres.lat/',
    github: 'https://github.com/delebrindel/ctmelgozasite',
    status: 'in-progress',
  },
  {
    id: 'photography-site',
    title: 'Photography Portfolio',
    description: 'Photography portfolio showcasing my visual work and personal projects.',
    stack: ['Photography', 'Creative', 'Visual Arts'],
    link: 'https://photo.ctorres.lat/',
    status: 'completed',
  },
];

export interface PackageTier {
  name: string;
  time: string;
  price?: string;
  desc: string;
  bullets: string[];
  cta: string;
  slug: string;
  projectIds: string[];
}

export const packages = {
  title: 'Software engineering services',
  intro: 'Bring in senior engineering support for a focused assessment, a delivery initiative, or ongoing platform work.',
  tiers: [
    {
      name: 'Legacy modernization',
      time: 'Assess and plan',
      desc: 'Understand the risks in an existing application and create a practical, incremental path to improve it.',
      bullets: ['Codebase and architecture review', 'Risk and dependency mapping', 'Prioritized modernization roadmap'],
      cta: 'Discuss modernization',
      slug: 'legacy-modernization',
      projectIds: ['migration-tool'],
    },
    {
      name: 'Product engineering',
      time: 'Design and deliver',
      desc: 'Move a product initiative forward with senior engineering from technical discovery through production delivery.',
      bullets: ['Web application development', 'APIs and internal tools', 'Testing and delivery workflows'],
      cta: 'Discuss a project',
      slug: 'product-engineering',
      projectIds: ['backoffice-system', 'ui-library'],
    },
    {
      name: 'Platform reliability',
      time: 'Improve and scale',
      desc: 'Address architecture and performance bottlenecks so your team can operate and evolve its platform with confidence.',
      bullets: ['Architecture and performance review', 'Reliability improvements', 'Knowledge transfer and documentation'],
      cta: 'Review your platform',
      slug: 'platform-reliability',
      projectIds: ['raffoom-platform', 'migration-tool'],
    },
  ] satisfies PackageTier[],
};
