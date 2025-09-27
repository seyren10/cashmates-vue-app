<script setup lang="ts">
import AppErrorBoundary from './components/router/AppErrorBoundary.vue';
import AppLazyRouterView from './components/app/AppLazyRouterView.vue';
import { useColorMode } from '@vueuse/core';
import { Toaster } from '@/components/ui/sonner';

import 'vue-sonner/style.css'
import AppErrorPage from './components/router/AppErrorPage.vue';

const mode = useColorMode()

</script>
<template>
  <AppErrorBoundary>
    <template #fallback>
      <AppErrorPage />
    </template>
    <AppLazyRouterView />
  </AppErrorBoundary>
  <Toaster />
</template>



<style scoped></style>