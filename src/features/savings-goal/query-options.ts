import { queryOptions } from '@tanstack/vue-query'
import { getSavingsGoal } from './api'

export const getSavingsGoalQueryOptions = (savingsGoalId: number) =>
  queryOptions({
    queryKey: ['savings-goals', 'detail', savingsGoalId],
    queryFn: () => getSavingsGoal(savingsGoalId),
    suspense: true,
  })
