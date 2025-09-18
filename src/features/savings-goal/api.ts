import { httpClient } from '@/services/axios/axios'
import type { SavingsGoalDetail } from './type'

export const getSavingsGoal = async (savingsGoalId: number) => {
  const res = await httpClient.get<SavingsGoalDetail>(`/api/savings-goals/${savingsGoalId}`)
  return res.data
}
