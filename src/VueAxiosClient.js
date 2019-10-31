class VueAxiosClient {
  constructor (options = {}) {
    this.axios = options.axios
  }

  install (Vue) {
    if (this.axios) {
      Object.defineProperty(Vue.prototype, '$axios', {
        get: () => this.axios
      })
    }
  }
}

export default VueAxiosClient
