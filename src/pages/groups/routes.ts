import { getGroupQueryOptions, getGroupsQueryOptions } from '@/features/groups/query-options'
import { queryClient } from '@/services/tanstack-query/query-client'
import { type RouteRecordRaw } from 'vue-router'
import { savingsGoalRoutes } from './savings-goal/router'

export const groupRoutes: RouteRecordRaw = {
  path: 'groups',
  children: [
    {
      path: '',
      name: 'groups.index',
      component: () => import('@/pages/groups/GroupIndex.vue'),
      beforeEnter: async () => {
        await queryClient.fetchQuery(getGroupsQueryOptions)
      },
    },
    {
      path: ':groupId',
      name: 'groups.detail',
      components: {
        default: () => import('@/pages/groups/details/GroupDetailIndex.vue'),
        header: () => import('@/pages/groups/details/GroupDetailHeader.vue'),
      },
      children: [savingsGoalRoutes],
      props: true,
      beforeEnter: async (to) => {
        const groupId = to.params.groupId
        await queryClient.fetchQuery(getGroupQueryOptions(+groupId))
      },
    },
  ],
}
