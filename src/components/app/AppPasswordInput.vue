<script setup lang="ts">
import { Eye, EyeOff } from 'lucide-vue-next';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { computed, ref, useAttrs, type HTMLAttributes, type InputHTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

defineOptions({
    inheritAttrs: false
})
const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
const model = defineModel({ default: '' })
const showPassword = ref(false)


const inputType = computed(() => showPassword.value ? 'text' : 'password')
const inputIcon = computed(() => showPassword.value ? EyeOff : Eye)



const attributes = useAttrs()
const inputAttrs = computed<InputHTMLAttributes>(() => {
    const { class: _, ...attrs } = attributes
    return attrs
})
</script>
<template>
    <div :class="cn('flex bg-input/30 rounded-md border', props.class)">
        <Input :type="inputType" class="rounded-tr-none rounded-br-none border-none !bg-transparent" v-model="model"
            v-bind="inputAttrs" />

        <Button variant="ghost" size="icon" type="button" @click="showPassword = !showPassword"
            class="rounded-tl-none rounded-bl-none">
            <component :is="inputIcon" class="size-4" />
        </Button>
    </div>
</template>



<style scoped></style>