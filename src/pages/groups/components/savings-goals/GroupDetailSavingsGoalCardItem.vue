<script setup lang="ts">
import type { SavingsGoal } from '@/features/savings-goal/type';
import AppWithIcon from '@/components/app/AppWithIcon.vue';
import { Progress } from '@/components/ui/progress';
import { formatToPhp } from '@/lib/number-format';
import { CalendarClock, Goal } from 'lucide-vue-next';
import { computed } from 'vue';
import { format } from 'date-fns'


const { savingsGoal } = defineProps<{
    savingsGoal: SavingsGoal
}>()

const goalPercentage = computed(() => Math.min(100, Math.round(((savingsGoal.contributions_sum_amount || 0) / savingsGoal.target_amount) * 100)))
</script>
<template>
    <div class="space-y-2">
        <!-- Header -->
        <div class="flex items-center gap-2 m-0">
            <p class="font-medium capitalize">{{ savingsGoal.name }}</p>

            <div class="ml-auto flex items-center gap-2">
                <slot name="actions" />
            </div>
        </div>

        <!-- Target Amount -->
        <p class="font-bold text-primary flex items-center gap-2">
            <Goal class="text-muted-foreground size-4" />
            {{ formatToPhp(savingsGoal.target_amount) }}
        </p>

        <!-- Due Date -->
        <AppWithIcon :icon="CalendarClock" v-if="savingsGoal.deadline">{{ format(savingsGoal.deadline, 'MMM dd, yyyy')
            }}</AppWithIcon>
        <AppWithIcon :icon="CalendarClock" v-else>Open date</AppWithIcon>


        <!-- Progress -->
        <div class="text-muted-foreground space-y-2 text-xs">
            <div class="flex justify-between gap-4">
                <span>Progress</span>
                <span>{{ formatToPhp(savingsGoal.contributions_sum_amount || 0) }} / {{
                    formatToPhp(savingsGoal.target_amount)
                    }}</span>
            </div>
            <Progress :model-value="goalPercentage" />
            <p class="text-end">
                {{ goalPercentage }} % completed
            </p>
        </div>
    </div>
</template>



<style scoped></style>