import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigationStore = defineStore('navigation', () => {
  const isPending = ref(false)

  return {
    isPending,
  }
})
