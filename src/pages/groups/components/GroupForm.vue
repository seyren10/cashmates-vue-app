<script setup lang="ts">
import AppButtonLoaderSwap from '@/components/app/AppButtonLoaderSwap.vue';
import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { groupSchema } from '@/features/groups/schema';
import type { GroupSchema } from '@/features/groups/type';
import { ChevronRight } from 'lucide-vue-next';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';

const emit = defineEmits<{
    (e: 'submit', data: GroupSchema): void
}>()
const { initialValues, loading } = defineProps<{
    initialValues?: GroupSchema
    loading?: boolean
}>()
const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(groupSchema),
    initialValues: initialValues
})

const submit = handleSubmit(data => emit('submit', data))

</script>
<template>
    <form @submit="submit" class="space-y-4">
        <FormField #="{ componentField }" name="name">
            <FormItem>
                <FormLabel>Group Name</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Boracay trip" v-bind="componentField" />
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