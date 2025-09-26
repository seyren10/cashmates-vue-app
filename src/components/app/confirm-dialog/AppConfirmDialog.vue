<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Trash2 } from 'lucide-vue-next';
import type { AppConfirmDialogProps } from '.';

defineEmits<{
    (e: 'confirm'): void
}>()
const { title = 'Please confirm', description = 'Are you sure?' } = defineProps<AppConfirmDialogProps>()
const openDialog = defineModel({ default: false })

</script>

<template>
    <Dialog v-model:open="openDialog">
        <DialogContent>
            <DialogHeader>
                <slot name="title">
                    <DialogTitle>
                        {{ title }}
                    </DialogTitle>
                </slot>

                <slot name="description">
                    <DialogDescription>
                        {{ description }}
                    </DialogDescription>
                </slot>
            </DialogHeader>
            <DialogFooter>
                <slot name="confirm">
                    <Button variant="destructive" @click="$emit('confirm')">
                        <Trash2 />Delete
                    </Button>
                </slot>
                <DialogClose as-child>
                    <Button variant="secondary">Cancel</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>


<style scoped></style>