import type { Media, WithTimestamp } from '@/types/common'
import type { User, UserId } from '../auth/type'
import type z from 'zod'
import type { contributionSchema } from './schema'

export type Contribution = WithTimestamp & {
  id: number
  savings_goal_id: number
  user_id: UserId
  amount: number
  note: string | null
  comments_count: number
  user: User
  media: Media[]
}

export type ContributionId = Contribution['id']

export type ContributionDetail = Contribution & {
  media: Media[]
}

export type ContributionSchema = z.infer<typeof contributionSchema>

export type CreateContributionPayload = ContributionSchema
export type UpdateContributionPayload = Partial<ContributionSchema>
