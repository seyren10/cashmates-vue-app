import type { SavingsGoalId } from '@/features/savings-goal/type'
import type { ComputedRef, InjectionKey } from 'vue'

export const savingsGoalIdKey = Symbol() as InjectionKey<ComputedRef<SavingsGoalId>>
