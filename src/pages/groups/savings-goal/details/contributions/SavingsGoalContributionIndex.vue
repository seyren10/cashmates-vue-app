<script setup lang="ts">
import { getContributionsQueryOptions } from '@/features/contributions/query-options';
import type { SavingsGoalId } from '@/features/savings-goal/type';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';


const { savingsGoalId } = defineProps<{
    savingsGoalId: string
}>()
const { data, suspense } = useQuery(getContributionsQueryOptions(+savingsGoalId as SavingsGoalId))
await suspense()
const contributions = computed(() => data.value!)
</script>
<template>
    <div>
        {{ contributions }}
    </div>
</template>



<style scoped></style>