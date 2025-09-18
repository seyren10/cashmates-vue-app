import { useNavigationStore } from '@/stores/navigation'
import { storeToRefs } from 'pinia'
import { readonly } from 'vue'

export const useNavigation = () => {
  const navigationStore = useNavigationStore()
  const { isPending } = storeToRefs(navigationStore)

  return {
    isPending: readonly(isPending),
  }
}
