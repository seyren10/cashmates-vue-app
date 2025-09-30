<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ContributionForm from './ExpenseForm.vue';
import { inject } from 'vue';
import { savingsGoalIdKey } from '../..';
import type { UpdateContributionPayload } from '@/features/contributions/type';
import type { Expense, ExpenseSchema } from '@/features/expenses/type';
import { useExpenseMutations } from '@/features/expenses/mutations';

const { expense } = defineProps<{
    expense: Expense
}>()
const openDialog = defineModel({ default: false })
const savingsGoalId = inject(savingsGoalIdKey)

if (!savingsGoalId) throw new Error('savingsgoalIdKey should be use within <SavingsGoalDetailIndex />')

const { updateMutation } = useExpenseMutations(savingsGoalId.value)

const handleUpdateExpense = (data: ExpenseSchema) => {
    const payload = data as UpdateContributionPayload
    updateMutation.mutate({ expenseId: expense.id, payload }, {
        onSuccess: () => {
            openDialog.value = false
        }
    })
}

</script>
<template>
    <Dialog v-model:open="openDialog">
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit this contribution</DialogTitle>
                <DialogDescription>updating your contribution will update your savings goal</DialogDescription>
            </DialogHeader>
            <ContributionForm @submit="handleUpdateExpense" :initial-values="{
                amount: expense.amount,
                description: expense.description
            }" />
        </DialogContent>
    </Dialog>
</template>


<style scoped></style>