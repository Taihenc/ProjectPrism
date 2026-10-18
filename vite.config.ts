import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://taihenc.github.io/ProjectPrism/
export default defineConfig({
  base: '/ProjectPrism/',
  plugins: [react()],
})
