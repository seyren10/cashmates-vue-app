<script setup lang="ts">
import AppButtonLoaderSwap from '@/components/app/AppButtonLoaderSwap.vue';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigationState } from '@/composables/use-navigation';
import type { SavingsGoalId } from '@/features/savings-goal/type';
import { HandCoins, LoaderCircle, MousePointer2, Receipt } from 'lucide-vue-next';
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';

const { savingsGoalId } = defineProps<{
    savingsGoalId: SavingsGoalId
}>()
const route = useRoute()
const { toRoute } = useNavigationState()

const contributionRouteName = 'savings-goal.contributions.index'
const expenseRouteName = 'savings-goal.expenses.index'

const activeTab = computed(() => {
    if (route.name === contributionRouteName)
        return 'contributions'
    else if (route.name === expenseRouteName)
        return 'expenses'
    else return ''
})
</script>
<template>
    <Tabs :model-value="activeTab">
        <TabsList class="w-full space-x-1">
            <TabsTrigger value="contributions" as-child>
                <RouterLink :to="{ name: contributionRouteName, params: { savingsGoalId }, replace: true }">
                    <AppButtonLoaderSwap :loading="toRoute?.name === contributionRouteName">
                        <HandCoins />
                    </AppButtonLoaderSwap>
                    Contributions
                </RouterLink>
            </TabsTrigger>
            <TabsTrigger value="expenses" as-child>
                <RouterLink :to="{ name: expenseRouteName, params: { savingsGoalId }, replace: true }">
                    <AppButtonLoaderSwap :loading="toRoute?.name === expenseRouteName">
                        <Receipt />
                    </AppButtonLoaderSwap>
                    Expenses
                </RouterLink>
            </TabsTrigger>
        </TabsList>

        <RouterView v-slot="{ Component }">
            <Suspense v-if="Component" timeout="1000">
                <component :is="Component" />
                <template #fallback>
                    <div class="h-20 grid place-content-center">
                        <LoaderCircle class="animate-spin size-4" />
                    </div>
                </template>
            </Suspense>
            <div v-else>
                <div class="rounded-xl border border-dashed h-20 grid place-content-center text-muted-foreground">
                    <MousePointer2 class=" mx-auto" />
                    <p class="text-sm">Select a tab to view details.</p>
                </div>
            </div>
        </RouterView>
    </Tabs>
</template>



<style lang="scss" scoped></style>