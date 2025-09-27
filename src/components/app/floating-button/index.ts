export { default as AppFloatingButton } from './AppFloatingButton.vue'

export type AppFloatingButtonProps = {
  /**
   * Display loading indicator on button using ```AppButtonLoaderSwap ```
   * @default false
   */
  loading?: boolean

  /**
   * Hide button on scroll
   * @default false
   */
  hideOnScroll?: boolean

  /**
   * Show tooltip when hovering over button
   * @default ''
   */
  tooltipText?: string
}
