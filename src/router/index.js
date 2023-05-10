import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home.vue'
import Traffic from '@/pages/traffic.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        index: 1
      }
    },
    {
      path: '/traffic',
      name: 'traffic',
      component: Traffic,
      meta: {
        index: 1
      }
    },
  ]
})
export default router
