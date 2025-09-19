<script setup lang="ts">
import AppAvatarText from '@/components/app/AppAvatarText.vue';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import type { UserWithPivot } from '@/features/auth/type';
import { Users2 } from 'lucide-vue-next';
import { computed } from 'vue';

const { users } = defineProps<{
    users: UserWithPivot[]
}>()

const userCount = computed(() => users.length)
</script>
<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button variant="ghost" size="sm">
                <Users2 /> {{ userCount }}
            </Button>
        </PopoverTrigger>

        <PopoverContent align="end" class="space-y-4">
            <p class="font-medium">Members</p>
            <ul class="text-sm space-y-2">
                <li v-for="user in users" :key="user.id"
                    class="not-last:border-b not-last:pb-2 flex items-center gap-2">
                    <AppAvatarText :name="user.name" class="size-8" />
                    <div>
                        <p class="capitalize">{{ user.name }}</p>
                        <p class="text-muted-foreground text-xs">{{ user.email }}</p>
                    </div>
                </li>
            </ul>
        </PopoverContent>
    </Popover>
</template>



<style scoped></style>