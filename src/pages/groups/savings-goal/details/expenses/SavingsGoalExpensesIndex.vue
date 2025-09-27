<script setup lang="ts">
import { getExpensesQueryOptions } from '@/features/expenses/query-options';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';
import ExpenseCard from './components/ExpenseCard.vue';

import type { SavingsGoalId } from '@/features/savings-goal/type';
import type { GroupId } from '@/features/groups/type';



const { savingsGoalId } = defineProps<{
    savingsGoalId: GroupId
}>()
const { data, suspense } = useQuery(getExpensesQueryOptions(+savingsGoalId as SavingsGoalId))
await suspense()
const expenses = computed(() => data.value!)
</script>
<template>
    <div>
        <ExpenseCard :expenses="expenses" />
    </div>
</template>



<style scoped></style>