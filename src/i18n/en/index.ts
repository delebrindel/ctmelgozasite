import { site } from './site';
import { experience, skills, cvSummary, education, languages } from './experience';
import { projects } from './projects';
import { packages } from './services';
import { ui } from './ui';

export const content = { site, experience, skills, cvSummary, education, languages, projects, packages, ui };
export type Content = typeof content;
