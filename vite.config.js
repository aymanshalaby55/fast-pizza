import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint({
    cache: false,
    fix: true,
    include: ['src/**/*.{js,jsx,ts,tsx}'],
    exclude: ['node_modules', 'dist']
  })],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
