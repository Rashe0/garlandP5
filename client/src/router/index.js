import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
