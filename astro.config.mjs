import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ctorres.lat',
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: 'github-dark-default' } },
});
