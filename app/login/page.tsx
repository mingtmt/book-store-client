'use client'
import { type FormEvent, useState } from 'react'
import { loginClient } from '@/lib/actions/auth'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const res = await loginClient({ email, password })
    setLoading(false)

    if (!res.ok) {
      setError(res.message ?? 'Login failed')
      return
    }
    window.location.href = '/'
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor='email' className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor='password' className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            disabled={loading}
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg disabled:opacity-60"
          >
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>
      </div>
    </main>
  )
}
