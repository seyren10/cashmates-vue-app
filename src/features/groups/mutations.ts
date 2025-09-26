import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { createGroup, deleteGroup, updateGroup } from './api'
import type { GroupId, UpdateGroupPayload } from './type'
import type { CashmateError } from '@/types/http'
import { toast } from 'vue-sonner'

export const useGroupMutations = () => {
  const queryClient = useQueryClient()

  const handleError = (err: unknown) => {
    const error = err as CashmateError
    toast.error(error.response?.data?.message || 'Something went wrong')
  }

  const updateMutation = useMutation({
    mutationFn: ({ groupId, payload }: { groupId: GroupId; payload: UpdateGroupPayload }) =>
      updateGroup(groupId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['groups'],
      })
    },
    onError: handleError,
  })

  const createMutation = useMutation({
    mutationFn: createGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['groups'],
      })
    },
    onError: handleError,
  })

  const deleteMutation = useMutation({
    mutationFn: deleteGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['groups'],
      })
    },
    onError: handleError,
  })

  return {
    updateMutation,
    createMutation,
    deleteMutation,
  }
}
