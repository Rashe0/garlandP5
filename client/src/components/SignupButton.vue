<template>
  <button @click="this.signup">
    Signup
  </button>
</template>

<script>
// import cookies from 'js-cookie';
// import jwt from 'jsonwebtoken';

export default {
  name: 'SignupButton',
  methods: {
    signup() {
      // location.href = '/login'; //eslint-disable-line
      this.$router.push('/signup');
    }
    // isLoggedIn() {
    //   return cookies.get('token');
    // },
    // username() {
    //   return jwt.decode(cookies.get('token')).name;
    // }
  }
};
</script>

<style>

</style>
