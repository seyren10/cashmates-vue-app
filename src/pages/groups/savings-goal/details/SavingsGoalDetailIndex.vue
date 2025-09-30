<script setup lang="ts">
import type { SavingsGoalId } from '@/features/savings-goal/type';
import { getSavingsGoalQueryOptions } from '@/features/savings-goal/query-options';
import { useQuery } from '@tanstack/vue-query';
import { computed, defineAsyncComponent, provide, ref } from 'vue';
import SavingsGoalDetailCard from './components/SavingsGoalDetailCard.vue';
import SavingsGoalTabs from './components/SavingsGoalTabs.vue';
import SavingsGoalDetailDropdown from './components/SavingsGoalDetailDropdown.vue';
import { AppFloatingButton } from '@/components/app/floating-button';
import { savingsGoalIdKey } from '.';

const ContributionCreateDialog = defineAsyncComponent(() => import('./contributions/components/ContributionCreateDialog.vue'))
const ExpenseCreateDialog = defineAsyncComponent(() => import('./expenses/components/ExpenseCreateDialog.vue'))

const { savingsGoalId } = defineProps<{
    savingsGoalId: string
}>()

const { data, suspense } = useQuery(getSavingsGoalQueryOptions(+savingsGoalId as SavingsGoalId))
await suspense()

const savingsGoal = computed(() => data.value!)
const { showContributionDialog, conributionDialogPending } = useContribute()
const { expenseDialogPending, showExpenseDialog } = useSpend()

function useContribute() {
    const showContributionDialog = ref(false)
    const conributionDialogPending = ref(false)

    return {
        showContributionDialog,
        conributionDialogPending
    }
}

function useSpend() {
    const showExpenseDialog = ref(false)
    const expenseDialogPending = ref(false)

    return {
        showExpenseDialog,
        expenseDialogPending
    }
}

provide(savingsGoalIdKey, computed(() => +savingsGoalId))
</script>
<template>
    <div class="space-y-4" v-if="savingsGoalId">
        <SavingsGoalDetailCard :savings-goal-detail="savingsGoal" />
        <SavingsGoalTabs :savings-goal-id="+savingsGoalId" />

        <SavingsGoalDetailDropdown @conribution="showContributionDialog = true" @expense="showExpenseDialog = true">
            <AppFloatingButton tooltip-text="Contribute/Spend" :loading="conributionDialogPending" />
        </SavingsGoalDetailDropdown>

        <!-- Contribution Dialog -->
        <Suspense v-if="showContributionDialog" @pending="conributionDialogPending = true"
            @resolve="conributionDialogPending = false">
            <ContributionCreateDialog v-model="showContributionDialog" />
        </Suspense>

        <!-- Expense Dialog -->
        <Suspense v-if="showExpenseDialog" @pending="expenseDialogPending = true"
            @resolve="expenseDialogPending = false">
            <ExpenseCreateDialog v-model="showExpenseDialog" />
        </Suspense>
    </div>
</template>



<style scoped></style>