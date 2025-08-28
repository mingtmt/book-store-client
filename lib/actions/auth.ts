import { api, parseKyError } from '@/lib/http'
import { LoginFormSchema, RegisterFormSchema } from '@/lib/schemas/auth'

export async function loginClient(values: unknown) {
  const parsed = LoginFormSchema.safeParse(values)
  if (!parsed.success) return { ok: false, message: 'Please check your email/password.' }

  try {
    await api.post('api/auth/login', { json: parsed.data }).json<{ ok: true }>()
    return { ok: true }
  } catch (err) {
    const message = await parseKyError(err)
    return { ok: false, message }
  }
}

export async function registerClient(values: unknown) {
  const parsed = RegisterFormSchema.safeParse(values)
  if (!parsed.success) return { ok: false, message: 'Please check your registration details.' }

  try {
    await api.post('api/auth/register', { json: parsed.data }).json<{ ok: true }>()
    return { ok: true }
  } catch (err) {
    const message = await parseKyError(err)
    return { ok: false, message }
  }
}
