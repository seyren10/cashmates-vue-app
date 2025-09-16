import { useNavigationStore } from '@/stores/navigation'
import { storeToRefs } from 'pinia'

export const useNavigation = () => {
  const navigationStore = useNavigationStore()
  const { isPending } = storeToRefs(navigationStore)

  return {
    isPending,
  }
}
