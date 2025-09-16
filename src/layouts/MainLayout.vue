<script setup lang="ts">
import { onErrorCaptured } from 'vue';
import { RouterView } from 'vue-router';
import { toast } from 'vue-sonner';
import { Toaster } from '@/components/ui/sonner';
import 'vue-sonner/style.css'


onErrorCaptured((err) => {
    toast.error(err.message)
    return false
})

</script>

<template>
    <div>
        <RouterView v-slot="{ Component }">
            <template v-if="Component">
                <Suspense timeout="0">
                    <component :is="Component"></component>
                    <template #fallback>
                        <div>Loading...123</div>
                    </template>
                </Suspense>
            </template>
        </RouterView>
        <Toaster />
    </div>
</template>


<style scoped></style>