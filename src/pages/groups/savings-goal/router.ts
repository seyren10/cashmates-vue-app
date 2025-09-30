import type { RouteRecordRaw } from 'vue-router'

export const savingsGoalRoutes: RouteRecordRaw = {
  path: 'savings-goals',
  children: [
    {
      path: ':savingsGoalId',
      name: 'savings-goal.detail',
      component: () => import('./details/SavingsGoalDetailIndex.vue'),
      props: true,
      children: [
        {
          path: 'contributions',
          name: 'savings-goal.contributions.index',
          component: () => import('./details/contributions/SavingsGoalContributionIndex.vue'),
          props: (route) => ({
            savingsGoalId: +route.params.savingsGoalId,
          }),
        },
        {
          path: 'expenses',
          name: 'savings-goal.expenses.index',
          component: () => import('./details/expenses/SavingsGoalExpensesIndex.vue'),
          props: (route) => ({
            savingsGoalId: +route.params.savingsGoalId,
          }),
        },
      ],
    },
  ],
}
