<script setup lang="ts">
import AppButtonLoaderSwap from '@/components/app/AppButtonLoaderSwap.vue';
import AppPasswordInput from '@/components/app/AppPasswordInput.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { LoginCredentials } from '@/features/auth/type';
import { ChevronRight } from 'lucide-vue-next';
import { ref } from 'vue';

const props = defineProps<{
    loading?: boolean
}>()
const emits = defineEmits<{
    (e: 'submit', payload: LoginCredentials): void
}>()

const loginCredentials = ref<LoginCredentials>({
    email: '',
    password: ''
})

</script>
<template>
    <form class="space-y-4" @submit.prevent="emits('submit', loginCredentials)">
        <div class="space-y-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" v-model="loginCredentials.email" :disabled="loading" />
        </div>
        <div class="space-y-2">
            <Label for="password">Password</Label>
            <AppPasswordInput id="password" v-model="loginCredentials.password" :disabled="loading" />
        </div>

        <Button class="w-full" :disabled="loading">
            <AppButtonLoaderSwap :loading="loading">
                <ChevronRight />
            </AppButtonLoaderSwap>
            Login
        </Button>
    </form>
</template>



<style scoped></style>