import { httpClient } from '@/services/axios/axios'
import type { Contribution, ContributionDetail, ContributionId } from './type'
import type { SavingsGoalId } from '../savings-goal/type'
import type { Comment } from '../comments/type'

export const getContributions = async (savingsGoalId: SavingsGoalId) => {
  const res = await httpClient.get<Contribution[]>(
    `/api/savings-goals/${savingsGoalId}/contributions`,
  )
  return res.data
}

export const getContribution = async (contributionId: ContributionId) => {
  const res = await httpClient.get<ContributionDetail>(`/api/contributions/${contributionId}`)
  return res.data
}

export const getContributionComments = async (contributionId: ContributionId) => {
  const res = await httpClient.get<Comment[]>(`/api/contributions/${contributionId}/comments`)
  return res.data
}
