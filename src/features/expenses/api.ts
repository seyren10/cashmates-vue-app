import type { SavingsGoalId } from '../savings-goal/type'
import type { Expense } from './type'

import { httpClient } from '@/services/axios/axios'

export const getExpenses = async (savingsGoalId: SavingsGoalId) => {
  const res = await httpClient.get<Expense[]>(`/api/savings-goals/${savingsGoalId}/expenses`)

  return res.data
}
