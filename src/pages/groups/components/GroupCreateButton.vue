<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { PlusIcon } from 'lucide-vue-next';


defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <Tooltip>
        <TooltipTrigger as-child>
            <slot>
                <Button size="icon" :class="cn('rounded-full size-10 fixed bottom-4 left-4', $attrs['class'] as string)"
                    v-bind="$attrs">
                    <PlusIcon />
                </Button>
            </slot>
        </TooltipTrigger>
        <TooltipContent>
            <slot name="tooltip">
                <p>Create Group</p>
            </slot>
        </TooltipContent>
    </Tooltip>
</template>

<style scoped></style>