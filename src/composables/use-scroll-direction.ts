import { useWindowScroll } from '@vueuse/core'
import { ref, watch } from 'vue'

/**
 * Composable that returns the last scroll direction of the window.
 * It watches the window scroll position and updates the last direction
 * when the scroll position changes.
 *
 * @returns { lastDirection: Ref<'up' | 'down' | null> }
 * lastDirection: The last scroll direction of the window.
 * It is 'up' when the user scrolls up, 'down' when the user scrolls down,
 * and null when the scroll position does not change.
 */
export const useScrollDirection = () => {
  const { y } = useWindowScroll()
  const lastDirection = ref<'up' | 'down' | null>(null)

  watch(y, (newVal, oldVal) => {
    if (newVal > oldVal) {
      lastDirection.value = 'down'
    } else {
      if (newVal < oldVal) {
        lastDirection.value = 'up'
      }
    }
  })

  return {
    lastDirection,
  }
}
