<script setup lang="ts">
import AppLazyRouterView from '@/components/app/AppLazyRouterView.vue';
import { RouterView } from 'vue-router';

</script>

<template>
    <div>
        <RouterView name="header"></RouterView>
        <main class="p-4">
            <AppLazyRouterView />
        </main>
    </div>
</template>


<style scoped></style>