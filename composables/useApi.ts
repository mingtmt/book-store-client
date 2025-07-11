// composables/useApi.ts
import ky from 'ky'

export const useApi = () => {
  const config = useRuntimeConfig()
  return ky.create({
    prefixUrl: config.public.apiBase,
    hooks: {
      beforeRequest: [
        req => {
          const token = useCookie('token').value
          if (token) req.headers.set('Authorization', `Bearer ${token}`)
        }
      ]
    }
  })
}
