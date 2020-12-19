<template>
  <button v-if="!this.isLoggedIn()" @click="this.login">
    Login
  </button>
  <span v-else>
    Welcome {{this.username()}}!
  </span>
</template>

<script>
import cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

export default {
  name: 'LoginButton',
  methods: {
    login() {
      // location.href = '/login'; //eslint-disable-line
      this.$router.push('/login');
    },
    isLoggedIn() {
      return cookies.get('token');
    },
    username() {
      return jwt.decode(cookies.get('token')).name;
    }
  }
};
</script>

<style>

</style>
