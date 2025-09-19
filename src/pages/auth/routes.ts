import { guestRouteGuard } from '@/router/guest'
import type { RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/auth/LoginIndex.vue'),
    beforeEnter: guestRouteGuard,
  },
]
