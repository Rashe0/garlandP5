<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <LoginButton>
      </LoginButton>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import LoginButton from './components/LoginButton.vue';

export default {
  components: {
    LoginButton
  }
};
</script>
