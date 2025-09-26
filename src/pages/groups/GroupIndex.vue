<script setup lang="ts">
import { getGroupsQueryOptions } from '@/features/groups/query-options';
import { useQuery } from '@tanstack/vue-query'
import GroupCard from './components/GroupCard.vue';
import GroupCreateButton from './components/GroupCreateButton.vue';
import { defineAsyncComponent, onBeforeMount, onMounted, ref } from 'vue';
import AppButtonLoaderSwap from '@/components/app/AppButtonLoaderSwap.vue';
import { PlusIcon } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
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
        <GroupCreateButton>
            <Button size="icon" class="rounded-full size-10 fixed bottom-4 left-4" @click="openDialog = true">
                <AppButtonLoaderSwap :loading="dialogPending">
                    <PlusIcon />
                </AppButtonLoaderSwap>
            </Button>
        </GroupCreateButton>

        <Suspense timeout="0" @pending="dialogPending = true" @resolve="dialogPending = false" v-if="openDialog">
            <GroupCreateDialog v-model="openDialog" @success="openDialog = false" />
        </Suspense>
    </div>
</template>



<style scoped></style>