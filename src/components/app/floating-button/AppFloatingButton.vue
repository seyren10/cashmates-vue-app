<script setup lang="ts">
import AppButtonLoaderSwap from '@/components/app/AppButtonLoaderSwap.vue';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useScrollDirection } from '@/composables/use-scroll-direction';
import { cn } from '@/lib/utils';
import { PlusIcon } from 'lucide-vue-next';
import type { AppFloatingButtonProps } from '.';


defineOptions({
    inheritAttrs: false
})
defineProps<AppFloatingButtonProps>()
const { lastDirection } = useScrollDirection()

</script>
<template>
    <Tooltip>
        <TooltipTrigger as-child>
            <slot v-bind="{ lastDirection }">
                <Button size="icon"
                    :class="cn('rounded-full size-10 fixed bottom-4 left-4 aria-hidden:-bottom-20', $attrs['class'] as string)"
                    :aria-hidden="lastDirection === 'down'" v-bind="$attrs">
                    <AppButtonLoaderSwap :loading="loading">
                        <PlusIcon />
                    </AppButtonLoaderSwap>
                </Button>
            </slot>
        </TooltipTrigger>
        <TooltipContent>
            <slot name="tooltip">
                <p>{{ tooltipText }}</p>
            </slot>
        </TooltipContent>
    </Tooltip>
</template>

<style scoped></style>