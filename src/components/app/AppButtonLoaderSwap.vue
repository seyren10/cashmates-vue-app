<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next';


const props = defineProps<{
    loading?: boolean
}>()
</script>

<template>
    <LoaderCircle class="animate-spin size-4" v-if="loading" />
    <slot v-else />
</template>


<style scoped></style>