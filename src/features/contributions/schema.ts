import z from 'zod'

export const contributionSchema = z.object({
  amount: z.number().min(1),
  note: z.string().trim().max(255).nullable().optional(),
  receipt: z
    .instanceof(File)
    .nullable()
    .optional()
    .refine(
      (file) => {
        if (!file) return true
        return ['image/jpeg', 'image/png'].includes(file.type)
      },
      {
        message: 'Only JPEG and PNG images are allowed',
      },
    )
    .refine(
      (file) => {
        if (!file) return true
        return file.size <= 2 * 1024 * 1024
      },
      {
        message: 'File size must be less than 2MB',
      },
    ),
})
