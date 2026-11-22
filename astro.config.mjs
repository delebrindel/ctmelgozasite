import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ctorres.lat',
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: 'github-dark-default' } },
  // Service pages that were replaced when the packages changed. Static hosting, so these
  // build to small HTML redirect pages instead of server-side 301s.
  redirects: {
    '/services/product-engineering': '/services/fractional-engineering-leadership/',
    '/services/platform-reliability': '/services/legacy-modernization/',
  },
});
