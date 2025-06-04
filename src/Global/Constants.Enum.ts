export const TECHNOLOGIES = {
  AWS: "AWS",
  AZURE: "Azure",
  DRUPAL: "Drupal",
  JAVASCRIPT: "JavaScript",
  LARAVEL: "Laravel",
  MYSQL: "MySQL",
  NEXT_JS: "Next.js",
  NODE_JS: "Node.js",
  PHP: "PHP",
  POSTGRESQL: "PostgreSQL",
  REACT: "React",
  SQL_SERVER: "SQL Server",
  TYPESCRIPT: "TypeScript",
  WORDPRESS: "WordPress",
  VUE: "Vue.js",
} as const;

export const ROUTES = {
  ABOUT: "ABOUT",
  CV: "CV",
  PORTFOLIO: "PORTFOLIO"
} as const;

export type TECHNOLOGIES = typeof TECHNOLOGIES[keyof typeof TECHNOLOGIES];

export const WORK_EXPERIENCE = [
  {
    dateFrom: "2021-10",
    dateTo: "",
    title: "Technical Lead",
    company: "Raffoom Digital LTD",
    location: "Remote",
    milestones: [
      "Designed and developed a library of UI components that we used in all of the Core Systems for our company, resulting in back-office systems for management of games of skill and raffles",
      "Increased application stability by regularly monitoring performance metrics, addressing bottlenecks proactively to minimize downtime occurrences",
      "Implemented automated testing frameworks, significantly increasing speed and efficiency of software development lifecycle.",
      "Managed a team of 6 developers through different technologies (React, .Net and PHP) services for deployment of Gaming Apps",
    ],
    technicalStack: [
      TECHNOLOGIES.AZURE,
      TECHNOLOGIES.LARAVEL,
      TECHNOLOGIES.NEXT_JS,
      TECHNOLOGIES.NODE_JS,
      TECHNOLOGIES.SQL_SERVER,
      TECHNOLOGIES.TYPESCRIPT,
    ],
  },
  {
    dateFrom: "2018-10",
    dateTo: "2021-10",
    title: "Technical Lead",
    company: "Rank Interactive LTD",
    location: "Remote",
    milestones: [
      "Developed and maintained 12 gambling websites for DAUB GAMING, migrating all websites from a legacy KnockoutJS + PHP architecture to Angular and Node microservices along with React landing pages",
      "Mentored junior developers through regular 1-on-1 meetings, providing guidance on best practices, coding standards, and career growth opportunities.",
      "Implemented continuous integration and deployment strategies for faster release cycles and improved application reliability",
      "Coordinated with stakeholders to define project requirements, ensuring alignment with business goals and customer needs.",
    ],
    technicalStack: [
      TECHNOLOGIES.AWS,
      TECHNOLOGIES.NODE_JS,
      TECHNOLOGIES.PHP,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.SQL_SERVER,
      TECHNOLOGIES.TYPESCRIPT,
    ],
  },
  {
    dateFrom: "2016-05",
    dateTo: "2018-10",
    title: "Senior Web Developer",
    company: "CENFES A.C.",
    location: "Mexico City, Mexico",
    milestones: [
      "Updated technical stack from a legacy Perl based system to a decoupled PHP system with Vue on its front-end, resulting in a more maintainable and scalable architecture.",
      "Streamlined development processes by introducing automation tools and continuous integration practices, reducing deployment time by 50%.",
      "Implemented continuous integration and deployment strategies for faster release cycles and improved application reliability",
      "Mentored 3 junior developers, sharing industry best practices and fostering a culture of continuous learning.",
      "Delivered high-quality documentation for developers, administrators, and end-users to support the ongoing success of projects.",
    ],
    technicalStack: [
      TECHNOLOGIES.LARAVEL,
      TECHNOLOGIES.MYSQL,
      TECHNOLOGIES.PHP,
      TECHNOLOGIES.POSTGRESQL,
      TECHNOLOGIES.VUE,
    ],
  },
  {
    dateFrom: "2013-09",
    dateTo: "2016-05",
    title: "Web Developer",
    company: "Bienestar Social Telmex",
    location: "Mexico City, Mexico",
    milestones: [
      "Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX, and JSON coding.",
      "Provided front-end development support, creating visually appealing designs that aligned with brand standards.",
      "Implemented continuous integration and deployment strategies for faster release cycles and improved application reliability",
      "Enhanced user experience by implementing responsive web design and optimizing website performance.",
      "Oversaw technical issues and troubleshooting requests to resolve user problems",
    ],
    technicalStack: [
      TECHNOLOGIES.DRUPAL,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.LARAVEL,
      TECHNOLOGIES.MYSQL,
      TECHNOLOGIES.WORDPRESS,
    ],
  },
  {
    dateFrom: "2012-01",
    dateTo: "2013-09",
    title: "Web Developer",
    company: "CTIN Telmex",
    location: "Mexico City, Mexico",
    milestones: [
      "Adhered to SEO best practices while designing sites, improving search engine rankings and increasing organic traffic by 30%.",
      "Collaborated with cross-functional teams to deliver high-quality web products on time and within budget.",
      "Oversaw back-end development using PHP to maintain website integrity.",
      "Ran debugging tools to eliminate flaws and glitches prior to publishing.",
      "Introduced version control system, streamlining development workflows and facilitating easier code integration.",
    ],
    technicalStack: [
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.MYSQL,
      TECHNOLOGIES.PHP,
    ],
  },
];
