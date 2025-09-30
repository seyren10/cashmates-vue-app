<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next';
import { Button } from '../ui/button';
import { useNavigationState } from '@/composables/use-navigation';
import AppButtonLoaderSwap from './AppButtonLoaderSwap.vue';

const { state } = useNavigationState()
</script>
<template>
    <div class="border-b sticky top-0 bg-background z-10">
        <div class="p-4 flex justify-between items-center gap-4 ">
            <Button variant="ghost" size="icon" @click="$router.back()">
                <AppButtonLoaderSwap :loading="state === 'loading'">
                    <ChevronLeft />
                </AppButtonLoaderSwap>
            </Button>
            <slot />
        </div>
    </div>
</template>



<style scoped></style>