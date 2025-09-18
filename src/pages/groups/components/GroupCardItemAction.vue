<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { CopyIcon, EditIcon, MoreVertical, Trash2 } from 'lucide-vue-next';

import type { Group } from '@/features/groups/type';
import { computed } from 'vue';
import { toast } from 'vue-sonner';
import type { GroupCardActionType } from './group-card';

const { group } = defineProps<{
    group: Group
}>()
const emits = defineEmits<{
    (e: 'action', type: GroupCardActionType): void
}>()

const joinCode = computed(() => group.join_code)

const handleCopyInvitationCode = async () => {
    try {
        await navigator.clipboard.writeText(joinCode.value)
        toast.success('Copied to clipboard')
    } catch (error) {
        toast.error('Failed to copy invitation code')
    }
}

const handleEdit = (type: GroupCardActionType) => {
    emits('action', type)
}
</script>
<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="icon">
                <MoreVertical />
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" @close-auto-focus="(e) => e.preventDefault()">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem @select="() => handleEdit('edit')" v-if="group.pivot.role === 'owner'">
                <EditIcon /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem @select="handleCopyInvitationCode">
                <CopyIcon /> Copy Invitation code
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Danger zone</DropdownMenuLabel>
            <DropdownMenuItem class="text-destructive focus:text-destructive">
                <Trash2 class="text-destructive" /> Delete
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>



<style scoped></style>