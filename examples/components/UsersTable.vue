<template>
  <table class="users-table">
    <thead>
    <tr>
      <td>ID</td>
      <td>Login</td>
      <td>Url</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in users" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.login }}</td>
      <td>{{ user.url }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UsersTable',
  props: {
    users: Array
  }
}
</script>

<style scoped>
  .users-table {
    margin: 0 auto;
  }
</style>
