<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next';
import { Suspense } from 'vue';
import { RouterView } from 'vue-router';

</script>

<template>
    <RouterView v-slot="{ Component }">
        <template v-if="Component">
            <Suspense timeout="1000">
                <component :is="Component"></component>
                <template #fallback>
                    <div class="h-screen grid place-content-center">
                        <LoaderCircle class="animate-spin size-4" />
                    </div>
                </template>
            </Suspense>
        </template>
    </RouterView>
</template>

<style scoped></style>