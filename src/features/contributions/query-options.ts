import { queryOptions } from '@tanstack/vue-query'
import type { SavingsGoalId } from '../savings-goal/type'
import { getContribution, getContributionComments, getContributions } from './api'
import type { ContributionId } from './type'

export const getContributionsQueryOptions = (savingsGoalId: SavingsGoalId) =>
  queryOptions({
    queryKey: ['savings-goals', 'detail', savingsGoalId, 'contributions', 'list'],
    queryFn: () => getContributions(savingsGoalId),
  })

export const getContributionQueryOptions = (contributionId: ContributionId) =>
  queryOptions({
    queryKey: ['contributions', 'detail', contributionId],
    queryFn: () => getContribution(contributionId),
  })

export const getContributionCommentsQueryOptions = (contributionId: ContributionId) =>
  queryOptions({
    queryKey: ['contributions', 'detail', contributionId, 'comments'],
    queryFn: () => getContributionComments(contributionId),
  })
