<script setup lang="ts">
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DollarSign, HandCoins, PlusIcon } from 'lucide-vue-next';

defineEmits<{
    (e: 'conribution'): void
    (e: 'expense'): void
}>()
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <slot />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" side="right">
            <DropdownMenuLabel>Add</DropdownMenuLabel>
            <DropdownMenuItem @select="$emit('conribution')">
                <HandCoins /> Contribution
            </DropdownMenuItem>
            <DropdownMenuItem @select="$emit('expense')">
                <DollarSign /> Expense
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>



<style scoped></style>