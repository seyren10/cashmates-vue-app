import { httpClient } from '@/services/axios/axios'
import type { Contribution } from './type'
import type { SavingsGoalId } from '../savings-goal/type'

export const getContributions = async (savingsGoalId: SavingsGoalId) => {
  const res = await httpClient.get<Contribution[]>(
    `/api/savings-goals/${savingsGoalId}/contributions`,
  )
  return res.data
}
