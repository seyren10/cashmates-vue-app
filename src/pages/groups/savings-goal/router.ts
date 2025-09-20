import type { RouteRecordRaw } from 'vue-router'

export const savingsGoalRoutes: RouteRecordRaw = {
  path: 'savings-goals',
  children: [
    {
      path: ':savingsGoalId',
      name: 'savings-goal.detail',
      components: {
        default: () => import('./details/SavingsGoalDetailIndex.vue'),
        header: () => import('./SavingsGoalHeader.vue'),
      },
      props: true,
    },
  ],
}
