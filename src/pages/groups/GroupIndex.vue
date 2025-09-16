<script setup lang="ts">
import { getGroupsQueryOptions } from '@/features/groups/query-options';
import { useQuery } from '@tanstack/vue-query'

const { data: groups } = useQuery(getGroupsQueryOptions)
</script>
<template>
    <div>
        <pre>
            {{ groups }}
        </pre>
    </div>
</template>



<style scoped></style>