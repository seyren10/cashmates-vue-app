<script setup lang="ts">
import { cn } from '@/lib/utils';
import { computed } from 'vue';

const { name } = defineProps<{
    name: string
}>()

const initials = computed(() => name.split(' ').splice(0, 2).map(s => s[0]).join(''))

</script>
<template>
    <div :class="cn('size-10 bg-muted-foreground rounded-full grid place-content-center', $attrs['class'] as string)">
        <p class="font-bold uppercase text-background">
            {{ initials }}
        </p>
    </div>
</template>



<style scoped></style>