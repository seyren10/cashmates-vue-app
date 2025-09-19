<script setup lang="ts">
import { Separator } from '@/components/ui/separator';
import { getGroupQueryOptions } from '@/features/groups/query-options';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';
import GroupDetailHeader from './components/GroupDetailHeader.vue';
import GroupDetailSavingsGoalCard from './components/GroupDetailSavingsGoalCard.vue';
import GroupDetailSavingsGoalCardItem from './components/GroupDetailSavingsGoalCardItem.vue';


const props = defineProps<{
    groupId: string
}>()

const { data, suspense } = useQuery(getGroupQueryOptions(() => +props.groupId))
await suspense()
const group = computed(() => data.value!)


</script>
<template>
    <div class="space-y-4">
        <GroupDetailHeader :group="group" />
        <Separator />
        <GroupDetailSavingsGoalCard :savings-goals="group.savings_goals">
            <template #default="savingsGoal">
                <GroupDetailSavingsGoalCardItem :savings-goal="savingsGoal" />
            </template>
        </GroupDetailSavingsGoalCard>
    </div>
</template>


<style scoped></style>