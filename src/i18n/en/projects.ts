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
  visibility?: 'public' | 'private';
  shotShape?: 'portrait' | 'landscape';
  status: 'completed' | 'in-progress' | 'experimental' | 'archived';
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
    visibility: 'public',
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
    visibility: 'public',
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
    visibility: 'public',
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
    visibility: 'public',
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
    id: 'miso',
    title: 'Miso',
    description: 'Public UI component library with Storybook, built from scratch with accessible Button, Input, Select, Modal, Tabs, and Toast components.',
    categories: ['Design systems', 'Developer experience', 'Accessibility'],
    stack: ['Design systems', 'Developer experience', 'Accessibility'],
    technologies: ['TypeScript', 'React', 'Storybook', 'Tailwind CSS', 'Vitest'],
    shotShape: 'landscape',
    mobileShots: [
      '/assets/projects/miso/01-button-all-buttons.webp',
      '/assets/projects/miso/03-tabs.webp',
    ],
    gallery: [
      { src: '/assets/projects/miso/01-button-all-buttons.webp', caption: 'Button: primary, secondary and ghost variants in sm and md, plus disabled' },
      { src: '/assets/projects/miso/02-input-with-error.webp', caption: 'Input with validation error text' },
      { src: '/assets/projects/miso/03-tabs.webp', caption: 'Tabs, including a disabled tab' },
      { src: '/assets/projects/miso/04-modal.webp', caption: 'Modal, closed, with its trigger button' },
      { src: '/assets/projects/miso/05-toast-provider.webp', caption: 'Toast provider with info, success and error triggers' },
      { src: '/assets/projects/miso/06-hero.webp', caption: 'Hero section' },
      { src: '/assets/projects/miso/07-accordion.webp', caption: 'Accordion with one item open' },
    ],
    link: 'https://delebrindel.github.io/miso/',
    github: 'https://github.com/delebrindel/miso',
    status: 'experimental',
  },
  {
    id: 'prompting-guidelines',
    title: 'AI Prompting Guidelines',
    description: 'Public steering files and reusable skills for Claude Code and OMP: architecture rules, git and security workflows, npm publishing, database migrations, accessibility reviews, and safe scratch cleanup.',
    categories: ['AI tooling', 'Developer experience'],
    stack: ['AI tooling', 'Developer experience'],
    technologies: ['Markdown', 'Claude Code', 'OMP'],
    github: 'https://github.com/delebrindel/PromptingGuidelines',
    status: 'in-progress',
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
    id: 'automation',
    title: 'Mishka LoFi Studio',
    description: 'Local pipeline that turns an idea into a finished release: song prompts, music generation with ACE-Step, mastering, an animated cover, and the final video, for single tracks and long playlists.',
    categories: ['Music automation', 'Music production', 'Video rendering'],
    stack: ['Music automation', 'Music production', 'Video rendering'],
    technologies: ['Python', 'Gradio', 'ACE-Step', 'Demucs', 'FFmpeg'],
    shotShape: 'landscape',
    mobileShots: [
      '/assets/projects/automation/02-cancion.webp',
      '/assets/projects/automation/07-video.webp',
    ],
    gallery: [
      { src: '/assets/projects/automation/01-idea.webp', caption: 'Idea: describe the track and generate the song prompts' },
      { src: '/assets/projects/automation/02-cancion.webp', caption: 'Song: project, caption, lyrics, BPM and key, then generate the takes' },
      { src: '/assets/projects/automation/03-master.webp', caption: 'Master: compare the chosen take before and after mastering, check its pitch with the tuner, and repaint any section that drifts off key' },
      { src: '/assets/projects/automation/04-playlist.webp', caption: 'Playlist: every track mastered, with the take used in the mix' },
      { src: '/assets/projects/automation/05-mix.webp', caption: 'Mix: crossfade or silence between tracks, fades and chapter timestamps' },
      { src: '/assets/projects/automation/06-portada.webp', caption: 'Cover: upload the ChatGPT image, then animate it' },
      { src: '/assets/projects/automation/07-video.webp', caption: 'Final video: the animated loop repeated for the full mix' },
    ],
    status: 'experimental',
  },
  {
    id: 'photography-site',
    visibility: 'public',
    title: 'Photography Portfolio',
    description: 'Visual portfolio for photography work and personal projects.',
    categories: ['Portfolio', 'Photography'],
    stack: ['Portfolio', 'Photography'],
    image: '/assets/projects/photography-site.jpg',
    link: 'https://photo.ctorres.lat/',
    status: 'completed',
  },
];
