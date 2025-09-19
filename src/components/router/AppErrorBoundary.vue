<script setup lang="ts">
import { useErrorStore } from '@/stores/error';
import { storeToRefs } from 'pinia';
import { onErrorCaptured } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const errorStore = useErrorStore()
const { error } = storeToRefs(errorStore)
const route = useRoute()

onErrorCaptured((err) => {
    error.value = err
    router.push({ name: 'not-found', query: route.query, params: route.params })
    return false
})

</script>
<template>
    <slot />
</template>



<style scoped></style>