import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    file: 'dist/vue-axios-client.esm.js',
    format: 'es',
    name: 'vue-axios-client',
    exports: 'named'
  }
})

export default config
