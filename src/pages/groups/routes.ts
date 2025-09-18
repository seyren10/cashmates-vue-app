import type { RouteRecordRaw } from 'vue-router'

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
      component: () => import('@/pages/groups/detail/GroupDetailIndex.vue'),
      props: true,
    },
  ],
}
