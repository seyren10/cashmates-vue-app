import { ref } from 'vue'
import { useSavingsGoalMutations } from '../mutations'
import type { SavingsGoal, SavingsGoalId } from '../type'

export const useDeleteDialog = () => {
  const openDeleteDialog = ref(false)
  const { deleteMutation } = useSavingsGoalMutations()
  const selectedSavingsGoal = ref<SavingsGoal | null>(null)

  const handleOpenDeleteDialog = (savingsGoal: SavingsGoal) => {
    selectedSavingsGoal.value = savingsGoal
    openDeleteDialog.value = true
  }

  const handleDeleteSavingsGoal = async () => {
    deleteMutation.mutate(selectedSavingsGoal.value?.id as SavingsGoalId, {
      onSuccess: () => {
        openDeleteDialog.value = false
      },
    })
  }

  return {
    openDeleteDialog,
    handleDeleteSavingsGoal,
    handleOpenDeleteDialog,
  }
}
