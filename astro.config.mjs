import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

const site = 'https://ctorres.lat';

// English page ↔ Spanish page. Spanish slugs are translated, so the sitemap integration's
// automatic i18n pairing can't match them; list the pairs here and keep them in sync with src/i18n.
const pairs = [
  ['/', '/es/'],
  ['/portfolio/', '/es/portafolio/'],
  ['/cv/', '/es/cv/'],
  ['/contact/', '/es/contacto/'],
  ['/blog/', '/es/blog/'],
  ['/privacy/', '/es/privacidad/'],
  ['/services/technical-diagnostic/', '/es/servicios/diagnostico-tecnico/'],
  ['/services/legacy-modernization/', '/es/servicios/modernizacion-sistemas-legados/'],
  ['/services/fractional-engineering-leadership/', '/es/servicios/liderazgo-tecnico-temporal/'],
];
const alternatesOf = new Map();
for (const [en, es] of pairs) {
  const links = [
    { lang: 'en', url: site + en },
    { lang: 'es', url: site + es },
    { lang: 'x-default', url: site + en },
  ];
  alternatesOf.set(site + en, links);
  alternatesOf.set(site + es, links);
}

// Leave the blog index out of the sitemap until a post in that language is published.
const hasPublishedPost = (dir) => {
  try {
    return readdirSync(dir).some((file) => /\.mdx?$/.test(file) && !/^draft:\s*true\s*$/m.test(readFileSync(`${dir}/${file}`, 'utf8')));
  } catch {
    return false;
  }
};
const emptyBlogs = [
  ...(hasPublishedPost('./src/content/blog') ? [] : [`${site}/blog/`]),
  ...(hasPublishedPost('./src/content/blog/es') ? [] : [`${site}/es/blog/`]),
];

export default defineConfig({
  site,
  // English is the default and unprefixed; Spanish lives under /es/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !emptyBlogs.includes(page) && !/\/services\/(product-engineering|platform-reliability)\/?$/.test(page),
      serialize: (item) => ({ ...item, links: alternatesOf.get(item.url) }),
    }),
  ],
  markdown: { shikiConfig: { theme: 'github-dark-default' } },
  // Service pages that were replaced when the packages changed. Static hosting, so these
  // build to small HTML redirect pages instead of server-side 301s.
  redirects: {
    '/services/product-engineering': '/services/fractional-engineering-leadership/',
    '/services/platform-reliability': '/services/legacy-modernization/',
  },
});
