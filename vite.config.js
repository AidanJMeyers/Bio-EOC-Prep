import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Bio-EOC-Prep/',
  build: { outDir: 'dist' }
});
