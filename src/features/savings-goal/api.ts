import { httpClient } from '@/services/axios/axios'
import type { GroupId } from '../groups/type'
import {
  type SavingsGoal,
  type CreateSavingsGoalPayload,
  type SavingsGoalDetail,
  type SavingsGoalId,
  type UpdateSavingsGoalPayload,
} from './type'

export const getSavingsGoal = async (savingsGoalId: SavingsGoalId) => {
  const res = await httpClient.get<SavingsGoalDetail>(`/api/savings-goals/${savingsGoalId}`)
  return res.data
}

export const createSavingsGoal = async (groupId: GroupId, payload: CreateSavingsGoalPayload) => {
  const res = await httpClient.post<SavingsGoal>(`/api/groups/${groupId}/savings-goals`, payload)
  return res.data
}

export const updateSavingsGoal = async (
  savingsGoalId: SavingsGoalId,
  payload: UpdateSavingsGoalPayload,
) => {
  const res = await httpClient.put<SavingsGoal>(`/api/savings-goals/${savingsGoalId}`, payload)
  return res.data
}
export const deleteSavingsGoal = async (savingsGoalId: SavingsGoalId) => {
  await httpClient.delete(`/api/savings-goals/${savingsGoalId}`)
}
