import type { WithTimestamp } from '@/types/common'
import type { User } from '../auth/type'
export type Comment = WithTimestamp & {
  id: number
  body: string
  user_id: number
  commentable_type: string
  commentable_id: number
  user: User
}
