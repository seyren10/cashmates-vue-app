<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import DropdownMenuTrigger from '@/components/ui/dropdown-menu/DropdownMenuTrigger.vue';
import { EditIcon, MoreVerticalIcon, Trash2 } from 'lucide-vue-next';

defineEmits<{
    (e: 'edit'): void
    (e: 'delete'): void
}>()
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child @click.prevent>
            <Button size="icon" variant="ghost">
                <MoreVerticalIcon />
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem @select="$emit('edit')">
                <EditIcon /> Edit
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuLabel>Danger zone</DropdownMenuLabel>
            <DropdownMenuItem class="text-destructive focus:text-destructive" @select="$emit('delete')">
                <Trash2 class="text-destructive" /> Delete
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>



<style scoped></style>