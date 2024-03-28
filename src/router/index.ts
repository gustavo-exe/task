import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '@/views/LoginView.vue'
import LayoutComponentVue from '@/layout/LayoutComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutComponentVue
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    }
  ]
})

export default router
