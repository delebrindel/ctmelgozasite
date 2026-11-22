// Backward-compatible data entry point. Import from this module throughout the site.
export { site } from './profile';
export { experience, skills, cvSummary, education, languages } from './experience';
export { projects } from './projects';
export type { Project } from './projects';
export { packages } from './services';
export type { PackageTier } from './services';
