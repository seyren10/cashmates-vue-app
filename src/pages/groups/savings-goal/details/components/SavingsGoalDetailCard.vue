<script setup lang="ts">
import AppWithIcon from '@/components/app/AppWithIcon.vue';
import { Progress } from '@/components/ui/progress';
import type { SavingsGoalDetail } from '@/features/savings-goal/type';
import { formatToPhp } from '@/lib/number-format';
import { CalendarCheck, CalendarClock, TargetIcon } from 'lucide-vue-next';
import { computed } from 'vue';
import SavingsGoalDetailTrend from './SavingsGoalDetailTrend.vue';
import { Separator } from '@/components/ui/separator';
import { formatDate } from 'date-fns';


const { savingsGoalDetail } = defineProps<{
    savingsGoalDetail: SavingsGoalDetail
}>()

const goalPercentage = computed(() => Math.min(100, Math.round(((savingsGoalDetail.contributions_sum_amount || 0) / savingsGoalDetail.target_amount) * 100)))


</script>

<template>
    <div class="border bg-card text-card-foreground rounded-xl p-4 space-y-6">
        <!-- Goal Progress -->
        <div class="text-center">
            <AppWithIcon :icon="TargetIcon">{{ savingsGoalDetail.name }}</AppWithIcon>
            <p class="text-primary font-bold text-2xl">
                {{ formatToPhp(savingsGoalDetail.current_balance) }}
            </p>

            <p class="text-xs text-muted-foreground">
                Net amount
            </p>
        </div>

        <!-- Progress Bar -->
        <div class="text-muted-foreground space-y-2 text-xs">
            <Progress :model-value="goalPercentage" />
            <div class="flex items-center justify-between gap-4">
                <p>{{ formatToPhp(savingsGoalDetail.contributions_sum_amount || 0) }} / {{
                    formatToPhp(savingsGoalDetail.target_amount)
                    }}</p>
                <p>
                    {{ goalPercentage }} % completed
                </p>
            </div>
        </div>

        <!-- Due date -->
        <div class="flex flex-col items-center gap-2">
            <template v-if="savingsGoalDetail.deadline">
                <AppWithIcon :icon="CalendarClock">Due date</AppWithIcon>
                <p class="rounded-full border border-accent bg-accent/30 text-sm px-2">
                    {{ formatDate(savingsGoalDetail.deadline, 'MMMM dd, yyyy') }}
                </p>
            </template>
            <template v-else>
                <AppWithIcon :icon="CalendarCheck">Open Date</AppWithIcon>
                <p class="rounded-full border border-accent bg-accent/30 text-sm px-2">
                    This goal has no due date
                </p>
            </template>
        </div>

        <Separator />

        <!-- Trend -->
        <SavingsGoalDetailTrend :contributions="savingsGoalDetail.contributions_sum_amount || 0"
            :expenses="savingsGoalDetail.expenses_sum_amount || 0" :total="savingsGoalDetail.current_balance" />

    </div>
</template>

<style scoped></style>