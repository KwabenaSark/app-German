import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 👈 Important: ensures relative paths for assets
  build: {
    chunkSizeWarningLimit: 1000,
  },
})