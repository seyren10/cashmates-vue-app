<script setup lang="ts">
import { onWatcherCleanup, useSlots, useTemplateRef, watchEffect } from 'vue';


const emits = defineEmits<{
    (e: 'submit'): void
}>()

const isEditing = defineModel('isEditing', { default: false })
const text = defineModel('text', { default: '' })
const inputRef = useTemplateRef('inputRef')
const slot = defineSlots()

const handleSubmit = () => {
    emits('submit')
    isEditing.value = false
}
watchEffect(() => {
    if (isEditing.value) {
        const id = setTimeout(() => {
            inputRef.value?.focus()
            inputRef.value?.select()
        }, 100)

        onWatcherCleanup(() => {
            clearTimeout(id)
        })
    } else
        text.value = slot.default()[0].children
})

</script>
<template>
    <span>
        <input v-show="isEditing" v-model="text" ref="inputRef" @blur="isEditing = false"
            @keydown.enter.prevent="handleSubmit" @keydown.esc.prevent="isEditing = false" />
        <slot v-if="!isEditing" />
    </span>
</template>



<style lang="scss" scoped></style>