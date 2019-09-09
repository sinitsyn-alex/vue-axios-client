<template>
  <div id="app">
    <AxiosRequest
      :config="require('@/api/getUsers')"
      @success="successHandler"
      @error="errorHandler"
      lazy
    >
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

export default {
  name: 'app',
  components: {
    UsersTable
  },
  methods: {
    async lazyRequest (request) {
      const axiosResponse = await request()
      console.log(axiosResponse)
    },
    successHandler (axiosResponse) {
      console.log('successHandler', axiosResponse)
    },
    errorHandler (error) {
      console.log('errorHandler', error)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.error {
  color: red;
}
</style>
