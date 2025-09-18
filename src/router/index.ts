import MainLayout from '@/layouts/MainLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from '../pages/auth/routes'
import { groupRoutes } from '@/pages/groups/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      redirect: { name: 'groups.index' },
      children: [groupRoutes],
    },
    ...authRoutes,
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/components/router/AppErrorPage.vue'),
    },
  ],
})

export default router
