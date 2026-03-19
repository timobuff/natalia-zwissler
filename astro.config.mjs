import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react(), keystatic()],
  output: 'hybrid',
});
