import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AiringToday from '../views/AiringToday.vue';
import OnTheAir from '../views/OnTheAir.vue';
import TopRated from '../views/TopRated.vue';

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
  {
    path: '/on-the-air',
    name: 'OnTheAir',
    component: OnTheAir,
  },
  {
    path: '/top-rated',
    name: 'TopRated',
    component: TopRated,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
