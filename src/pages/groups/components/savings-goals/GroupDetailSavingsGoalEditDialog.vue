<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useSavingsGoalMutations } from '@/features/savings-goal/mutations';
import type { CreateSavingsGoalPayload, SavingsGoal, SavingsGoalSchema } from '@/features/savings-goal/type';
import { format, parse, parseISO } from 'date-fns';
import { defineAsyncComponent } from 'vue';
const GroupDetailSavingsGoalForm = defineAsyncComponent(() => import('./GroupDetailSavingsGoalForm.vue'))


const emits = defineEmits<{
    (e: 'success'): void
}>()
const { savingsGoal } = defineProps<{
    savingsGoal: SavingsGoal
}>()

const openDialog = defineModel({ default: false })
const { updateMutation: { mutate: updateSavingsGoalMutate, isPending } } = useSavingsGoalMutations()

const handleSubmit = (data: SavingsGoalSchema) => {
    const payload = data as CreateSavingsGoalPayload

    updateSavingsGoalMutate({ savingsGoalId: savingsGoal.id, payload }, {
        onSuccess: () => emits('success'),
    })
}

</script>
<template>
    <Dialog v-model:open="openDialog">
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Update {{ savingsGoal.name }}</DialogTitle>
                <DialogDescription>
                    Update this {{ savingsGoal.name }} and start saving together with your friends.
                </DialogDescription>
            </DialogHeader>

            <Suspense>
                <GroupDetailSavingsGoalForm @submit="handleSubmit" :loading="isPending"
                    :initial-values="{ name: savingsGoal.name, target_amount: savingsGoal.target_amount, deadline: format(savingsGoal.deadline || '', 'yyyy-MM-dd') }" />
                <template #fallback>
                    Loading...
                </template>
            </Suspense>
        </DialogContent>
    </Dialog>
</template>



<style scoped></style>