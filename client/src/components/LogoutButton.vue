<template>
  <button v-if="this.isLoggedIn()" @click="this.logout">
    Logout
  </button>
  <span v-else>
  </span>
</template>

<script>
import cookies from 'js-cookie';

export default {
  name: 'LogoutButton',
  methods: {
    logout() {
      // location.href = '/login'; //eslint-disable-line
      cookies.remove('token');
      location.href = '/'; //eslint-disable-line
    },
    isLoggedIn() {
      return cookies.get('token');
    },
  }
};
</script>

<style>

</style>
