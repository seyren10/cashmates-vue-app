<script setup lang="ts">
import type { Group } from '@/features/groups/type';
import GroupCardItem from './GroupCardItem.vue';



const props = defineProps<{
    groups: Group[]
}>()

</script>

<template>
    <ul class="space-y-2">
        <li v-for="group in groups" :key="group.id">
            <GroupCardItem :group="group" />
        </li>
    </ul>
</template>


<style scoped></style>