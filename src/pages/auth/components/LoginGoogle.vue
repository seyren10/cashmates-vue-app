<script setup lang="ts">
import { Button } from '@/components/ui/button';
import GoogleIcon from '@/assets/icons8-google-48.png'


const backendUrl = `${import.meta.env.VITE_CASHMATE_API_URL}/auth/google/redirect`
</script>
<template>
    <Button as-child variant="secondary">
        <a :href="backendUrl"><img :src="GoogleIcon" class="size-4" /> <span>Login With Google</span> </a>
    </Button>
</template>


<style scoped></style>