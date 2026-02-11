import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Make sure this line exists

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Make sure this is inside the plugins array
  ],
  base: '/RKPortfolio/',
})