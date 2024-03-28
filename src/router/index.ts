import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '@/views/auth/LoginView.vue'
import LayoutComponentVue from '@/layout/LayoutComponent.vue'
import ListTaskVue from '@/views/Task/ListTask.vue'
import DetailTaskVue from '@/views/Task/DetailTask.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      redirect: 'task',
      component: LayoutComponentVue,
      children: [
        {
          path: 'task',
          name: 'TaskList',
          component: ListTaskVue
        },
        {
          path: 'task/:id',
          name: 'TaskView',
          component: DetailTaskVue
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    }
  ]
})

export default router
