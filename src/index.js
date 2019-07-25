import AxiosRequest from './components/AxiosRequest'

class VueAxiosClient {
  install (Vue, options) {
    if (options.axios) {
      Object.defineProperty(Vue.prototype, '$axios', {
        get () { return options.axios }
      })
    }
    Vue.component('AxiosRequest', AxiosRequest)
  }
}

export { AxiosRequest }
export default new VueAxiosClient()
