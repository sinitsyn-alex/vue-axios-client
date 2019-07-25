import Vue from 'vue'
import App from './simple-request/App.vue'
import axios from 'axios'
import VueAxiosClient from '../src'

Vue.use(VueAxiosClient, { axios })
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
