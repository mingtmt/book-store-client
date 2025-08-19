import { z } from 'zod'

export const LoginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(1),
})

export const LoginResponseSchema = z.object({
  data: z.object({
    access_token: z.string().min(1),
    token_type: z.literal('bearer'),
  }),
  meta: z.any().nullable(),
})

export type LoginForm = z.infer<typeof LoginFormSchema>
export type LoginResponse = z.infer<typeof LoginResponseSchema>
