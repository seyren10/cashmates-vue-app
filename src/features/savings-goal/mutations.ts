import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { createSavingsGoal, deleteSavingsGoal, updateSavingsGoal } from './api'
import type { CreateSavingsGoalPayload, SavingsGoalId, UpdateSavingsGoalPayload } from './type'
import { toast } from 'vue-sonner'
import type { CashmateError } from '@/types/http'
import type { GroupId } from '../groups/type'
import { getGroupQueryOptions } from '../groups/query-options'

export const useSavingsGoalMutations = () => {
  const queryClient = useQueryClient()

  const invalidate = async () => {
    queryClient.invalidateQueries({
      queryKey: ['savings-goals', 'detail'],
    })
  }
  const handleError = (err: unknown) => {
    const error = err as CashmateError
    toast.error(error.response?.data?.message || 'Something went wrong')
  }

  const createMutation = useMutation({
    mutationFn: ({ groupId, payload }: { groupId: GroupId; payload: CreateSavingsGoalPayload }) =>
      createSavingsGoal(groupId, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: getGroupQueryOptions(data.group_id).queryKey,
      })
    },
    onError: handleError,
  })

  const updateMutation = useMutation({
    mutationFn: ({
      savingsGoalId,
      payload,
    }: {
      savingsGoalId: SavingsGoalId
      payload: UpdateSavingsGoalPayload
    }) => updateSavingsGoal(savingsGoalId, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: getGroupQueryOptions(data.group_id).queryKey,
      })
    },
    onError: handleError,
  })

  const deleteMutation = useMutation({
    mutationFn: (savingsGoalId: SavingsGoalId) => deleteSavingsGoal(savingsGoalId),
    onError: handleError,
  })

  return {
    createMutation,
    updateMutation,
    deleteMutation,
  }
}
