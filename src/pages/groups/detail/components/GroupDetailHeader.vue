<script setup lang="ts">
import Badge from '@/components/ui/badge/Badge.vue';
import { Button } from '@/components/ui/button';
import type { GroupDetail } from '@/features/groups/type';
import { useUserStore } from '@/stores/user';
import { ChevronLeft, User2 } from 'lucide-vue-next';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';


const { group } = defineProps<{
    group: GroupDetail
}>()

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const userRole = computed(() => group.users.find(u => u.id === user.value.id)?.pivot.role)
</script>
<template>
    <div class="flex items-center  justify-between gap-2">
        <Button size="icon" class="rounded-full" variant="ghost" @click="$router.back()">
            <ChevronLeft />
        </Button>
        <h1 class="text-lg capitalize font-medium line-clamp-2">{{ group.name }}</h1>
        <Badge>
            <User2 /> {{ userRole }}
        </Badge>
    </div>
</template>



<style scoped></style>