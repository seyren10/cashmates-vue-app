<script setup lang="ts">
import AppWithIcon from '@/components/app/AppWithIcon.vue';
import type { SavingsGoal } from '@/features/savings-goal/type';
import { formatToPhp } from '@/lib/number-format';
import { TargetIcon } from 'lucide-vue-next';


const { savingsGoal } = defineProps<{
    savingsGoal: SavingsGoal
}>()
</script>
<template>
    <div>
        <div class="flex items-center gap-2">
            <TargetIcon class="text-muted-foreground size-4" />
            <p class="font-medium">{{ savingsGoal.name }}</p>
            <span class="font-bold text-primary ml-auto">{{ formatToPhp(savingsGoal.target_amount) }}</span>
        </div>
    </div>
</template>



<style scoped></style>