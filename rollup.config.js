import { minify } from 'rollup-plugin-swc-minify'

export default {
  input: 'lib/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
      sourcemap: true
    },
    {
      file: 'dist/index.min.mjs',
      format: 'es',
      sourcemap: true,
      plugins: [minify()]
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'buildnumgen',
      sourcemap: true
    },
    {
      file: 'dist/index.umd.min.js',
      format: 'umd',
      name: 'buildnumgen',
      sourcemap: true,
      plugins: [minify()]
    }
  ]
}
