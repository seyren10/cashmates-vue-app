<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ContributionForm from './ContributionForm.vue';
import { useContributionMutations } from '@/features/contributions/mutations';
import { inject } from 'vue';
import { savingsGoalIdKey } from '../..';
import type { Contribution, ContributionSchema, UpdateContributionPayload } from '@/features/contributions/type';

const { contribution } = defineProps<{
    contribution: Contribution
}>()
const openDialog = defineModel({ default: false })
const savingsGoalId = inject(savingsGoalIdKey)

if (!savingsGoalId) throw new Error('savingsgoalIdKey should be use within <SavingsGoalDetailIndex />')

const { updateMutation } = useContributionMutations(savingsGoalId.value)

const handleUpdateContribution = (data: ContributionSchema) => {
    const payload = data as UpdateContributionPayload
    updateMutation.mutate({ contributionId: contribution.id, payload }, {
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
                <DialogTitle>Edit this contribution</DialogTitle>
                <DialogDescription>updating your contribution will update your savings goal</DialogDescription>
            </DialogHeader>
            <ContributionForm @submit="handleUpdateContribution" :initial-values="{
                amount: contribution.amount,
                note: contribution.note
            }" />
        </DialogContent>
    </Dialog>
</template>


<style scoped></style>