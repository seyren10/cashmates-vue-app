<script setup lang="ts">
import type { SavingsGoalId } from '@/features/savings-goal/type';
import type { GroupId } from '@/features/groups/type';
import { getContributionsQueryOptions } from '@/features/contributions/query-options';
import { useQuery } from '@tanstack/vue-query';
import { computed, defineAsyncComponent, inject, ref, toValue, type MaybeRefOrGetter } from 'vue';
import ContributionCard from './components/ContributionCard.vue';
import ContributionCardItem from './components/ContributionCardItem.vue';
import ContributionCardActions from './components/ContributionCardActions.vue';
import type { Contribution, ContributionId } from '@/features/contributions/type';
import { useContributionMutations } from '@/features/contributions/mutations';
import AppEmptyResource from '@/components/app/AppEmptyResource.vue';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-vue-next';
import { createContributionDialogKey } from '..';
const ContributionEditDialog = defineAsyncComponent(() => import('./components/ContributionEditDialog.vue'))


const { savingsGoalId } = defineProps<{
    savingsGoalId: GroupId
}>()
const { data, suspense } = useQuery(getContributionsQueryOptions(+savingsGoalId as SavingsGoalId))
await suspense()
const contributions = computed(() => data.value!)

const { editDialogPending, showEditDialog, handleShowEditDialog, selectedContribution } = useEditDialog()
const { handleDeleteContribution } = useDeleteContribution(() => savingsGoalId)

function useEditDialog() {
    const showEditDialog = ref(false)
    const editDialogPending = ref(false)
    const selectedContribution = ref<Contribution | null>(null)

    const handleShowEditDialog = (contribution: Contribution) => {
        selectedContribution.value = contribution
        showEditDialog.value = true
    }

    return {
        showEditDialog,
        editDialogPending,
        selectedContribution,
        handleShowEditDialog
    }
}

function useDeleteContribution(savingsGoalId: MaybeRefOrGetter<SavingsGoalId>) {

    const { deleteMutation } = useContributionMutations(toValue(savingsGoalId))
    const handleDeleteContribution = (contributionId: ContributionId) => {
        deleteMutation.mutate(contributionId)
    }

    return {
        handleDeleteContribution
    }
}

/* PROVIDER CONSUMER */
const showCreateContributionDialog = inject(createContributionDialogKey);
</script>
<template>
    <div class="space-y-2">
        <Button class="w-full" @click="showCreateContributionDialog = true" variant="outline">
            <PlusIcon /> Contribute
        </Button>
        <ContributionCard :contributions="contributions" #default="contribution" v-if="contributions.length">
            <ContributionCardItem :contribution="contribution">
                <template #actions>
                    <ContributionCardActions @edit="handleShowEditDialog(contribution)"
                        @delete="handleDeleteContribution(contribution.id)"></ContributionCardActions>
                </template>
            </ContributionCardItem>
        </ContributionCard>
        <AppEmptyResource v-else class="text-muted-foreground text-sm gap-2">
            <p>
                No contributions yet.
            </p>
            <Button size="sm" @click="showCreateContributionDialog = true">
                <PlusIcon /> Contribute
            </Button>
        </AppEmptyResource>


        <!-- Edit dialog -->
        <Suspense @pending="editDialogPending = true" @resolve="editDialogPending = false" v-if="selectedContribution">
            <ContributionEditDialog v-model="showEditDialog" :contribution="selectedContribution" />
        </Suspense>

    </div>
</template>



<style scoped></style>