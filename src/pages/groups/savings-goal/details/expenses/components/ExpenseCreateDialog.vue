<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { inject } from 'vue';
import { savingsGoalIdKey } from '../..';
import ExpenseForm from './ExpenseForm.vue';
import type { CreateExpensePayload, ExpenseSchema } from '@/features/expenses/type';
import { useExpenseMutations } from '@/features/expenses/mutations';


const openDialog = defineModel({ default: false })
const savingsGoalId = inject(savingsGoalIdKey)

if (!savingsGoalId) throw new Error('savingsgoalIdKey should be use within <SavingsGoalDetailIndex />')
const { createMutation } = useExpenseMutations(savingsGoalId.value)

const handleCreateExpense = (data: ExpenseSchema) => {
    const payload = data as CreateExpensePayload
    createMutation.mutate(payload, {
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
                <DialogTitle>Add a expense</DialogTitle>
                <DialogDescription>Add expense to this savings goal</DialogDescription>
            </DialogHeader>
            <ExpenseForm @submit="handleCreateExpense" />
        </DialogContent>
    </Dialog>
</template>


<style scoped></style>