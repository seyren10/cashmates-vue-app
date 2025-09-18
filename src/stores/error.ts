import type { CashmateError } from '@/types/http'
import { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useErrorStore = defineStore('errors', () => {
  const error = ref<Error | null>(null)

  const errorMessage = computed(() => {
    if (error.value instanceof AxiosError) {
      const err = error.value as CashmateError
      return err.response?.data.message
    } else return error.value?.message
  })

  const errorStack = computed(() => {
    return error.value?.stack
  })

  return {
    errorMessage,
    errorStack,
    error,
  }
})
