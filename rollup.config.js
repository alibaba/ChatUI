import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const name = 'ChatUI';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/index.ts',
  external: ['react', 'react-dom'],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      babelHelpers: 'runtime',
      include: ['src/**/*'],
    }),
    terser({
      output: { comments: false },
      compress: { drop_console: true },
    }),
  ],
  output: {
    file: pkg.browser,
    format: 'umd',
    name,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    intro: `exports.version = '${pkg.version}';`,
  },
};
