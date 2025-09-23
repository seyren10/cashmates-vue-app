<script setup lang="ts">
import type { Expense } from '@/features/expenses/type';
import ExpenseCardItem from './ExpenseCardItem.vue';



const { expenses } = defineProps<{
    expenses: Expense[]
}>()
</script>
<template>
    <ul class="space-y-2">
        <li v-for="expense in expenses" :key="expense.id">
            <ExpenseCardItem :expense="expense" />
        </li>
    </ul>
</template>



<style scoped></style>