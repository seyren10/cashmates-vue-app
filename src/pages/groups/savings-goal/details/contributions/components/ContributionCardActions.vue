<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Edit, MoreHorizontal, Trash2 } from 'lucide-vue-next';

defineEmits<{
    (e: 'edit'): void
    (e: 'delete'): void
}>()
</script>
<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="icon">
                <MoreHorizontal />
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem @select="$emit('edit')">
                <Edit /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem class="text-destructive focus:text-destructive" @select="$emit('delete')">
                <Trash2 class="text-destructive" /> Delete
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>


<style scoped></style>