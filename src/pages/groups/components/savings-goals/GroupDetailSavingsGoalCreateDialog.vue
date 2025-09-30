<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useSavingsGoalMutations } from '@/features/savings-goal/mutations';
import type { CreateSavingsGoalPayload, SavingsGoalSchema } from '@/features/savings-goal/type';
import { useRoute } from 'vue-router';
import { computed, defineAsyncComponent } from 'vue';
import type { GroupId } from '@/features/groups/type';
const GroupDetailSavingsGoalForm = defineAsyncComponent(() => import('./GroupDetailSavingsGoalForm.vue'))

const emits = defineEmits<{
    (e: 'success'): void
}>()
const route = useRoute()
const groupId = computed<GroupId>(() => +route.params.groupId)

const openDialog = defineModel({ default: false })
const { createMutation: { mutate: createSavingsGoalMutate, isPending } } = useSavingsGoalMutations()

const handleSubmit = (data: SavingsGoalSchema) => {
    const payload = data as CreateSavingsGoalPayload

    createSavingsGoalMutate({ groupId: groupId.value, payload }, {
        onSuccess: () => emits('success'),
    })
}
</script>
<template>
    <Dialog v-model:open="openDialog">
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create new savings goal</DialogTitle>
                <DialogDescription>
                    Create a new savings goal and start saving together with your friends.
                </DialogDescription>
            </DialogHeader>

            <Suspense>
                <GroupDetailSavingsGoalForm @submit="handleSubmit" :loading="isPending" />
                <template #fallback>
                    Loading...
                </template>
            </Suspense>
        </DialogContent>
    </Dialog>
</template>



<style scoped></style>