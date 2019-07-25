const VALIDATOR_WARN_MSG = '[VueAxiosClient warn]: Invalid prop: type check failed for prop "config". Expected Object'

function isPlainObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export default {
  name: 'AxiosRequest',
  props: {
    axios: {
      type: Function
    },
    config: {
      required: true,
      validator (value) {
        // object or CommonJS module default
        value = value && (value.default || value)
        const isValid = isPlainObject(value)

        if (!isValid) {
          console.warn(VALIDATOR_WARN_MSG)
        }
        return isValid
      }
    },
    lazy: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    },
    transformData: {
      type: Function,
      default: data => data
    }
  },
  computed: {
    axiosInstance () {
      // axios prop or axios option in install plugin
      return this.axios || this.$axios
    },
    axiosRequestConfig () {
      // object or CommonJS module default
      return this.config && (this.config.default || this.config)
    }
  },
  data () {
    return {
      result: {
        data: null,
        error: null,
        fullData: null,
        loading: false
      }
    }
  },
  methods: {
    async request () {
      try {
        this.result.error = null
        this.result.loading = true
        this.$emit('loading', this.result.loading)

        const response = await this.axiosInstance.request(this.axiosRequestConfig)
        this.result.data = this.transformData(response.data)
        this.result.fullData = response.data
        this.$emit('success', response)

        return response
      } catch (e) {
        this.result.error = e
        this.$emit('error', e)

        throw e
      } finally {
        this.result.loading = false
        this.$emit('loading', this.result.loading)
      }
    }
  },
  created () {
    if (!this.lazy) {
      this.request()
    }
  },
  render (h) {
    let result = this.$scopedSlots.default({
      request: this.request,
      result: this.result
    })

    if (Array.isArray(result)) {
      result = result.concat(this.$slots.default)
    } else {
      result = [result].concat(this.$slots.default)
    }
    return this.tag ? h(this.tag, result) : result[0]
  }
}
