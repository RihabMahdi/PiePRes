import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PiePRes/',
  build: {
    outDir: 'docs', // Spécifie que les fichiers de build iront dans "docs"
  },

})

