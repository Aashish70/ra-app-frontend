import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 5173,      // Optional: default port
  },
  build: {
    minify: true, // Ensure minification is enabled
    sourcemap: false // Ensure sourcemaps are disabled for production
  }
})
