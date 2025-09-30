<script setup lang="ts">
import { AppConfirmDialog } from '@/components/app/confirm-dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useDeleteDialog } from '@/features/savings-goal/composables/use-delete-dialog';
import { useUpdateDialog } from '@/features/savings-goal/composables/use-update-dialog';
import type { SavingsGoalDetail } from '@/features/savings-goal/type';
import GroupDetailSavingsGoalEditDialog from '@/pages/groups/components/savings-goals/GroupDetailSavingsGoalEditDialog.vue';
import { EditIcon, Trash2 } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const props = defineProps<{
    savingsGoalDetail: SavingsGoalDetail
}>()

const router = useRouter()
const { handleOpenEditDialog, openEditDialog, selectedSavingsGoal } = useUpdateDialog()
const { handleDeleteSavingsGoal, handleOpenDeleteDialog, openDeleteDialog } = useDeleteDialog()

const handleDeleteConfirm = () => {
    router.back()
    handleDeleteSavingsGoal()
}
</script>
<template>
    <div>
        <Separator />
        <div class="flex">
            <Button variant="ghost" class="flex-1" @click="handleOpenEditDialog(props.savingsGoalDetail)">
                <EditIcon /> Edit
            </Button>
            <div role="none" class="w-px bg-border" />
            <Button class="text-destructive  flex-1" variant="ghost"
                @click="handleOpenDeleteDialog(props.savingsGoalDetail)">
                <Trash2 /> Delete
            </Button>
        </div>

        <!-- Update dialog -->
        <GroupDetailSavingsGoalEditDialog v-model="openEditDialog" :savings-goal="selectedSavingsGoal"
            v-if="selectedSavingsGoal" @success="openEditDialog = false" />

        <!-- Delete dialog -->
        <AppConfirmDialog v-model="openDeleteDialog" @confirm="handleDeleteConfirm" />
    </div>
</template>


<style scoped></style>