import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  dotenv.config({ path: `.env.${mode}` }); // Load the correct .env file based on the mode

  return {
    plugins: [react()],
    server: {
      port: process.env.VITE_PORT,
      proxy: {
        '/api': {
          target: process.env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
      host: true, // Allows access to subdomains
    },
  };
});
