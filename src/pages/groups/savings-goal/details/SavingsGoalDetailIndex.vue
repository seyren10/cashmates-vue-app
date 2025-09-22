<script setup lang="ts">
import { getSavingsGoalQueryOptions } from '@/features/savings-goal/query-options';
import type { SavingsGoalId } from '@/features/savings-goal/type';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';
import SavingsGoalDetailCard from './components/SavingsGoalDetailCard.vue';
import SavingsGoalTabs from './components/SavingsGoalTabs.vue';

const { savingsGoalId } = defineProps<{
    savingsGoalId: string
}>()

const { data, suspense } = useQuery(getSavingsGoalQueryOptions(+savingsGoalId as SavingsGoalId))
await suspense()

const savingsGoal = computed(() => data.value!)
</script>
<template>
    <div class="space-y-4" v-if="savingsGoalId">
        <SavingsGoalDetailCard :savings-goal-detail="savingsGoal" />
        <SavingsGoalTabs :savings-goal-id="+savingsGoalId" />
    </div>
</template>



<style scoped></style>