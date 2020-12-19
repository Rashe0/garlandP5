<template>
<v-main>
  <v-app>
    <form @submit="this.submitForm" id="loginForm">
      <label for="email">Login:</label><br>
      <input type="text" id="email" name="email"><br>
      <label for="pass">Password:</label><br>
      <input type="password" id="password" name="password">
      <input type="submit">
    </form>
  </v-app>
</v-main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  methods: {
    submitForm(event) {
      event.preventDefault();
      const formData = new FormData(document.getElementById('loginForm'));
      axios.post('http://localhost:5000/api/auth', {
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
