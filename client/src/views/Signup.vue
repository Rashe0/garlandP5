<template>
<v-app>
  <form @submit="this.submitForm" id="loginForm">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="email">Login:</label><br>
    <input type="text" id="email" name="email"><br>
    <label for="pass">Password:</label><br>
    <input type="password" id="password" name="password">
    <input type="submit">
  </form>
</v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Signup',
  methods: {
    submitForm(event) {
      event.preventDefault();
      const formData = new FormData(document.getElementById('loginForm'));
      axios.post('https://garland.xyz/api/users', {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
      }).then((response) => {
        document.cookie = 'token=' + response.data; //eslint-disable-line
        console.log(response);
        location.href = '/'; //eslint-disable-line
      });
    }
  },
};
</script>

<style>

</style>
