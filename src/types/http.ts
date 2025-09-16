import type { AxiosError } from 'axios'

export type CashmateError = AxiosError<{ message: string }>
