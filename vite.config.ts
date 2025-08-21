import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // correct base for root deployment
  optimizeDeps: {
    exclude: ['lucide-react'], // keep excluded deps if needed
  },
  build: {
    target: 'esnext', // ensures modern JS output
    rollupOptions: {
      output: {
        // preserve module structure for Vercel
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  server: {
    fs: {
      strict: false, // allows Vite to serve files outside root if needed
    },
  },
});
