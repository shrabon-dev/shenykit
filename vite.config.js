/**
 * This configuration is set up for building the ShenyKit Component Library (not a web application).
 * It compiles JSX/TSX source files into standard distribution formats (ES and UMD).
 */
const path = require('path');
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

// IMPORTANT: We use module.exports = defineConfig() for compatibility with CommonJS imports
// from older build tools and environments.
module.exports = defineConfig({
  // Use the React plugin to handle JSX syntax
  plugins: [react()], 
  
  // 👇 Added resolve.alias so Rollup understands "@"
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },

  build: {
    // Enable "Library Mode" which is essential for bundling
    lib: {
      // CRITICAL FIX: The entry point is now explicitly set to the root index file in the src folder.
      entry: path.resolve(__dirname, 'src/index.js'), 
      
      // The name of the global variable exposed when using UMD format (e.g., in a script tag)
      name: 'ShenyKit', 
      
      // Output filename options
      // This generates two files: index.es.js (ES Module) and index.umd.js (CommonJS/UMD)
      fileName: (format) => `index.${format}.js`,
    },
    
    // Externalize peer dependencies to keep the bundle small
    // The consuming application must provide these dependencies.
    rollupOptions: {
      // Exclude these libraries from the bundle
      external: ['react', 'react-dom', 'tailwindcss', 'next'],
      output: {
        // Global names to use when requiring/imporing externals in UMD format
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      }
    },
    
    // Output directory (matches your package.json's "main" and "module" references)
    outDir: 'dist',
    
    // Create sourcemaps for debugging
    sourcemap: true, 
  }
});
