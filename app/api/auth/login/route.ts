import ky from 'ky'
// import { cookies } from "next/headers";
import { NextResponse } from 'next/server'
import { LoginFormSchema, LoginResponseSchema } from '@/lib/schemas/auth'

const BASE = process.env.API_BASE_URL

function readJwtExp(token: string): number | undefined {
  try {
    const [, payload] = token.split('.')
    const json = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'))
    return typeof json?.exp === 'number' ? json.exp : undefined
  } catch {
    return undefined
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = LoginFormSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 })
    }

    const raw = await ky
      .post(`${BASE}/auth/login`, {
        json: parsed.data,
        headers: { accept: 'application/json' },
      })
      .json()

    const data = LoginResponseSchema.parse(raw)
    const token = data.data.access_token

    const exp = readJwtExp(token)
    const maxAge = exp ? Math.max(0, exp - Math.floor(Date.now() / 1000)) : 60 * 60

    const res = NextResponse.json({ ok: true })
    res.cookies.set('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge, // seconds
    })
    return res
  } catch (err: any) {
    if (err?.response) {
      try {
        const j = await err.response.json()
        return NextResponse.json(
          { message: j?.message ?? 'Login failed' },
          { status: err.response.status },
        )
      } catch {}
      return NextResponse.json({ message: 'Login failed' }, { status: err.response.status })
    }
    return NextResponse.json({ message: 'Unexpected error' }, { status: 500 })
  }
}
