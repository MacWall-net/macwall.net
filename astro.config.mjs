import { defineConfig } from 'astro/config';
 
export default defineConfig({
  site: 'https://macwall.net',
  base: process.env.BASE_PATH ?? '/',
});
