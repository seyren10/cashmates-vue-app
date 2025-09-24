<script setup lang="ts">
import AppAvatarText from '@/components/app/AppAvatarText.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleTrigger } from '@/components/ui/collapsible';
import CollapsibleContent from '@/components/ui/collapsible/CollapsibleContent.vue';
import { Separator } from '@/components/ui/separator';
import { formatToPhp } from '@/lib/number-format';
import { LoaderCircle, MessageCircle, MinusIcon } from 'lucide-vue-next';
import { computed, defineAsyncComponent } from 'vue';
import AppImage from '@/components/app/AppImage.vue';
import { formatDistanceToNow } from 'date-fns';
import type { Expense } from '@/features/expenses/type';
const ExpenseCardItemComments = defineAsyncComponent(() => import('./ExpenseCardItemComments.vue'))

const { expense } = defineProps<{ expense: Expense }>()

const user = computed(() => expense.user)
</script>
<template>
    <Card class="p-4">
        <CardContent class="text-sm p-0 space-y-4">
            <div class="flex items-center justify-between gap-2">
                <AppAvatarText :name="user.name" />
                <div class="mr-auto">
                    <p class="capitalize font-medium ">{{ user.name }}</p>
                    <p class="text-xs text-muted-foreground">{{ formatDistanceToNow(expense.created_at, {
                        addSuffix: true
                    }) }}</p>
                </div>
                <Badge variant="destructive">
                    <MinusIcon /> {{ formatToPhp(expense.amount) }}
                </Badge>
            </div>
            <p>{{ expense.description || '-' }}</p>
            <div class="aspect-square max-w-56 mx-auto" v-if="expense.media && expense.media.length">
                <AppImage :src="expense.media[0].original_url" alt="receipt" class="w-full h-full object-contain" />
            </div>
            <Separator />
            <Collapsible>
                <CollapsibleTrigger as-child>
                    <Button variant="ghost" size="sm" class="text-xs">
                        <MessageCircle class="text-muted-foreground" /> Comments {{
                            expense.comments_count }}
                    </Button>
                </CollapsibleTrigger>

                <CollapsibleContent>
                    <Suspense :timeout="1000">
                        <ExpenseCardItemComments :expense="expense" />
                        <template #fallback>
                            <div class="h-20 grid place-content-center">
                                <LoaderCircle class="animate-spin size-4" />
                            </div>
                        </template>
                    </Suspense>
                </CollapsibleContent>
            </Collapsible>
        </CardContent>
    </Card>
</template>



<style scoped></style>