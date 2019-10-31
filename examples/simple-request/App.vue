<template>
  <div id="app">
    <axios-request
      :config="require('@/api/user-service').read()"
      @success="successHandler"
      @error="errorHandler"
    >
      <template v-slot="{ result: { isLoading, error, data } }">
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
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
