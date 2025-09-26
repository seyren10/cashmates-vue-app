<script setup lang="ts">
import { useErrorStore } from '@/stores/error';
import { storeToRefs } from 'pinia';
import { onErrorCaptured } from 'vue';
import AppErrorPage from './AppErrorPage.vue';

const errorStore = useErrorStore()
const { error } = storeToRefs(errorStore)

onErrorCaptured((err, instance) => {
    console.log(instance?.$route)
    error.value = err
    return false
})
</script>
<template>
    <slot v-if="!error" />
    <AppErrorPage v-else />
</template>



<style scoped></style>