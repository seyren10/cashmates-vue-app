import type { Media, WithTimestamp } from '@/types/common'
import type { User, UserId } from '../auth/type'
import type { SavingsGoalId } from '../savings-goal/type'

export type Expense = WithTimestamp & {
  id: number
  savings_goal_id: SavingsGoalId
  user_id: UserId
  amount: number
  description: null | string
  deleted_at: null | string
  comments_count: number
  user: User
  media: Media[]
}
export type ExpenseId = Expense['id']
