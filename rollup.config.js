import terser from '@rollup/plugin-terser';

export default {
  input: './index.mjs', // Entry point of your library
  output: [
    {
      file: 'dist/omniutils.umd.js', // UMD format (browser and Node.js)
      format: 'umd',
      name: 'OmniUtils', // Global variable name in browsers
      sourcemap: true,
    },
    {
      file: 'dist/omniutils.esm.js', // ESM format
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/omniutils.cjs.js', // CJS format
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [terser()], // Minify the bundle
};