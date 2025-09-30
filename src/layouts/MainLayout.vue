<script setup lang="ts">
import { TooltipProvider } from '@/components/ui/tooltip';
import { RouterView } from 'vue-router';



</script>

<template>
    <div>
        <RouterView name="header"></RouterView>
        <main class="p-4">
            <TooltipProvider>
                <RouterView />
            </TooltipProvider>
        </main>
    </div>
</template>


<style scoped></style>