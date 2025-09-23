<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import LoginForm from './components/LoginForm.vue';
import LoginGoogle from './components/LoginGoogle.vue';
import { useAuthMutations } from '@/features/auth/mutations';
import LoginErrorAlert from './components/LoginErrorAlert.vue';
import { computed, watchEffect } from 'vue';
import type { CashmateError } from '@/types/http';
import { useNavigationState } from '@/composables/use-navigation';
import type { LoginCredential } from '@/features/auth/type';
import { useRoute, useRouter } from 'vue-router';
import { toast } from 'vue-sonner';

const { loginMutation: { mutate, error, isError, isPending } } = useAuthMutations()
const router = useRouter()
const route = useRoute()


const errorMessage = computed(() => {
    const err = error.value as CashmateError
    return err.response?.data.message
})
const { state } = useNavigationState();

const handleLogin = (data: LoginCredential) => {
    mutate(data, {
        onSuccess: () => {

            if (route.query.ref) {
                return router.replace({ path: route.query.ref as string })
            } else
                return router.replace({ name: 'group.index' })
        }
    })
}

watchEffect(() => {
    if (route.query.session_expired && route.query.session_expired === 'true') {
        toast.error('Your session has expired. Please login again to continue.', {
            position: 'top-center',
        })
    }
})

</script>
<template>
    <div class="h-screen grid place-content-center">
        <Card class="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Welcome Back</CardTitle>
                <CardDescription>Login to your account to continue</CardDescription>
            </CardHeader>

            <CardContent class="space-y-4">
                <LoginErrorAlert :error-message="errorMessage" v-if="isError" />
                <LoginForm @submit="handleLogin" :loading="isPending || state === 'loading'" />
                <div
                    class="relative text-center text-xs after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span class="relative z-10 bg-background px-2 text-muted-foreground">
                        OR
                    </span>
                </div>
                <LoginGoogle class="w-full" />
            </CardContent>

            <CardFooter>
                <div class="text-xs text-center w-full">
                    <a target="_blank" href="https://icons8.com/icon/V5cGWnc9R4xj/google">Google</a> icon by <a
                        target="_blank" href="https://icons8.com">Icons8</a>
                </div>

            </CardFooter>
        </Card>
    </div>
</template>



<style scoped></style>