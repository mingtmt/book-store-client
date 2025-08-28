'use client'
import { useSearchParams } from 'next/navigation'
import { type FormEvent, useState } from 'react'
import { CiLock, CiMail } from 'react-icons/ci'
import { InputWithIcon } from '@/components/InputWithIcon'
import { LoginButton } from '@/components/LoginButton'
import { loginClient } from '@/lib/actions/auth'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const params = useSearchParams()
  const justRegistered = params.get('registered') === '1'

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
        <p className="text-center text-gray-500">Sign in to your account</p>

        {justRegistered && (
          <div className="text-sm rounded-lg bg-green-50 p-2 text-green-700 mb-6">
            Account created. Please sign in.
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <InputWithIcon
            icon={<CiMail className="w-5 h-5" />}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputWithIcon
            icon={<CiLock className="w-5 h-5" />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

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

          <LoginButton disabled={loading} type="submit">
            {loading ? 'Loging...' : 'Login'}
          </LoginButton>
        </form>

        <hr className="my-6" />

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <a href="/register" className="font-semibold text-yellow-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </main>
  )
}
