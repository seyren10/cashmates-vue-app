<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ContributionForm from './ContributionForm.vue';
import { useContributionMutations } from '@/features/contributions/mutations';
import { inject } from 'vue';
import { savingsGoalIdKey } from '../..';
import type { ContributionSchema, CreateContributionPayload } from '@/features/contributions/type';


const openDialog = defineModel({ default: false })
const savingsGoalId = inject(savingsGoalIdKey)

if (!savingsGoalId) throw new Error('savingsgoalIdKey should be use within <SavingsGoalDetailIndex />')
const { createMutation } = useContributionMutations(savingsGoalId.value)

const handleCreateContribution = (data: ContributionSchema) => {
    const payload = data as CreateContributionPayload
    createMutation.mutate(payload, {
        onSuccess: () => {
            openDialog.value = false
        }
    })
}
</script>
<template>
    <Dialog v-model:open="openDialog">
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add a contribution</DialogTitle>
                <DialogDescription>Add your contribution to this savings goal</DialogDescription>
            </DialogHeader>
            <ContributionForm @submit="handleCreateContribution" />
        </DialogContent>
    </Dialog>
</template>


<style scoped></style>