<script setup lang="ts">
import AppLazyRouterView from '@/components/app/AppLazyRouterView.vue';
import { TooltipProvider } from '@/components/ui/tooltip';
import { RouterView } from 'vue-router';



</script>

<template>
    <div>
        <RouterView name="header"></RouterView>
        <main class="p-4">
            <TooltipProvider>
                <AppLazyRouterView />
            </TooltipProvider>
        </main>
    </div>
</template>


<style scoped></style>