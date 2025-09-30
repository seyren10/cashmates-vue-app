import type { SavingsGoalId } from '../savings-goal/type'
import type { CreateExpensePayload, Expense, ExpenseId, UpdateExpensePayload } from './type'

import { httpClient } from '@/services/axios/axios'

export const getExpenses = async (savingsGoalId: SavingsGoalId) => {
  const res = await httpClient.get<Expense[]>(`/api/savings-goals/${savingsGoalId}/expenses`)

  return res.data
}

export const createExpense = async (
  savingsGoalId: SavingsGoalId,
  payload: CreateExpensePayload,
) => {
  const res = await httpClient.post<Expense>(
    `/api/savings-goals/${savingsGoalId}/expenses`,
    payload,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )

  return res.data
}

export const updateExpense = async (expenseId: number, payload: UpdateExpensePayload) => {
  const res = await httpClient.post<Expense>(
    `/api/expenses/${expenseId}`,
    { ...payload, _method: 'PUT' },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )

  return res.data
}

export const deleteExpense = async (expenseId: ExpenseId) => {
  await httpClient.delete(`/api/expenses/${expenseId}`)
}
