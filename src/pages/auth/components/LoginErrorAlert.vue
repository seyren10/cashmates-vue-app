<script setup lang="ts">
import { Alert, AlertDescription } from '@/components/ui/alert';
import AlertTitle from '@/components/ui/alert/AlertTitle.vue';
import { OctagonAlert } from 'lucide-vue-next';

const props = defineProps<{
    errorMessage?: string
}>()

</script>
<template>
    <Alert variant="destructive">
        <OctagonAlert />
        <AlertTitle>Login Failed</AlertTitle>
        <AlertDescription>{{ errorMessage || '-' }}</AlertDescription>
    </Alert>
</template>



<style scoped></style>