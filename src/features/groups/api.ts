import { httpClient } from '@/services/axios/axios'
import type { GroupDetail, Group, GroupId, UpdateGroupPayload } from './type'

export const getGroups = async () => {
  const res = await httpClient.get<Group[]>('/api/groups')
  return res.data
}

export const getGroup = async (groupId: GroupId) => {
  const res = await httpClient.get<GroupDetail>(`/api/groups/${groupId}`)
  return res.data
}

export const updateGroup = async (groupId: GroupId, payload: UpdateGroupPayload) => {
  const res = await httpClient.put<Group>(`/api/groups/${groupId}`, payload)
  return res.data
}
