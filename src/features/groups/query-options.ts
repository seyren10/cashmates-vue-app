import { queryOptions } from '@tanstack/vue-query'
import { getGroup, getGroups } from './api'
import type { GroupId } from './type'
import { toValue, type MaybeRefOrGetter } from 'vue'
import { getUser } from '../auth/api'

export const getGroupsQueryOptions = queryOptions({
  queryKey: ['groups', 'list'],
  queryFn: getGroups,
})

export const getGroupQueryOptions = (groupId: MaybeRefOrGetter<GroupId>) =>
  queryOptions({
    queryKey: ['groups', 'detail', toValue(groupId)],
    queryFn: () => getGroup(toValue(groupId)),
    retry: false,
  })

export const getUserQueryOptions = queryOptions({
  queryKey: ['user'],
  queryFn: () => getUser(),
  retry: false,
})
