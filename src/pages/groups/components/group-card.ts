export const groupCardActionType = ['edit', 'delete'] as const
export type GroupCardActionType = (typeof groupCardActionType)[number]
