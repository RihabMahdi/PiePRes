import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PiePRes/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      external: ['html-docx-js'], // Mark html-docx-js as an external dependency
    },
  },

})

