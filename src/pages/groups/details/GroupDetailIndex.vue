<script setup lang="ts">
import { getGroupQueryOptions } from '@/features/groups/query-options';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';
import GroupDetailSavingsGoalCard from '../components/savings-goals/GroupDetailSavingsGoalCard.vue';
import GroupDetailSavingsGoalCardItem from '../components/savings-goals/GroupDetailSavingsGoalCardItem.vue';


const props = defineProps<{
    groupId: string
}>()

const { data, suspense } = useQuery(getGroupQueryOptions(() => +props.groupId))
await suspense()
const group = computed(() => data.value!)
</script>
<template>
    <div class="space-y-4">
        <GroupDetailSavingsGoalCard :savings-goals="group.savings_goals">
            <template #default="savingsGoal">
                <RouterLink :to="{ name: 'savings-goal.detail', params: { savingsGoalId: savingsGoal.id } }">
                    <GroupDetailSavingsGoalCardItem :savings-goal="savingsGoal" />
                </RouterLink>
            </template>
        </GroupDetailSavingsGoalCard>

    </div>
</template>


<style scoped></style>