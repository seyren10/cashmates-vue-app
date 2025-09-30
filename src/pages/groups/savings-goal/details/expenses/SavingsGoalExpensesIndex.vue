<script setup lang="ts">
import { getExpensesQueryOptions } from '@/features/expenses/query-options';
import { useQuery } from '@tanstack/vue-query';
import { computed, defineAsyncComponent, inject, ref, toValue, type MaybeRefOrGetter } from 'vue';
import ExpenseCard from './components/ExpenseCard.vue';

import type { SavingsGoalId } from '@/features/savings-goal/type';
import type { GroupId } from '@/features/groups/type';
import ExpenseCardItem from './components/ExpenseCardItem.vue';
import ExpenseCardActions from './components/ExpenseCardActions.vue';
import type { Expense, ExpenseId } from '@/features/expenses/type';
import { useExpenseMutations } from '@/features/expenses/mutations';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-vue-next';
import AppEmptyResource from '@/components/app/AppEmptyResource.vue';
import { createExpenseDialogKey } from '..';

const ExpenseEditDialog = defineAsyncComponent(() => import('./components/ExpenseEditDialog.vue'))

const { savingsGoalId } = defineProps<{
    savingsGoalId: GroupId
}>()
const { data, suspense } = useQuery(getExpensesQueryOptions(+savingsGoalId as SavingsGoalId))
await suspense()
const expenses = computed(() => data.value!)

const { editDialogPending, handleShowEditDialog, selectedExpense, showEditDialog } = useEditDialog()
const { handleDeleteExpense } = useDeleteExpense(() => savingsGoalId)

function useEditDialog() {

    const editDialogPending = ref(false)
    const showEditDialog = ref(false)
    const selectedExpense = ref<Expense | null>(null)

    const handleShowEditDialog = (expense: Expense) => {
        selectedExpense.value = expense
        showEditDialog.value = true
    }

    return {
        editDialogPending,
        showEditDialog,
        selectedExpense,
        handleShowEditDialog
    }
}

function useDeleteExpense(savingsGoalId: MaybeRefOrGetter<SavingsGoalId>) {

    const { deleteMutation } = useExpenseMutations(toValue(savingsGoalId))
    const handleDeleteExpense = (expenseId: ExpenseId) => {
        deleteMutation.mutate(expenseId)
    }

    return {
        handleDeleteExpense
    }
}

/* PROVIDER CONSUMER */
const showCreateExpenseDialog = inject(createExpenseDialogKey);
</script>
<template>
    <div class="space-y-2">
        <Button class="w-full" variant="outline" @click="showCreateExpenseDialog = true">
            <PlusIcon /> Make expense
        </Button>
        <ExpenseCard :expenses="expenses" #="expense" v-if="expenses.length">
            <ExpenseCardItem :expense="expense">
                <template #actions>
                    <ExpenseCardActions @edit="handleShowEditDialog(expense)"
                        @delete="handleDeleteExpense(expense.id)" />
                </template>
            </ExpenseCardItem>
        </ExpenseCard>
        <AppEmptyResource v-else class="text-muted-foreground text-sm gap-2 text-center">
            <p>No expenses yet.</p>
            <Button size="sm" @click="showCreateExpenseDialog = true">
                <PlusIcon />Make expense
            </Button>
        </AppEmptyResource>

        <!-- Edit dialog -->
        <Suspense v-if="selectedExpense" @pending="editDialogPending = true" @resolve="editDialogPending = false">
            <ExpenseEditDialog v-model="showEditDialog" :expense="selectedExpense" />
        </Suspense>
    </div>
</template>



<style scoped></style>