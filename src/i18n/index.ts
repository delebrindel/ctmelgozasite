import { content as en, type Content } from './en';
import { content as es } from './es';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

const contents: Record<Locale, Content> = { en, es };

/** Resolve the locale from Astro.currentLocale. English is the default and has no URL prefix. */
export function localeOf(currentLocale: string | undefined): Locale {
  return currentLocale === 'es' ? 'es' : 'en';
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'es' : 'en';
}

export function t(locale: Locale): Content {
  return contents[locale];
}

/** Blog posts live in src/content/blog; Spanish posts are in the es/ subfolder (ids "es/<slug>"). */
export function postLocale(id: string): Locale {
  return id.startsWith('es/') ? 'es' : 'en';
}

export function postSlug(id: string): string {
  return id.replace(/^es\//, '');
}

// Localized route prefixes. Spanish uses translated segments under /es/.
export const routes = {
  home: { en: '/', es: '/es/' },
  services: { en: '/services/', es: '/es/servicios/' },
  portfolio: { en: '/portfolio/', es: '/es/portafolio/' },
  cv: { en: '/cv/', es: '/es/cv/' },
  contact: { en: '/contact/', es: '/es/contacto/' },
  blog: { en: '/blog/', es: '/es/blog/' },
  rss: { en: '/rss.xml', es: '/es/rss.xml' },
} as const satisfies Record<string, Record<Locale, string>>;

export function servicePath(locale: Locale, slug: string): string {
  return `${routes.services[locale]}${slug}/`;
}

export function blogPath(locale: Locale, slug: string): string {
  return `${routes.blog[locale]}${slug}/`;
}
