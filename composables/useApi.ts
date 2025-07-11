import ky from 'ky';

export const useApi = () => {
  const config = useRuntimeConfig()

  return ky.create({
    prefixUrl: config.public.apiBase,
    hooks: {
      beforeRequest: [
        request => {
        //   const token = useCookie('token').value
        //   if (token) {
        //     request.headers.set('Authorization', `Bearer ${token}`)
        //   }
           request.headers.set('Authorization', `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTIzMzA5NDUsInVzZXJfaWQiOiJhYjYzMjQwYi04OTRkLTRjNjAtOTc3Yy1mYzhmNzRhY2U2NzkifQ.fhAhjnQVAQxxNInVZfw6a5fpaxvo9yNpGjnMCxKF_hlvNb2TNBlFM32pVk4LiqC8PcB8yrTZTeUY7vLrjn1JWpngdnYr00U622RZnPabh9NEa0mmQLBgVKIWmXpmD38VYpxZ884--utgD8qHS_uBlemCCLX4boIJAt_iqCzJSheL9wArE0LUAaR_xPjYf2ucxm5ZfrQas_X4CNf5B98jgg1CYbSEVz0ZCfpyDv32GjvyXJd3hhOYgkAZItYseIsCur_HpBRDAe85larYDUEfYCx8UHTAYN7vKRPBalB34lG8JdIXUGzcq29cgVPaZFW-0asUdhAbu4Zl9Zb2bRlFdg`)
        }
      ]
    }
  })
};