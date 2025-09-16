<script setup lang="ts">
import { getGroupsQueryOptions } from '@/features/groups/query-options';
import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue';

const { data: groups, suspense } = useQuery(getGroupsQueryOptions)
await suspense()

const tae = computed(() => groups.value?.concat)
</script>
<template>
    <div>
        <pre>
            {{ groups }}
        </pre>
    </div>
</template>



<style scoped></style>