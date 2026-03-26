import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://damianos-site.netlify.app',
  integrations: [sitemap()],
});
