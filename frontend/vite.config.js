import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy requests prefixed '/api'
    proxy: {
      // Remove the proxy setup for production
      proxy: null,
    },
    // port: 5173,
  },
});
