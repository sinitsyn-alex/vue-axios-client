import Vue from 'vue'
import App from './simple-request/App.vue'
import axios from 'axios'
import VueAxiosClient, { AxiosRequest } from '../src'

const vueAxiosClient = new VueAxiosClient({ axios })

Vue.use(vueAxiosClient)
Vue.component('AxiosRequest', AxiosRequest)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
