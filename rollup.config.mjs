import terser from '@rollup/plugin-terser';

//import rolluppluginTerser from 'https://cdn.jsdelivr.net/npm/@rollup/plugin-terser@0.4.4/+esm';debugger;

export default [
  {
    input: './src/html-dom.js',
    output: {
      //dir: 'dist',
      file: 'dist/html-dom.min.js',
      format: 'es', // Use ES module format,
      //chunkFileNames: '[name]-[hash].js'
    },
    plugins: [
      terser(), // Minify the output bundle
    ],
  },
];

//run code -->
//npx rollup -c rollup.config.js
//or
//npx rollup -c