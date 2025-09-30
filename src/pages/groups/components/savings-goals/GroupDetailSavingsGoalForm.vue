<script setup lang="ts">
import AppButtonLoaderSwap from '@/components/app/AppButtonLoaderSwap.vue';
import { Button } from '@/components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ChevronRight } from 'lucide-vue-next';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import type { SavingsGoalSchema } from '@/features/savings-goal/type';
import { savingsGoalSchema } from '@/features/savings-goal/schema';

const emit = defineEmits<{
    (e: 'submit', data: SavingsGoalSchema): void
}>()
const { initialValues, loading } = defineProps<{
    initialValues?: SavingsGoalSchema
    loading?: boolean
}>()
const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(savingsGoalSchema),
    initialValues: initialValues
})

const submit = handleSubmit(data => emit('submit', data))

</script>
<template>
    <form @submit="submit" class="space-y-4">
        <FormField #="{ componentField }" name="name">
            <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Boracay trip" v-bind="componentField" />
                </FormControl>
                <FormDescription>Define your savings goal.</FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>

        <FormField #="{ componentField }" name="target_amount">
            <FormItem>
                <FormLabel>Target amount</FormLabel>
                <FormControl>
                    <Input type="number" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField #="{ componentField }" name="deadline">
            <FormItem>
                <FormLabel>Target amount</FormLabel>
                <FormControl>
                    <Input type="date" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <Button :disabled="loading" class="w-full">
            <AppButtonLoaderSwap :loading="loading">
                <ChevronRight />
            </AppButtonLoaderSwap>
            <span>Create</span>
        </Button>
    </form>
</template>



<style scoped></style>