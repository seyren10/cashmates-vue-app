<script setup lang="ts">
import AppWithIcon from '@/components/app/AppWithIcon.vue';
import { formatToPhp } from '@/lib/number-format';
import { PhilippinePeso, TrendingDown, TrendingUp } from 'lucide-vue-next';

const props = defineProps<{
    expenses: number,
    contributions: number,
    total: number
}>()
</script>
<template>
    <div class="flex gap-2 items-center justify-around">
        <div class="text-center">
            <AppWithIcon :icon="TrendingUp" class="[&>svg]:text-primary text-muted-foreground">Up
            </AppWithIcon>
            <p class="text-primary">
                {{ formatToPhp(contributions) }}
            </p>
        </div>
        <div class="text-center">
            <AppWithIcon :icon="TrendingDown" class="[&>svg]:stroke-destructive text-muted-foreground">Down
            </AppWithIcon>
            <p class="text-destructive">
                {{ formatToPhp(expenses) }}
            </p>
        </div>
        <div class="text-center">
            <AppWithIcon :icon="PhilippinePeso" class="[&>svg]:text-primary text-muted-foreground">Net
            </AppWithIcon>
            <p>
                {{ formatToPhp(total) }}
            </p>
        </div>

    </div>
</template>



<style lang="scss" scoped></style>