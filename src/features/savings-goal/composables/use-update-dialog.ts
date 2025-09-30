import { ref } from 'vue'
import type { SavingsGoal } from '../type'

export const useUpdateDialog = () => {
  const selectedSavingsGoal = ref<SavingsGoal | null>(null)
  const openEditDialog = ref(false)

  const handleOpenEditDialog = (savingsGoal: SavingsGoal) => {
    selectedSavingsGoal.value = savingsGoal
    openEditDialog.value = true
  }
  return {
    selectedSavingsGoal,
    openEditDialog,
    handleOpenEditDialog,
  }
}
