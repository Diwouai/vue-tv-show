import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AiringToday from '../views/AiringToday.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/airing-today',
    name: 'AiringToday',
    component: AiringToday,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
