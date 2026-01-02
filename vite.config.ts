import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * ============================================
 * VITE BUILD CONFIGURATION
 * ============================================
 * 
 * OPTIMIZATION FEATURES:
 * - Code splitting for better performance
 * - Asset optimization and hashing for cache busting
 * - Modern JavaScript output (ESNext) for smaller bundles
 * - Chunking strategy for optimal loading
 * 
 * PERFORMANCE TIPS:
 * - Use dynamic imports for large components/dependencies
 * - Enable gzip/brotli compression on your server
 * - Configure proper cache headers (see vercel.json)
 * - Monitor bundle size with: npm run build -- --report
 */
export default defineConfig({
  plugins: [react()],
  
  // Base public path (use '/' for root deployment, '/repo-name/' for GitHub Pages)
  base: '/',
  
  // Dependency optimization
  optimizeDeps: {
    // Exclude dependencies that should not be pre-bundled
    exclude: ['lucide-react'],
    
    // Include dependencies that might be missing
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  
  build: {
    // Target modern browsers (ES2020+)
    // Change to 'es2015' or 'modules' if you need to support older browsers
    target: 'esnext',
    
    // Source maps for production debugging (disable for smaller builds)
    sourcemap: false, // Set to true if you need source maps in production
    
    // Chunk size warning limit (in KB)
    chunkSizeWarningLimit: 1000,
    
    // Minification options
    minify: 'esbuild', // Faster than terser, good enough for most cases
    
    // CSS code splitting
    cssCodeSplit: true,
    
    rollupOptions: {
      output: {
        // File naming with content hashing for cache busting
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion'],
          'map-vendor': ['leaflet', 'react-leaflet'],
          // Analytics can be split if it's a large dependency
          // 'analytics': ['react-ga4', '@vercel/analytics/react'],
        },
      },
    },
    
    // Report compressed and uncompressed sizes
    reportCompressedSize: true,
    
    // Reduce console output during build
    // Set to 'error' to only show errors
    logLevel: 'info',
  },
  
  server: {
    // File system options
    fs: {
      strict: false, // Allows Vite to serve files outside root if needed
    },
    
    // Development server port
    port: 5173,
    
    // Enable HTTPS in development (optional)
    // https: true,
  },
  
  // Preview server configuration (for testing production builds)
  preview: {
    port: 4173,
    // preview: {
    //   https: true, // Enable HTTPS for preview
    // },
  },
});
