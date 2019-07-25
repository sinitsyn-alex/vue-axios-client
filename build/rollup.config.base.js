import babel from 'rollup-plugin-babel'
import cjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

const config = require('../package.json')

export default {
  input: 'src/index.js',
  plugins: [
    resolve({
      mainFields: ['jsnext', 'main'],
      browser: true
    }),
    cjs({
      exclude: 'src/**'
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    replace({
      VERSION: JSON.stringify(config.version)
    })
  ]
}
