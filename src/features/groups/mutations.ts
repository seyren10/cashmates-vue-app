import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { updateGroup } from './api'
import type { GroupId, UpdateGroupPayload } from './type'

export const useGroupMutations = () => {
  const queryClient = useQueryClient()

  const updateMutation = useMutation({
    mutationFn: ({ groupId, payload }: { groupId: GroupId; payload: UpdateGroupPayload }) =>
      updateGroup(groupId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['groups'],
      })
    },
  })

  return {
    updateMutation,
  }
}
