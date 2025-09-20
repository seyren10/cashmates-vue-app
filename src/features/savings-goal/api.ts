import { httpClient } from '@/services/axios/axios'
import type { SavingsGoalDetail, SavingsGoalId } from './type'

export const getSavingsGoal = async (savingsGoalId: SavingsGoalId) => {
  const res = await httpClient.get<SavingsGoalDetail>(`/api/savings-goals/${savingsGoalId}`)
  return res.data
}
