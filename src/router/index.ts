import MainLayout from '@/layouts/MainLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from '../pages/auth/routes'
import { groupRoutes } from '@/pages/groups/routes'
import { useNavigation } from '@/composables/use-navigation'
import { useNavigationStore } from '@/stores/navigation'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      redirect: { name: 'groups' },
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

router.beforeEach(() => {
  const navigationStore = useNavigationStore()
  navigationStore.isPending = true
})

router.afterEach(() => {
  const navigationStore = useNavigationStore()
  navigationStore.isPending = false
})

export default router
