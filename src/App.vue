<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { RouterView } from 'vue-router';

const mode = useColorMode()
</script>
<template>
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
</template>



<style scoped></style>