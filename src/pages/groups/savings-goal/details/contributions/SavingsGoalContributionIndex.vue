<script setup lang="ts">
import { getContributionsQueryOptions } from '@/features/contributions/query-options';
import type { SavingsGoalId } from '@/features/savings-goal/type';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';
import ContributionCard from './components/ContributionCard.vue';
import type { GroupId } from '@/features/groups/type';


const { savingsGoalId } = defineProps<{
    savingsGoalId: GroupId
}>()
const { data, suspense } = useQuery(getContributionsQueryOptions(+savingsGoalId as SavingsGoalId))
await suspense()
const contributions = computed(() => data.value!)
</script>
<template>
    <div>
        <ContributionCard :contributions="contributions" />
    </div>
</template>



<style scoped></style>