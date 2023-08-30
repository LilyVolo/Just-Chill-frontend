import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests starting with "/gapi" to the Google Places API
      '/gapi': {
        target: 'https://maps.googleapis.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gapi/, ''), // Remove "/gapi" prefix
      },
      '/api': {
        target: 'http://localhost:5005/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove "/gapi" prefix
      },
    },
  },
})
