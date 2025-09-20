<script setup lang="ts">
import AppErrorBoundary from './components/router/AppErrorBoundary.vue';

import { useColorMode } from '@vueuse/core';
import { LoaderCircle } from 'lucide-vue-next';
import { RouterView } from 'vue-router';
import { Toaster } from '@/components/ui/sonner';
import 'vue-sonner/style.css'


const mode = useColorMode()
</script>
<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <AppErrorBoundary>
        <Suspense timeout="1000">
          <component :is="Component"></component>
          <template #fallback>
            <div class="h-screen grid place-content-center">
              <LoaderCircle class="animate-spin size-4" />
            </div>
          </template>
        </Suspense>
      </AppErrorBoundary>
    </template>
  </RouterView>
  <Toaster />
</template>



<style scoped></style>