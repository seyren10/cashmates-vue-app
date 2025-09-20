import type { RouteRecordRaw } from 'vue-router'
import { savingsGoalRoutes } from './savings-goal/router'

export const groupRoutes: RouteRecordRaw = {
  path: 'groups',
  children: [
    {
      path: '',
      name: 'groups.index',
      component: () => import('@/pages/groups/GroupIndex.vue'),
    },
    {
      path: ':groupId',
      name: 'groups.detail',
      components: {
        default: () => import('@/pages/groups/details/GroupDetailIndex.vue'),
        header: () => import('@/pages/groups/details/GroupDetailHeader.vue'),
      },
      props: true,
      children: [savingsGoalRoutes],
    },
  ],
}
