import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { createContribution, deleteContribution, updateContribution } from './api'
import type { SavingsGoalId } from '../savings-goal/type'
import type { CashmateError } from '@/types/http'
import { toast } from 'vue-sonner'
import type { ContributionId, CreateContributionPayload, UpdateContributionPayload } from './type'

export const useContributionMutations = (savingsGoalId: SavingsGoalId) => {
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
    mutationFn: (payload: CreateContributionPayload) => createContribution(savingsGoalId, payload),
    onSuccess: async () => {
      await invalidate()
    },
    onError: handleError,
  })

  const updateMutation = useMutation({
    mutationFn: ({
      contributionId,
      payload,
    }: {
      contributionId: ContributionId
      payload: UpdateContributionPayload
    }) => updateContribution(contributionId, payload),
    onSuccess: async () => {
      await invalidate()
    },
    onError: handleError,
  })

  const deleteMutation = useMutation({
    mutationFn: (contributionId: ContributionId) => deleteContribution(contributionId),
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
