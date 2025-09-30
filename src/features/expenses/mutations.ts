import type { CashmateError } from '@/types/http'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { toast } from 'vue-sonner'
import type { SavingsGoalId } from '../savings-goal/type'
import type { CreateExpensePayload, ExpenseId, UpdateExpensePayload } from './type'
import { createExpense, deleteExpense, updateExpense } from './api'

export const useExpenseMutations = (savingsGoalId: SavingsGoalId) => {
  const queryClient = useQueryClient()
  const invalidate = async () => {
    await Promise.all([
      queryClient.invalidateQueries({
        queryKey: ['savings-goals', 'detail', savingsGoalId],
      }),
      queryClient.invalidateQueries({
        queryKey: ['groups'],
      }),
    ])
  }

  const handleError = (err: Error) => {
    const error = err as CashmateError
    toast.error(error.response?.data?.message || 'Something went wrong')
  }

  const createMutation = useMutation({
    mutationFn: (payload: CreateExpensePayload) => createExpense(savingsGoalId, payload),
    onSuccess: async () => {
      await invalidate()
    },
    onError: handleError,
  })
  const updateMutation = useMutation({
    mutationFn: ({ expenseId, payload }: { expenseId: ExpenseId; payload: UpdateExpensePayload }) =>
      updateExpense(expenseId, payload),
    onSuccess: async () => {
      await invalidate()
    },
    onError: handleError,
  })

  const deleteMutation = useMutation({
    mutationFn: deleteExpense,
    onSuccess: async () => {
      await invalidate()
    },
    onError: handleError,
  })

  return {
    createMutation,
    updateMutation,
    deleteMutation,
  }
}
