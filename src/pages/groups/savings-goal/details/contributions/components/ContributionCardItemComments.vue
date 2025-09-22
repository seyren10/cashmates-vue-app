<script setup lang="ts">
import AppAvatarText from '@/components/app/AppAvatarText.vue';
import { getContributionCommentsQueryOptions, getContributionQueryOptions } from '@/features/contributions/query-options';
import type { Contribution, ContributionDetail } from '@/features/contributions/type';
import { useQuery } from '@tanstack/vue-query';
import { format, formatDistance, formatDistanceToNow } from 'date-fns';
import { MessageCircleOff } from 'lucide-vue-next';
import { computed } from 'vue';


const { contribution } = defineProps<{ contribution: Contribution }>()

const { data, suspense } = useQuery(getContributionCommentsQueryOptions(contribution.id))
await suspense()

const comments = computed(() => data.value)
</script>
<template>
    <div class="ml-4 p-2">
        <ul class="space-y-4" v-if="comments && comments.length">
            <li v-for="comment in comments" :key="comment.id">
                <div class="flex gap-2">
                    <AppAvatarText :name="comment.user.name" class="size-7 shrink-0" />
                    <div>
                        <p class="font-medium capitalize">{{ comment.user.name }}
                            <span class="text-xs text-muted-foreground normal-case">({{
                                formatDistanceToNow(comment.created_at,
                                    { addSuffix: true })
                            }})
                            </span>
                        </p>
                        <p class="text-sm">{{ comment.body }}</p>
                    </div>
                </div>
            </li>
        </ul>
        <!-- fallback -->
        <div v-else class="border rounded-xl border-dashed min-h-30 text-xs grid place-content-center gap-2">
            <MessageCircleOff class="text-muted-foreground mx-auto" />
            <p class="text-muted-foreground">There's no comments on this contribution yet.</p>
        </div>
    </div>
</template>


<style scoped></style>