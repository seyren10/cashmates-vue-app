<script setup lang="ts">
import { onWatcherCleanup, useTemplateRef, watchEffect } from 'vue';


const emits = defineEmits<{
    (e: 'submit'): void
}>()

const isEditing = defineModel('isEditing', { default: false })
const text = defineModel('text', { default: '' })
const inputRef = useTemplateRef('inputRef')

const handleSubmit = () => {
    emits('submit')
    isEditing.value = false
}
watchEffect(() => {
    if (isEditing.value) {
        const id = setTimeout(() => {
            inputRef.value?.focus()
        }, 100)

        onWatcherCleanup(() => {
            clearTimeout(id)
        })
    }
})

</script>
<template>
    <span>
        <input v-show="isEditing" v-model="text" ref="inputRef" @blur="isEditing = false"
            @keydown.enter.prevent="handleSubmit" />
        <template v-if="!isEditing">
            {{ text }}
        </template>
    </span>
</template>



<style lang="scss" scoped></style>