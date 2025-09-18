<script setup lang="ts">
import { getGroupsQueryOptions } from '@/features/groups/query-options';
import { useQuery } from '@tanstack/vue-query'
import GroupCard from './components/GroupCard.vue';

const { data: groups, suspense } = useQuery(getGroupsQueryOptions)
await suspense()

</script>
<template>
    <div>
        <GroupCard :groups="groups!" />
    </div>
</template>



<style scoped></style>