import type { WithTimestamp } from '@/types/common'
import type { User, UserRole } from '../auth/type'
import type { SavingsGoal } from '../savings-goal/type'

export type Group = WithTimestamp & {
  id: number
  name: string
  join_code: string
  deleted_at: string
  pivot: GroupPivot
}

export type GroupDetail = Group & {
  users: (User & { pivot: GroupPivot })[]
  savings_goals: SavingsGoal[]
}

export type GroupPivot = {
  user_id: number
  group_id: number
  role: UserRole
}
