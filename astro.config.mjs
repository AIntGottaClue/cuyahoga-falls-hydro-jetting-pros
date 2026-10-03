import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://cuyahogafallshydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
