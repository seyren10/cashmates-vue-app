<script setup lang="ts">
import AppButtonLoaderSwap from '@/components/app/AppButtonLoaderSwap.vue';
import { Button } from '@/components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { expenseSchema } from '@/features/expenses/schema';
import type { ExpenseSchema } from '@/features/expenses/type';
import { toTypedSchema } from '@vee-validate/zod';
import { ChevronRight } from 'lucide-vue-next';
import { useForm } from 'vee-validate';


const emit = defineEmits<{
    (e: 'submit', data: ExpenseSchema): void
}>()

const { initialValues, loading } = defineProps<{
    loading?: boolean
    initialValues?: Partial<ExpenseSchema>
}>()

const { handleSubmit } = useForm({
    initialValues,
    validationSchema: toTypedSchema(expenseSchema)
})

const submit = handleSubmit(data => emit('submit', data))
</script>
<template>
    <form @submit="submit" class="space-y-4">
        <FormField #="{ componentField }" name="amount">
            <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                    <Input v-bind="componentField" type="number" />
                </FormControl>
                <FormDescription>How much do you want to spend?</FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField #="{ componentField }" name="description">
            <FormItem>
                <FormLabel>Note</FormLabel>
                <FormControl>
                    <Textarea v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField #="{ setValue }" name="receipt">
            <FormItem>
                <FormLabel>Note</FormLabel>
                <FormControl>
                    <Input type="file" accept="image/jpeg,image/png" @change="(e: Event) => {
                        const file = (e.target as HTMLInputElement).files?.[0]
                        setValue(file)
                    }" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <Button :disabled="loading" class="w-full">
            <AppButtonLoaderSwap :loading="loading">
                <ChevronRight />
            </AppButtonLoaderSwap>
            <span>Contribute</span>
        </Button>
    </form>
</template>



<style scoped></style>