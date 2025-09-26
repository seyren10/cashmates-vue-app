<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { Toaster } from '@/components/ui/sonner';
import 'vue-sonner/style.css'
import AppLazyRouterView from './components/app/AppLazyRouterView.vue';
import AppErrorBoundary from './components/router/AppErrorBoundary.vue';


const mode = useColorMode()

</script>
<template>
  <AppErrorBoundary>
    <AppLazyRouterView />
  </AppErrorBoundary>
  <Toaster />
</template>



<style scoped></style>