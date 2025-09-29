import { httpClient } from '@/services/axios/axios'
import type {
  Contribution,
  ContributionDetail,
  ContributionId,
  CreateContributionPayload,
  UpdateContributionPayload,
} from './type'
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

export const createContribution = async (
  savingsGoalId: SavingsGoalId,
  payload: CreateContributionPayload,
) => {
  const res = await httpClient.post<Contribution>(
    `/api/savings-goals/${savingsGoalId}/contributions`,
    payload,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )
  return res.data
}

export const updateContribution = async (
  contributionId: ContributionId,
  payload: UpdateContributionPayload,
) => {
  const res = await httpClient.post<Contribution>(
    `/api/contributions/${contributionId}`,
    { ...payload, _method: 'PUT' },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )
  return res.data
}
export const deleteContribution = async (contributionId: ContributionId) => {
  await httpClient.delete(`/api/contributions/${contributionId}`)
}
