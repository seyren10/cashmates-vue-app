import { queryOptions } from '@tanstack/vue-query'
import { getGroups } from './api'

export const getGroupsQueryOptions = queryOptions({
  queryKey: ['groups', 'list'],
  queryFn: getGroups,
  suspense: true,
})
