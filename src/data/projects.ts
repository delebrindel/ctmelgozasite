export interface Project {
  id: string;
  title: string;
  description: string;
  categories: string[];
  /** @deprecated Use categories for non-technology labels. */
  stack: string[];
  technologies?: string[];
  outcome?: string;
  /** Desktop screenshot shown at the top of the card (served from /public). */
  image?: string;
  /** Mobile screenshots shown in phone frames; used instead of `image` when present. */
  mobileShots?: string[];
  /** Full set of screens opened in the lightbox when a phone shot is clicked. */
  gallery?: { src: string; caption: string }[];
  link?: string;
  github?: string;
  status: 'completed' | 'in-progress' | 'archived';
}

export const projects: Project[] = [
  {
    id: 'spento',
    title: 'Spento Household Budget App',
    description:
      'A shared household finance app for tracking spending and income, setting individual budgets, splitting expenses, and managing recurring payments.',
    categories: ['Personal finance', 'Household budgeting', 'Progressive web app'],
    stack: ['Personal finance', 'Household budgeting', 'Progressive web app'],
    technologies: ['PHP 8.2', 'MySQL', 'TypeScript', 'Service Worker'],
    mobileShots: [
      '/assets/projects/spento/home.png',
      '/assets/projects/spento/activity.png',
      '/assets/projects/spento/budgets.png',
    ],
    gallery: [
      { src: '/assets/projects/spento/home.png', caption: 'Home: weekly totals, upcoming payments and budget progress' },
      { src: '/assets/projects/spento/add-expense.png', caption: 'Add an expense, with optional splitting between people' },
      { src: '/assets/projects/spento/add-income.png', caption: 'Log one-off or recurring income per person' },
      { src: '/assets/projects/spento/activity.png', caption: 'Activity: filter transactions by category, person or text' },
      { src: '/assets/projects/spento/reports.png', caption: 'Monthly report by payment type and category' },
      { src: '/assets/projects/spento/budgets.png', caption: 'Personal and shared budgets with progress bars' },
      { src: '/assets/projects/spento/categories.png', caption: 'Manage categories: rename, archive or delete' },
    ],
    status: 'completed',
  },
  {
    id: 'red-consultores',
    title: 'Red Consultores Website',
    description: 'Client-facing website and customer portal for a civil-protection consultancy, presenting its RED 369 risk-management platform and services.',
    categories: ['Consultancy website', 'Client portal', 'Risk management'],
    stack: ['Consultancy website', 'Client portal', 'Risk management'],
    technologies: ['Vue', 'PHP', 'MySQL'],
    image: '/assets/projects/red-consultores.jpg',
    link: 'https://redconsultores.mx/index.php',
    status: 'completed',
  },
  {
    id: 'plapers',
    title: 'Plapers E-commerce Website',
    description: 'E-commerce storefront for a Mexican maker of personalized decorative plates, with product browsing and an online ordering flow.',
    categories: ['E-commerce', 'Product catalog', 'Ordering flow'],
    stack: ['E-commerce', 'Product catalog', 'Ordering flow'],
    technologies: ['Vue', 'PHP', 'MySQL'],
    image: '/assets/projects/plapers.jpg',
    link: 'https://www.plapers.com.mx/',
    status: 'completed',
  },
  {
    id: 'backoffice-system',
    title: 'Ghost Back-Office System',
    description: 'Operations platform for gaming teams, combining real-time dashboards, user management, and automated reporting in one back-office system.',
    categories: ['Internal tools', 'Operations', 'Real-time dashboards'],
    stack: ['Internal tools', 'Operations', 'Real-time dashboards'],
    technologies: ['React', 'Node.js', 'Microservices', 'Socket.io'],
    status: 'completed',
  },
  {
    id: 'sanders-mantilla',
    title: 'Sanders y Mantilla Website',
    description: 'Multilingual marketing website for a translation agency, built around lightweight, reusable Vue and PHP components.',
    categories: ['Marketing website', 'Multilingual'],
    stack: ['Marketing website', 'Multilingual'],
    technologies: ['Vue', 'PHP', 'Microservices'],
    image: '/assets/projects/sanders-mantilla.jpg',
    link: 'https://www.sandersymantilla.com/',
    status: 'completed',
  },
  {
    id: 'raffoom-platform',
    title: 'Raffoom Website',
    description: 'Built a reusable raffle platform from the ground up, including customer-facing sites, back-office tooling, and a CMS.',
    categories: ['Platform engineering', 'Customer-facing web apps', 'CMS'],
    stack: ['Platform engineering', 'Customer-facing web apps', 'CMS'],
    technologies: ['React', 'Node.js', 'PHP', 'Microservices'],
    outcome: 'Supported 7 companies across 4 customer-facing raffle websites.',
    image: '/assets/projects/raffoom-platform.jpg',
    link: 'https://www.raffoom.com/',
    status: 'completed',
  },
  {
    id: 'ui-library',
    title: 'Internal UI Component Library',
    description: 'Shared React component library that brought consistent UI patterns, accessibility, and performance practices to multiple internal platforms.',
    categories: ['Design systems', 'Developer experience', 'Accessibility'],
    stack: ['Design systems', 'Developer experience', 'Accessibility'],
    technologies: ['TypeScript', 'React', 'Storybook', 'Tailwind CSS'],
    status: 'completed',
  },
  {
    id: 'migration-tool',
    title: 'Legacy Migration Orchestrator',
    description: 'Automated migration tooling that supported the move of 12 high-traffic platforms from a legacy PHP monolith to modern microservices.',
    categories: ['Legacy modernization', 'Developer tooling', 'Platform reliability'],
    stack: ['Legacy modernization', 'Developer tooling', 'Platform reliability'],
    technologies: ['Node.js', 'Docker', 'Shell', 'AWS'],
    outcome: 'Contributed to a modernization program that reduced deployment time from 120 to 30 minutes.',
    status: 'completed',
  },
  {
    id: 'photography-site',
    title: 'Photography Portfolio',
    description: 'Visual portfolio for photography work and personal projects.',
    categories: ['Portfolio', 'Photography'],
    stack: ['Portfolio', 'Photography'],
    image: '/assets/projects/photography-site.jpg',
    link: 'https://photo.ctorres.lat/',
    status: 'completed',
  },
];
