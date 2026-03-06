export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  stack: string[];
  description: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "necodex",
    role: "Senior Web Developer",
    company: "Necodex",
    period: "10/2025 – Present",
    stack: ["React", "Node.js", "TypeScript"],
    description: [
      "Develop and maintain scalable full-stack applications",
      "Translate product requirements into clean, maintainable solutions",
      "Collaborate asynchronously to deliver production-ready features",
      "Improve performance, reliability, and developer experience"
    ]
  },
  {
    id: "raffoom",
    role: "Senior Web Developer / Technical Lead",
    company: "Raffoom Digital",
    period: "10/2021 – 10/2025",
    stack: ["React", "Node.js", "PHP", "Microservices"],
    description: [
      "Designed reusable UI component libraries used across internal platforms",
      "Built and maintained back-office systems for gaming applications",
      "Improved stability and release velocity via CI/CD and automated testing",
      "Remained hands-on in architecture and implementation"
    ]
  },
  {
    id: "rank",
    role: "Senior Web Developer",
    company: "Rank Interactive",
    period: "10/2018 – 10/2021",
    stack: ["Angular", "Node.js", "Microservices"],
    description: [
      "Migrated 12 high-traffic platforms from legacy stacks to modern microservices",
      "Designed APIs supporting high concurrency and traffic spikes",
      "Coordinated deployments with minimal downtime"
    ]
  },
  {
    id: "cenfes",
    role: "Senior Web Developer",
    company: "CENFES A.C.",
    period: "05/2016 – 10/2018",
    stack: ["PHP", "Vue.js"],
    description: [
      "Migrated legacy Perl systems to modern PHP + Vue.js architectures",
      "Introduced CI practices and optimized frontend performance"
    ]
  },
  {
    id: "telmex",
    role: "Web Developer",
    company: "Telmex / IIE",
    period: "2010 – 2016",
    stack: ["Full Stack", "Performance", "Maintenance"],
    description: [
      "Frontend and backend development for high-availability platforms",
      "Focused on performance, maintainability, and cross-browser compatibility"
    ]
  }
];

export const CORE_SKILLS = [
  "React", "TypeScript", "Node.js", "REST APIs", "Microservices", 
  "CI/CD", "Performance Optimization", "JavaScript (ES6+)",
  "HTML", "CSS / SCSS", "PHP (Laravel)", "Automated Testing", "Git", "Agile / Scrum"
];

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  stack: string[];
  link?: string;
  github?: string;
  status: 'completed' | 'in-progress' | 'archived';
}

export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    id: "sanders-mantilla",
    title: "Saanders y Mantilla Website",
    description: "Website for a translation agency. Features multilanguage and lightweight components.",
    stack: ["Vue", "PHP", "Microservices"],
    link: "https://www.sandersymantilla.com/",
    status: 'completed'
  },
  {
    id: "raffoom-platform",
    title: "Raffoom Website",
    description: "The main product platform for Raffoom Digital. Architected the frontend systems and internal tools that power this gaming experience.",
    stack: ["React", "Node.js", "PHP", "Microservices"],
    link: "https://www.raffoom.com/",
    status: 'completed'
  },
  {
    id: "backoffice-system",
    title: "Ghost Back-Office System",
    description: "A comprehensive internal dashboard for managing gaming operations. Features real-time data visualization, user management, and automated reporting.",
    stack: ["React", "Node.js", "Microservices", "Socket.io"],
    status: 'completed'
  },
  {
    id: "ui-library",
    title: "Internal UI Component Lib",
    description: "A shared component library built to standardize UI/UX across multiple internal platforms. Focused on accessibility and performance.",
    stack: ["TypeScript", "React", "Storybook", "Tailwind"],
    status: 'completed'
  },
  {
    id: "migration-tool",
    title: "Legacy Migration Orchestrator",
    description: "Automated tooling to assist in the migration of 12 high-traffic platforms from legacy Perl stacks to modern Node.js microservices.",
    stack: ["Node.js", "Docker", "Shell", "AWS"],
    status: 'completed'
  },
  {
    id: "portfolio-site",
    title: "Dev Portfolio V2",
    description: "The current website you are viewing. Built with a 'Narrative Terminal' aesthetic to showcase creative engineering.",
    stack: ["React", "Vite", "Tailwind v4", "Zustand"],
    link: "https://ctorres.lat/",
    github: "https://github.com/delebrindel/ctmelgozasite",
    status: 'in-progress'
  },
  {
    id: "photography-site",
    title: "Photography Portfolio",
    description: "A showcase of my photography work. Capturing moments and stories through the lens.",
    stack: ["Photography", "Creative", "Visual Arts"],
    link: "https://photo.ctorres.lat/",
    status: 'completed'
  }
];
