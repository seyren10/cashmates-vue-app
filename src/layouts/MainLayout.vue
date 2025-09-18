<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next';
import { RouterView } from 'vue-router';

</script>

<template>
    <div class="p-4">
        <RouterView v-slot="{ Component }">
            <template v-if="Component">
                <Suspense timeout="0">
                    <component :is="Component"></component>
                    <template #fallback>
                        <div class="h-screen grid place-content-center">
                            <LoaderCircle class="animate-spin size-4" />
                        </div>
                    </template>
                </Suspense>
            </template>
        </RouterView>
    </div>
</template>


<style scoped></style>