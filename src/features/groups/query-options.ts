import { queryOptions } from '@tanstack/vue-query'
import { getGroup, getGroups } from './api'
import type { GroupId } from './type'
import { toValue, type MaybeRef, type MaybeRefOrGetter } from 'vue'
import { getUser } from '../auth/api'

export const getGroupsQueryOptions = queryOptions({
  queryKey: ['groups', 'list'],
  queryFn: getGroups,
  suspense: true,
})

export const getGroupQueryOptions = (groupId: MaybeRefOrGetter<GroupId>) =>
  queryOptions({
    queryKey: ['groups', 'detail', groupId],
    queryFn: () => getGroup(toValue(groupId)),
    retry: false,
    suspense: true,
  })

export const getUserQueryOptions = (enabled: MaybeRefOrGetter<boolean>) =>
  queryOptions({
    queryKey: ['user'],
    queryFn: () => getUser(),
    enabled,
  })
