import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { createGroup, deleteGroup, updateGroup } from './api'
import type { GroupId, UpdateGroupPayload } from './type'
import type { CashmateError } from '@/types/http'
import { toast } from 'vue-sonner'

export const useGroupMutations = () => {
  const queryClient = useQueryClient()

  const invalidate = () => {
    queryClient.invalidateQueries({
      queryKey: ['groups'],
    })
  }
  const handleError = (err: unknown) => {
    const error = err as CashmateError
    toast.error(error.response?.data?.message || 'Something went wrong')
  }

  const updateMutation = useMutation({
    mutationFn: ({ groupId, payload }: { groupId: GroupId; payload: UpdateGroupPayload }) =>
      updateGroup(groupId, payload),
    onSuccess: () => {
      invalidate()
    },
    onError: handleError,
  })

  const createMutation = useMutation({
    mutationFn: createGroup,
    onSuccess: () => {
      invalidate()
    },
    onError: handleError,
  })

  const deleteMutation = useMutation({
    mutationFn: deleteGroup,
    onSuccess: () => {
      invalidate()
    },
    onError: handleError,
  })

  return {
    updateMutation,
    createMutation,
    deleteMutation,
  }
}
