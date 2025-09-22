<script setup lang="ts">
import AppHeader from '@/components/app/AppHeader.vue'
import { getSavingsGoalQueryOptions } from '@/features/savings-goal/query-options';
import type { SavingsGoalId } from '@/features/savings-goal/type';
import { useQuery } from '@tanstack/vue-query';
import { Goal } from 'lucide-vue-next';
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
            <div class="text-xs text-muted-foreground flex items-center gap-1">
                <Goal class="size-4" />
                <p>Goal</p>
            </div>
        </div>
    </AppHeader>
</template>



<style scoped></style>