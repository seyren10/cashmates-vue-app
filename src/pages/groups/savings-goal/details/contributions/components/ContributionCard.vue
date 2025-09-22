<script setup lang="ts">
import type { Contribution } from '@/features/contributions/type';
import ContributionCardItem from './ContributionCardtem.vue';


const { contributions } = defineProps<{
    contributions: Contribution[]
}>()
</script>
<template>
    <ul class="space-y-2">
        <li v-for="contribution in contributions" :key="contribution.id">
            <ContributionCardItem :contribution="contribution" />
        </li>
    </ul>
</template>



<style scoped></style>