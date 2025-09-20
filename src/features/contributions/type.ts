import type { WithTimestamp } from '@/types/common'
import type { User, UserId } from '../auth/type'

export type Contribution = WithTimestamp & {
  id: number
  savings_goal_id: number
  user_id: UserId
  amount: number
  note: string | null
  comments_count: number
  user: User
}

export type ContributionId = Contribution['id']
