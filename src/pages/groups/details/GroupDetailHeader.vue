<script setup lang="ts">
import Badge from '@/components/ui/badge/Badge.vue';
import { Button } from '@/components/ui/button';
import type { GroupDetail, GroupId } from '@/features/groups/type';
import { useUserStore } from '@/stores/user';
import { ChevronLeft, User2 } from 'lucide-vue-next';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import GroupDetailUserPopover from './components/GroupDetailUserPopover.vue';
import { useNavigationState } from '@/composables/use-navigation';
import AppButtonLoaderSwap from '@/components/app/AppButtonLoaderSwap.vue';
import { useQuery } from '@tanstack/vue-query';
import { getGroupQueryOptions } from '@/features/groups/query-options';
import AppHeader from '@/components/app/AppHeader.vue';


const { groupId } = defineProps<{
    groupId: string
}>()

const { data, suspense } = useQuery(getGroupQueryOptions(() => +groupId as GroupId))
await suspense()
const group = computed(() => data.value!)

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const userRole = computed(() => group.value.users.find(u => u.id === user.value?.id)?.pivot.role)
</script>
<template>
    <AppHeader>
        <h1 class="text-lg capitalize font-medium line-clamp-2 grow">{{ group.name }}</h1>
        <div class="flex flex-col items-end gap-1">

            <GroupDetailUserPopover :users="group.users">
                <Badge as="button">
                    <User2 /> {{ userRole }}
                </Badge>
            </GroupDetailUserPopover>
        </div>
    </AppHeader>
</template>



<style scoped></style>