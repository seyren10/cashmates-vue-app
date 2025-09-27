import { isBefore, startOfDay } from 'date-fns'
import z from 'zod'

export const savingsGoalSchema = z.object({
  name: z.string().trim().nonempty().min(4),
  target_amount: z.number().min(1),
  deadline: z.coerce
    .date()
    .optional()
    .refine(
      (date) => {
        if (!date) return true // allow optional
        const today = startOfDay(new Date())
        return !isBefore(date, today) // must be today or in the future
      },
      {
        message: 'Deadline must be today or in the future',
      },
    ),
})
