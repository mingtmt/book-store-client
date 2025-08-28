import { type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const BASE = process.env.API_BASE_URL

const RegisterSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  age: z.number().int().min(0, 'Age must be a positive number'),
  email: z.email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = RegisterSchema.parse(body)

    // Forward to your real backend
    const upstream = await fetch(`${BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
      body: JSON.stringify(data),
    })

    const text = await upstream.text()
    let parsed: any
    try {
      parsed = JSON.parse(text)
    } catch {
      parsed = { message: text }
    }

    if (!upstream.ok) {
      return NextResponse.json(
        { error: parsed?.message ?? 'Registration failed' },
        { status: upstream.status },
      )
    }

    // e.g. { id, name, email } or token
    return NextResponse.json(parsed, { status: 201 })
  } catch (err: any) {
    if (err?.issues) {
      // zod error
      return NextResponse.json({ error: 'Validation failed', details: err.issues }, { status: 400 })
    }
    return NextResponse.json({ error: err?.message ?? 'Unexpected error' }, { status: 500 })
  }
}
