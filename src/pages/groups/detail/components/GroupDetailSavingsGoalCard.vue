<script setup lang="ts">
import type { SavingsGoal } from '@/features/savings-goal/type';


const { savingsGoals } = defineProps<{
    savingsGoals: SavingsGoal[]
}>()
</script>
<template>
    <ul class="space-y-2">
        <li v-for="savingsGoal in savingsGoals" :key="savingsGoal.id"
            class="border bg-card text-card-foreground rounded-xl p-4">
            <slot v-bind="savingsGoal" />
        </li>
    </ul>
</template>



<style scoped></style>