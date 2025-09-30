import type { SavingsGoalId } from '@/features/savings-goal/type'
import type { ComputedRef, InjectionKey, Ref } from 'vue'

export const savingsGoalIdKey = Symbol() as InjectionKey<ComputedRef<SavingsGoalId>>
export const createContributionDialogKey = Symbol() as InjectionKey<Ref<boolean>>
export const createExpenseDialogKey = Symbol() as InjectionKey<Ref<boolean>>
