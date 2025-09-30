<script setup lang="ts">
import { useErrorStore } from '@/stores/error';
import { storeToRefs } from 'pinia';
import { onErrorCaptured } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const errorStore = useErrorStore()
const { error, hasError } = storeToRefs(errorStore)

onErrorCaptured((err, instance, info) => {
    error.value = err;
    console.error("Captured error:", err, info, instance);
    // return false to stop propagation to global handler
    return false;
});

router.onError((err) => {
    error.value = err;
})

</script>

<template>
    <div>
        <template v-if="hasError">
            <slot name="fallback" />
        </template>
        <template v-else>
            <slot />
        </template>
    </div>
</template>