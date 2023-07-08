import Vue from 'vue';
import VueRouter from 'vue-router';
import CharactersLayout from '@/views/characters/CharactersLayout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/characters',
    name: 'characters-layout',
    component: CharactersLayout,
    children: [
      {
        path: '',
        name: 'all-characters',
        component: () => import('@/views/characters/AllCharactersView.vue'),
      },
      {
        path: ':id',
        name: 'single-character',
        props: true,
        component: () => import('@/views/characters/SingleCharacterView.vue'),
      },
    ],
  },
  {
    path: '*',
    redirect: { name: 'characters-layout' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
