<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import GroupForm from './GroupForm.vue';
import { useGroupMutations } from '@/features/groups/mutations';
import type { CreateGroupPayload, GroupSchema } from '@/features/groups/type';



const emits = defineEmits<{
    (e: 'success'): void
}>()
const openDialog = defineModel({ default: false })
const { createMutation: { mutate: createGroupMutate, isPending } } = useGroupMutations()

const handleSubmit = (data: GroupSchema) => {
    const payload = data as CreateGroupPayload

    createGroupMutate(payload, {
        onSuccess: () => emits('success'),
    })
}
</script>
<template>
    <Dialog v-model:open="openDialog">
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create a new group</DialogTitle>
                <DialogDescription>
                    Create a new group and share it with your friends and start saving together.
                </DialogDescription>
            </DialogHeader>

            <GroupForm @submit="handleSubmit" :loading="isPending" />
        </DialogContent>
    </Dialog>
</template>



<style scoped></style>