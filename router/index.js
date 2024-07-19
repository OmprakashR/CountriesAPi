import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/Home.vue';
import CountryDetails from '../src/views/Details.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   
  { path: '/country/:id', name: 'CountryDetails', component: CountryDetails, props: true }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
});

export default router;

