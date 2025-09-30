<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>
<template>
    <div :class="cn('min-h-[8rem] border rounded-xl border-dashed grid place-content-center', props.class)">
        <slot />
    </div>
</template>



<style scoped></style>