<script setup lang="ts">
import { Separator } from '@/components/ui/separator';
import { getGroupQueryOptions } from '@/features/groups/query-options';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';
import GroupDetailHeader from './components/GroupDetailHeader.vue';


const props = defineProps<{
    groupId: string
}>()

const { data, suspense } = useQuery(getGroupQueryOptions(() => +props.groupId))
await suspense()
const group = computed(() => data.value!)


</script>
<template>
    <div class="space-y-4">
        <GroupDetailHeader :group="group" />
        <Separator />
    </div>
</template>


<style scoped></style>