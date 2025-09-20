<script setup lang="ts">
import AppHeader from '@/components/app/AppHeader.vue'
import { getSavingsGoalQueryOptions } from '@/features/savings-goal/query-options';
import type { SavingsGoalId } from '@/features/savings-goal/type';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';

const { savingsGoalId } = defineProps<{
    savingsGoalId: string
}>()
const { data, suspense } = useQuery(getSavingsGoalQueryOptions(+savingsGoalId as SavingsGoalId))
await suspense()
const savingsGoal = computed(() => data.value!)

</script>
<template>
    <AppHeader>
        <div class="grow capitalize">
            <h1 class="font-bold">{{ savingsGoal.name }}</h1>
            <p class="text-xs text-muted-foreground">Savings</p>
        </div>
    </AppHeader>
</template>



<style scoped></style>