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

export const RegisterFormSchema = z.object({
  name: z.string().min(2).max(100),
  age: z.number().min(0),
  email: z.email(),
  password: z.string().min(8),
})

export const RegisterResponseSchema = z.object({
  data: z.object({
    id: z.string().min(1),
    email: z.email(),
  }),
  meta: z.any().nullable(),
})

export type LoginForm = z.infer<typeof LoginFormSchema>
export type LoginResponse = z.infer<typeof LoginResponseSchema>
export type RegisterForm = z.infer<typeof RegisterFormSchema>
export type RegisterResponse = z.infer<typeof RegisterResponseSchema>
