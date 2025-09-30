<script setup lang="ts">
import { getGroupQueryOptions } from '@/features/groups/query-options';
import { useQuery } from '@tanstack/vue-query';
import { computed, defineAsyncComponent, ref, Suspense } from 'vue';
import GroupDetailSavingsGoalCard from '../components/savings-goals/GroupDetailSavingsGoalCard.vue';
import GroupDetailSavingsGoalCardItem from '../components/savings-goals/GroupDetailSavingsGoalCardItem.vue';
import { AppFloatingButton } from '@/components/app/floating-button';
import GroupDetailSavingsGoalActions from '../components/savings-goals/GroupDetailSavingsGoalActions.vue';
import { AppConfirmDialog } from '@/components/app/confirm-dialog';
import GroupDetailSavingsGoalEditDialog from '../components/savings-goals/GroupDetailSavingsGoalEditDialog.vue';
import { useUpdateDialog } from '@/features/savings-goal/composables/use-update-dialog';
import { useDeleteDialog } from '@/features/savings-goal/composables/use-delete-dialog';
const GroupDetailSavingsGoalCreateDialog = defineAsyncComponent(() => import('../components/savings-goals/GroupDetailSavingsGoalCreateDialog.vue'))

const props = defineProps<{
    groupId: string
}>()

const { data, suspense } = useQuery(getGroupQueryOptions(() => +props.groupId))
await suspense()
const group = computed(() => data.value!)
const { dialogPending, openDialog, } = useCreateDialog()
const { handleDeleteSavingsGoal, openDeleteDialog, handleOpenDeleteDialog } = useDeleteDialog()
const { handleOpenEditDialog, openEditDialog, selectedSavingsGoal } = useUpdateDialog()

function useCreateDialog() {
    const openDialog = ref(false)
    const dialogPending = ref(false)

    return {
        openDialog,
        dialogPending
    }
}

</script>
<template>
    <div class="space-y-4">
        <RouterView v-slot="{ Component }">
            <!-- Default Route -->
            <template v-if="!Component">
                <GroupDetailSavingsGoalCard :savings-goals="group.savings_goals">
                    <template #default="savingsGoal">
                        <RouterLink :to="{ name: 'savings-goal.detail', params: { savingsGoalId: savingsGoal.id } }">
                            <GroupDetailSavingsGoalCardItem :savings-goal="savingsGoal">
                                <template #actions>
                                    <GroupDetailSavingsGoalActions @delete="handleOpenDeleteDialog(savingsGoal)"
                                        @edit="handleOpenEditDialog(savingsGoal)" />
                                </template>
                            </GroupDetailSavingsGoalCardItem>
                        </RouterLink>
                    </template>
                </GroupDetailSavingsGoalCard>
                <AppFloatingButton @click="openDialog = true" tooltip-text="Create a new savings goal"
                    :loading="dialogPending" />

                <Suspense @pending="dialogPending = true" @resolve="dialogPending = false" v-if="openDialog">
                    <GroupDetailSavingsGoalCreateDialog v-model="openDialog" @success="openDialog = false" />
                </Suspense>

                <!-- Delete Confirmation Dialog -->
                <AppConfirmDialog v-model="openDeleteDialog" @confirm="handleDeleteSavingsGoal()" />

                <!-- Edit Dialog -->
                <GroupDetailSavingsGoalEditDialog :savings-goal="selectedSavingsGoal" v-if="selectedSavingsGoal"
                    v-model="openEditDialog" @success="openEditDialog = false" />
            </template>

            <!-- Children route -->
            <component v-else :is="Component" />
        </RouterView>
    </div>
</template>


<style scoped></style>