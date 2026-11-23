import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ctorres.lat',
  // English is the default and unprefixed; Spanish lives under /es/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', es: 'es-MX' } },
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
