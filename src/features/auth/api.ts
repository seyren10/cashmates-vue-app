import { httpClient } from '@/services/axios/axios'
import type { LoginCredentials, RegistrationPayload } from './type'

export const login = async (payload: LoginCredentials) => {
  await getCsrfCookie()
  await httpClient.post('/login', payload)
}

export const logout = async () => {
  await httpClient.post('/logout')
}

export const register = async (payload: RegistrationPayload) => {
  await httpClient.post('/register', payload)
}

export const getCsrfCookie = async () => {
  await httpClient.get('/sanctum/csrf-cookie')
}
