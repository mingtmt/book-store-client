'use client'
import { type FormEvent, useState } from 'react'
import { CiLock, CiMail } from 'react-icons/ci'
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
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-1 text-center text-gray-800">
          Welcome Back! <span className="inline-block">👋</span>
        </h1>
        <p className="text-center text-gray-500 mb-6">Sign in to your account</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="relative">
            <CiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
            <input
              type="email"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none placeholder-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <CiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
            <input
              type="password"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none placeholder-gray-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" className="rounded border-gray-300" />
              Remember me
            </label>
            <a href="/auth/forgot-password" className="text-yellow-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            disabled={loading}
            type="submit"
            className="w-full py-2 px-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition disabled:opacity-60"
          >
            {loading ? 'Loging in...' : 'Login'}
          </button>
        </form>

        <hr className="my-6" />

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <a href="/auth/register" className="font-semibold text-yellow-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </main>
  )
}
