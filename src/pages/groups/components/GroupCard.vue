<script setup lang="ts">
import type { Group } from '@/features/groups/type';
import GroupCardItem from './GroupCardItem.vue';
import { RouterLink } from 'vue-router';
import { useNavigationState } from '@/composables/use-navigation';
import GroupCardLoader from './GroupCardLoader.vue';
const props = defineProps<{
    groups: Group[]
}>()
const { toRoute } = useNavigationState()



</script>

<template>
    <ul class="space-y-4">
        <li v-for="group in groups" :key="group.id">
            <RouterLink :to="{ name: 'groups.detail', params: { groupId: group.id } }">
                <GroupCardItem :group="group" v-if="toRoute?.params.groupId !== String(group.id)" />
                <GroupCardLoader v-else />
            </RouterLink>
        </li>
    </ul>
</template>


<style scoped></style>