import type { RouteRecordRaw } from 'vue-router'

export const groupRoutes: RouteRecordRaw = {
  path: 'groups',
  name: 'groups',
  component: () => import('@/pages/groups/GroupIndex.vue'),
}
