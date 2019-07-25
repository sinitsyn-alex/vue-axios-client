import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    file: 'dist/vue-axios-client.umd.js',
    format: 'umd',
    name: 'vue-axios-client',
    exports: 'named'
  }
})

export default config
