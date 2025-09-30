<script setup lang="ts">
import type { Expense } from '@/features/expenses/type';



const { expenses } = defineProps<{
    expenses: Expense[]
}>()
</script>
<template>
    <ul class="space-y-2">
        <li v-for="expense in expenses" :key="expense.id">
            <slot v-bind="expense" />
        </li>
    </ul>
</template>



<style scoped></style>