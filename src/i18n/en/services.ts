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
        'Analysis of your current architecture',
        'Review of code structure and quality',
        'Identification of technical risks',
        'Assessment of testing and maintainability',
        'AI automation opportunities',
        'Prioritized action plan',
      ],
      price: 'From $200 USD',
      priceApprox: '≈ $3,600 MXN',
      priceNote: 'Pilot price for a small, defined scope. Not an unlimited audit.',
      offer: { amount: '200', currency: 'USD' },
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
      cta: 'Discuss fractional leadership', slug: 'fractional-engineering-leadership', projectIds: ['raffoom-platform', 'ui-library'],
    },
  ] satisfies PackageTier[],
};
