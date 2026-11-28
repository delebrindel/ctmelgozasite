export interface PackageTier {
  name: string;
  /** Engagement type shown above the title, e.g. "Project based". */
  kind: string;
  /** One-line promise shown under the title. */
  tagline?: string;
  /** Headline price or pricing model, shown on the card. */
  price?: string;
  /** Approximate local-currency equivalent; the exchange rate moves, so keep it marked as approximate. */
  priceApprox?: string;
  /** Short scope caveat shown under the price. */
  priceNote?: string;
  /** Machine-readable offer for structured data (only when there is a fixed starting price). */
  offer?: { amount: string; currency: string };
  /** Label above the bullet list, when the list is a deliverables list. */
  includesLabel?: string;
  desc: string;
  bullets: string[];
  /** Who the service is for, shown on the service page. */
  audience?: string[];
  /** Ordered steps of the engagement. */
  steps?: string[];
  /** What the client provides. */
  needs?: string[];
  /** Typical timeline. */
  duration?: string;
  faq?: { q: string; a: string }[];
  cta: string;
  slug: string;
  projectIds: string[];
}

export const packages = {
  title: 'Software engineering services',
  intro: 'Bring in senior engineering support for a focused assessment, a delivery initiative, or ongoing platform work.',
  tiers: [
    {
      name: 'Independent Technical Diagnostic', kind: 'Pilot · limited scope',
      desc: 'An independent technical diagnostic for web applications and SaaS platforms.',
      includesLabel: 'What you receive',
      bullets: [
        'Architecture assessment',
        'Technical debt register',
        'Risk classification',
        'Prioritized recommendations',
        'Executive summary',
        'Technical roadmap',
      ],
      price: 'From $200 USD',
      priceApprox: '≈ $3,600 MXN',
      priceNote: 'Pilot price for one application and one repository, with a final written report. Not an unlimited audit.',
      offer: { amount: '200', currency: 'USD' },
      audience: [
        "You inherited a codebase and want an honest outside view before investing more in it.",
        "A rewrite is on the table and you want evidence before you decide.",
        "Releases are slow or risky and nobody can say exactly why.",
        "You are about to onboard a new team, raise money, or sell, and need to know what is in the code.",
      ],
      steps: [
        "A free 20-minute call to confirm the application, the goals, and the questions the report must answer.",
        "You give me read-only access to the repository and any existing documentation.",
        "I review the architecture, code, dependencies, tests, and build and deploy setup.",
        "You receive the written report, and we walk through it together in a call.",
      ],
      needs: [
        "Read-only access to one repository.",
        "Existing documentation or diagrams, if there are any.",
        "One person who knows the system and can answer questions during the review.",
      ],
      duration: "Typically 1–2 weeks from repository access to the final report.",
      faq: [
        { q: "Do you need access to production?", a: "No. Read-only access to the repository is enough. I don’t need credentials, secrets, or customer data." },
        { q: "Will you sign an NDA?", a: "Yes. I can sign your NDA before getting access to the code." },
        { q: "What if we have more than one repository?", a: "The pilot price covers one application and one repository. Additional repositories are quoted separately." },
        { q: "What happens after the report?", a: "Your team can carry out the roadmap on its own, or we can turn the top priorities into a Legacy Modernization Sprint." },
      ],
      cta: 'Request a diagnostic', slug: 'technical-diagnostic', projectIds: [],
    },
    {
      name: 'Legacy Modernization Sprint', kind: 'Project based',
      tagline: 'Improve what you already have.',
      desc: 'Reduce technical risk and improve the maintainability of existing applications through focused engineering initiatives.',
      bullets: [
        'Architecture improvements',
        'Dependency modernization',
        'Code quality and maintainability',
        'Performance and reliability',
        'Testing improvements',
      ],
      price: 'Custom scope',
      priceNote: 'Quoted after an initial technical assessment.',
      audience: [
        "Dependencies are years out of date and upgrades keep getting postponed.",
        "Deploys are slow, manual, or fragile.",
        "A legacy stack (a PHP monolith, Vue 2, AngularJS, an old Node.js version) blocks new features.",
        "You want to modernize step by step, without a big-bang rewrite.",
      ],
      steps: [
        "A technical assessment, or an existing Diagnostic, to choose the highest-impact work.",
        "We agree on a fixed scope, a sequence, and what “done” means, in writing.",
        "I work in short iterations alongside your team, with pull requests your developers review.",
        "Handover: documentation, tests, and a walkthrough so your team owns the result.",
      ],
      needs: [
        "Access to the repository and a staging environment.",
        "A technical counterpart on your side.",
        "Agreement on how code is reviewed and deployed.",
      ],
      duration: "Set during the assessment. Each sprint has a fixed scope and end date before work starts.",
      faq: [
        { q: "Do you rewrite systems from scratch?", a: "Rarely. I prefer incremental migration, replacing parts of the system while it stays in production, as I did when moving 12 platforms off a PHP monolith." },
        { q: "Which stacks do you work with?", a: "PHP and Laravel, Node.js, NestJS and Express, React, Next.js, Vue, and Angular, plus Docker, Kubernetes, and AWS." },
        { q: "Do we need the Diagnostic first?", a: "No, but I need an initial technical assessment to quote the sprint. If you already did the Diagnostic, that is the assessment." },
        { q: "Will our team be able to maintain the result?", a: "That is the goal. Your developers review the pull requests, and the handover includes documentation and tests." },
      ],
      cta: 'Discuss modernization', slug: 'legacy-modernization', projectIds: ['migration-tool'],
    },
    {
      name: 'Fractional Engineering Leadership', kind: 'Ongoing engagement',
      tagline: 'Senior engineering guidance without a full-time hire.',
      desc: 'Help your team make better technical decisions, improve delivery practices, and move product initiatives forward.',
      bullets: [
        'Architecture and technical direction',
        'Engineering standards and code reviews',
        'Technical planning and prioritization',
        'AI-assisted development workflows',
        'Mentoring and engineering guidance',
      ],
      price: 'Monthly engagement',
      priceNote: 'Defined availability and monthly scope.',
      audience: [
        "You don’t have a senior engineer or CTO yet, but you are making architecture decisions.",
        "Your team is growing and needs shared standards and consistent code reviews.",
        "You are a non-technical founder and need someone to turn business goals into a technical plan.",
        "You want to adopt AI-assisted development without losing code quality.",
      ],
      steps: [
        "An intro call to understand the team, the product, and the goals.",
        "We define the monthly scope and availability: hours, recurring meetings, and response times.",
        "Recurring work: code reviews, technical planning, architecture decisions, and mentoring.",
        "A monthly review of progress, and an adjustment of the scope for the next month.",
      ],
      needs: [
        "Access to the repository and the team’s chat (Slack, Teams, or similar).",
        "An invitation to the planning meetings that matter.",
        "A business decision-maker I can align priorities with.",
      ],
      duration: "Monthly engagement, reviewed at the end of each month.",
      faq: [
        { q: "Is this a full-time role?", a: "No. You get senior guidance for a defined number of hours each month, without a full-time hire." },
        { q: "What time zone do you work in?", a: "I’m based in Mexico (UTC−6), which overlaps with business hours across the Americas and the afternoon in Europe." },
        { q: "Do you also write code?", a: "Yes, when it helps: a proof of concept, a critical refactor, or a reference implementation for the team." },
        { q: "Can we start with something smaller?", a: "Yes. The Independent Technical Diagnostic is a good first step to see how we work together." },
      ],
      cta: 'Discuss fractional leadership', slug: 'fractional-engineering-leadership', projectIds: ['raffoom-platform', 'ui-library'],
    },
  ] satisfies PackageTier[],
};
