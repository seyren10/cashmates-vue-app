<script setup lang="ts">
import { getGroupsQueryOptions } from '@/features/groups/query-options';
import { useQuery } from '@tanstack/vue-query'
import GroupCard from './components/GroupCard.vue';
import { defineAsyncComponent, ref } from 'vue';
import { AppFloatingButton } from '@/components/app/floating-button';
const GroupCreateDialog = defineAsyncComponent(() => import('./components/GroupCreateDialog.vue'))

/* data init */
const { data: groups, suspense } = useQuery(getGroupsQueryOptions)
await suspense()
const openDialog = ref(false)
const dialogPending = ref(false)


</script>
<template>
    <div class="relative">
        <GroupCard :groups="groups!" />
        <AppFloatingButton :loading="dialogPending" @click="openDialog = true" tooltip-text="Create a new group" />
        <Suspense timeout="0" @pending="dialogPending = true" @resolve="dialogPending = false" v-if="openDialog">
            <GroupCreateDialog v-model="openDialog" @success="openDialog = false" />
        </Suspense>
    </div>
</template>



<style scoped></style>