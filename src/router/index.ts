import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

interface RoutesType {
  path: string;
  name: string;
  component: () => {};
}

const routes: RoutesType[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
