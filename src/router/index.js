import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/calelectic',
    name: 'CalElectic',
    component: () => import('../views/CalElectic.vue')
  },
  {
    path: '/calair',
    name: 'CalAir',
    component: () => import('../views/CalAir.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
