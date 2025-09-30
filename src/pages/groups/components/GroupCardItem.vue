<script setup lang="ts">
import AppWithIcon from '@/components/app/AppWithIcon.vue';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Group, GroupId } from '@/features/groups/type';
import { Share2, Target, Users2 } from 'lucide-vue-next';
import { computed, ref, type MaybeRef, type MaybeRefOrGetter } from 'vue';
import GroupCardItemAction from './GroupCardItemAction.vue';
import type { GroupCardActionType } from './group-card';
import AppTextToInput from '@/components/app/AppTextToInput.vue';
import { useGroupMutations } from '@/features/groups/mutations';
import { toast } from 'vue-sonner';
import type { CashmateError } from '@/types/http';
import { AppConfirmDialog } from '@/components/app/confirm-dialog';

const { group } = defineProps<{
    group: Group
}>()

const { editInput, isEditing, handleUpdateGroup } = useEditInput(group.name)
const { deleteConfirm, handleDeleteGroup, isDeleting } = useDeleteGroup()

function useEditInput(name: MaybeRef<string>) {
    const groupName = computed(() => name)
    const isEditing = ref(false)
    const editInput = ref(groupName.value)
    const { updateMutation } = useGroupMutations()

    const handleUpdateGroup = async () => {
        updateMutation.mutate({ groupId: group.id, payload: { name: editInput.value } }, {
            onError: (err) => {
                const error = err as CashmateError
                toast.error(error.response?.data?.message || 'Something went wrong')
            }
        })
    }
    return {
        isEditing,
        editInput,
        handleUpdateGroup
    }
}

function useDeleteGroup() {

    const deleteConfirm = ref(false)
    const { deleteMutation: { mutate: deleteGroupMutate, isPending } } = useGroupMutations()
    const handleDeleteGroup = async (groupId: GroupId) => {
        deleteGroupMutate(groupId,)
    }
    return {
        deleteConfirm,
        isDeleting: isPending,
        handleDeleteGroup
    }
}

const handleAction = (type: GroupCardActionType) => {
    switch (type) {
        case 'edit':
            isEditing.value = true
            break;
        case 'delete':
            deleteConfirm.value = true
            break;
        default:
            throw new Error('Invalid action type')
    }
}
</script>
<template>
    <Card>
        <CardHeader class="flex justify-between gap-4 items-start">
            <div class="space-y-1.5">
                <CardTitle class="capitalize">
                    <AppTextToInput v-model:text="editInput" v-model:is-editing="isEditing" @submit="handleUpdateGroup">
                        {{ group.name }}
                    </AppTextToInput>
                </CardTitle>
                <CardDescription>
                    <Badge class="capitalize">
                        {{ group.pivot.role }}
                    </Badge>
                </CardDescription>
            </div>

            <GroupCardItemAction :group="group" @action="handleAction" />
        </CardHeader>
        <CardContent class="flex gap-4 items-center">
            <AppWithIcon :icon="Users2">{{ group.users_count }}</AppWithIcon>
            <AppWithIcon :icon="Target">{{ group.savings_goals_count }}</AppWithIcon>
            <AppWithIcon :icon="Share2" class="ml-auto text-muted-foreground">{{ group.join_code }}</AppWithIcon>
        </CardContent>

        <AppConfirmDialog v-model="deleteConfirm" @confirm="handleDeleteGroup(group.id)" title="Delete Group"
            description="Are you sure you want to delete this group? This action cannot be undone." />
    </Card>
</template>



<style scoped></style>