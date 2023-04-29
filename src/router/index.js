import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/home.vue'

const router = createRouter({
  history: createWebHashHistory(),
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

  ]
})
console.log(1111)
export default router