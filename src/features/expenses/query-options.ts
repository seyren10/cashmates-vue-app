import { queryOptions } from '@tanstack/vue-query'
import type { SavingsGoalId } from '../savings-goal/type'
import { getExpenses } from './api'

export const getExpensesQueryOptions = (savingsGoalId: SavingsGoalId) =>
  queryOptions({
    queryKey: ['savings-goals', 'detail', savingsGoalId, 'expenses', 'list'],
    queryFn: () => getExpenses(savingsGoalId),
    suspense: true,
  })
