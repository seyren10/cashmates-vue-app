import type { WithTimestamp } from '@/types/common'
import type { Group } from '../groups/type'

export type SavingsGoal = WithTimestamp & {
  id: number
  group_id: number
  name: string
  target_amount: number
  deadline: null | string
  deleted_at: string
  current_balance: number
  contributions_count: number
  expenses_count: number
}

export type SavingsGoalId = SavingsGoal['id']

export type SavingsGoalDetail = SavingsGoal & {
  group: Group
  contributions_sum_amount: number | null
  expenses_sum_amount: number | null
}
