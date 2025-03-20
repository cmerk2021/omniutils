// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.cjs',
  output: {
    file: 'index.umd.js',
    format: 'umd',
    name: 'OmniUtils',
    exports: 'named',
  },
  plugins: [
    resolve(),
    commonjs(),
  ],
};