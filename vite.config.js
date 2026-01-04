import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // Enable fast refresh for better dev experience
      fastRefresh: true,
    })
  ],
  build: {
    // Target modern browsers for better performance
    target: 'es2020',
    rollupOptions: {
      output: {
        // Optimized chunk splitting
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'animation': ['framer-motion'],
          'icons': ['lucide-react'],
          'marquee': ['react-fast-marquee'],
        },
        // Add hash for cache busting
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Enable source maps for debugging (disable in production if needed)
    sourcemap: false,
    // CSS code splitting
    cssCodeSplit: true,
    // Asset inlining threshold (4kb)
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {
    // Pre-bundle these dependencies
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'framer-motion',
      'lucide-react',
      'react-fast-marquee'
    ],
  },
  // Enable caching
  cacheDir: 'node_modules/.vite',
  // Server configuration for development
  server: {
    // Enable HMR
    hmr: true,
    // Pre-transform dependencies
    warmup: {
      clientFiles: [
        './src/App.jsx',
        './src/pages/Home.jsx',
        './src/components/layout/Header.jsx',
        './src/components/layout/Footer.jsx',
      ],
    },
  },
  // CSS configuration
  css: {
    devSourcemap: true,
  },
  // Enable esbuild for faster builds
  esbuild: {
    // Remove legal comments
    legalComments: 'none',
    // Target modern JS
    target: 'es2020',
  },
})

