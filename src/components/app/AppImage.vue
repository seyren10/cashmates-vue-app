<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';
import { ref, useTemplateRef } from 'vue';

const isVisible = ref(false)
const imageRef = useTemplateRef('imageRef')
const { stop } = useIntersectionObserver(imageRef, ([{ isIntersecting }]) => {
    if (isIntersecting) {
        isVisible.value = true
        stop()
    }
})
</script>
<template>
    <div ref="imageRef">
        <img v-if="isVisible" v-bind="$attrs">
        </img>
    </div>
</template>



<style scoped></style>