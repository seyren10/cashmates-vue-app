import { queryOptions } from '@tanstack/vue-query'
import type { SavingsGoalId } from '../savings-goal/type'
import { getContributions } from './api'

export const getContributionsQueryOptions = (savingsGoalId: SavingsGoalId) =>
  queryOptions({
    queryKey: ['savings-goals', 'detail', savingsGoalId, 'contributions', 'list'],
    queryFn: () => getContributions(savingsGoalId),
    suspense: true,
  })
