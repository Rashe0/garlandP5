<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <LoginButton>
      </LoginButton>
      <LogoutButton>
      </LogoutButton>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import LoginButton from './components/LoginButton.vue';
import LogoutButton from './components/LogoutButton.vue';

export default {
  components: {
    LoginButton,
    LogoutButton
  }
};
</script>
