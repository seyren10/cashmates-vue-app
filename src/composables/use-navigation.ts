import { ref } from 'vue'
import { useRouter, type RouteLocationNormalized } from 'vue-router'

export function useNavigationState() {
  const router = useRouter()

  const state = ref<'idle' | 'loading'>('idle')

  const toRoute = ref<RouteLocationNormalized | null>(null)

  router.beforeEach((to) => {
    state.value = 'loading'
    toRoute.value = to
  })

  router.afterEach((to, from) => {
    state.value = 'idle'
    toRoute.value = null
  })

  return {
    /**
     * Navigation state of the app
     */
    state,

    /**
     * Current route of the app that is being navigated to
     */
    toRoute,
  }
}
