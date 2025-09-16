import MainLayout from '@/layouts/MainLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from '../pages/auth/routes'
import { groupRoutes } from '@/pages/groups/routes'
import { useNavigationStore } from '@/stores/navigation'
import { storeToRefs } from 'pinia'
import { useNavigation } from '@/composables/use-navigation'

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
  ],
})

router.beforeEach(() => {
  const { isPending } = useNavigation()
  isPending.value = true
})

router.afterEach(() => {
  const { isPending } = useNavigation()
  isPending.value = false
})

export default router
