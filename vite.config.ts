import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// vite build configuration with code splitting and optimizations
export default defineConfig({
  plugins: [react()],
  
  base: '/',
  
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  
  build: {
    target: 'esnext',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    cssCodeSplit: true,
    
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion'],
          'map-vendor': ['leaflet', 'react-leaflet'],
        },
      },
    },
    
    reportCompressedSize: true,
    logLevel: 'info',
  },
  
  server: {
    fs: {
      strict: false,
    },
    port: 5173,
  },
  
  preview: {
    port: 4173,
  },
});

