<template>
  <div id="app">
    <AxiosRequest :config="require('@/api/getUsers')" lazy>
      <template v-slot="{ request, result: { isLoading, error, data } }">
        <button @click="lazyRequest(request)" :disabled="isLoading">
          {{ isLoading ? 'Loading...' : 'Load Users' }}
        </button>
        <div v-if="error" class="error">{{ error }}</div>
        <UsersTable v-else-if="data" :users="data" />
      </template>
    </AxiosRequest>
  </div>
</template>

<script>
import UsersTable from '@/components/UsersTable'
import store, { ACTION_TYPE } from '@/vuex-request/store'

export default {
  name: 'app',
  components: {
    UsersTable
  },
  methods: {
    lazyRequest (request) {
      store.dispatch(ACTION_TYPE.GET_USERS, request)
    }
  }
}
</script>

<style src="@/style.css"></style>
