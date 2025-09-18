<script setup lang="ts">
import { Home } from 'lucide-vue-next';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { RouterLink } from 'vue-router';
import { useErrorStore } from '@/stores/error';
import { storeToRefs } from 'pinia';

const errorStore = useErrorStore()
const { error, errorMessage, errorStack } = storeToRefs(errorStore)

const inDevelopment = import.meta.env.DEV
</script>
<template>
    <div class="h-screen grid place-content-center space-y-4">
        <div class="flex gap-4 items-center justify-center">
            <h1 class="text-xl font-bold">404</h1>
            <Separator orientation="vertical" />
            <RouterLink to="/">
                <Button size="sm">
                    <Home />
                    <span>Home</span>
                </Button>
            </RouterLink>
        </div>
        <div class="max-w-lg" v-if="error">
            <p class="text-destructive text-sm text-center">{{ errorMessage }}</p>
            <pre v-if="inDevelopment">
                {{ errorStack }}
            </pre>
        </div>
    </div>
</template>


<style scoped></style>