import { httpClient } from '@/services/axios/axios'
import type { Group, GroupId, UpdateGroupPayload } from './type'

export const getGroups = async () => {
  const res = await httpClient.get<Group[]>('/api/groups')
  return res.data
}

export const updateGroup = async (groupId: GroupId, payload: UpdateGroupPayload) => {
  const res = await httpClient.put<Group>(`/api/groups/${groupId}`, payload)
  return res.data
}
