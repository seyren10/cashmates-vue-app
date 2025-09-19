<script setup lang="ts">
import Badge from '@/components/ui/badge/Badge.vue';
import { Button } from '@/components/ui/button';
import type { GroupDetail } from '@/features/groups/type';
import { useUserStore } from '@/stores/user';
import { ChevronLeft, User2 } from 'lucide-vue-next';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import GroupDetailUserPopover from './GroupDetailUserPopover.vue';
import { useNavigationState } from '@/composables/use-navigation';
import AppButtonLoaderSwap from '@/components/app/AppButtonLoaderSwap.vue';


const { group } = defineProps<{
    group: GroupDetail
}>()

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const userRole = computed(() => group.users.find(u => u.id === user.value?.id)?.pivot.role)

const { state } = useNavigationState()
</script>
<template>
    <div class="flex items-center justify-between gap-2">
        <Button size="icon" class="rounded-full" variant="ghost" @click="$router.back()">
            <AppButtonLoaderSwap :loading="state === 'loading'">
                <ChevronLeft />
            </AppButtonLoaderSwap>
        </Button>
        <h1 class="text-lg capitalize font-medium line-clamp-2 grow">{{ group.name }}</h1>
        <div class="flex flex-col items-end gap-1">
            <Badge>
                <User2 /> {{ userRole }}
            </Badge>
            <GroupDetailUserPopover :users="group.users" />
        </div>
    </div>
</template>



<style scoped></style>