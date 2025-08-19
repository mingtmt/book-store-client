import ky, { HTTPError } from 'ky'

export const api = ky.create({
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  retry: { limit: 0 },
})

export async function parseKyError(err: unknown) {
  if (err instanceof HTTPError) {
    try {
      const j = await err.response.json()
      return j?.message ?? err.message
    } catch {
      return err.message
    }
  }
  return (err as Error)?.message ?? 'Unknown error'
}
