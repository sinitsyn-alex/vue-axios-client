import Vue from 'vue'
import Vuex from 'vuex'
import { MUTATION_TYPE, ACTION_TYPE } from '@/vuex-request/store/vuex-request-store.const'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    [MUTATION_TYPE.SET_USERS] (state, users) {
      state.users = users
    }
  },
  actions: {
    async [ACTION_TYPE.GET_USERS] ({ commit }, request) {
      const response = await request()
      commit(MUTATION_TYPE.SET_USERS, response.data)
    }
  }
})

export default store
