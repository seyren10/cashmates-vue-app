<script setup lang="ts">
import { Users2, type LucideProps } from 'lucide-vue-next';
import type { FunctionalComponent } from 'vue';

const props = defineProps<{
    icon: FunctionalComponent<LucideProps>
}>()
</script>
<template>
    <div class="inline-flex items-center gap-2 [&>svg]:size-4 [&>svg]:text-muted-foreground">
        <component :is="icon" /> <span class="text-sm font-medium">
            <slot />
        </span>
    </div>
</template>



<style scoped></style>