<template>
  <div id="app">
    <axios-request
      :config="require('@/api/user-service').read()"
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
    </axios-request>
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

<style src="@/style.css"></style>
