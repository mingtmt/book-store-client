'use client'
import { type FormEvent, useState } from 'react'
import { CiLock, CiMail, CiUser } from 'react-icons/ci'
import { InputWithIcon } from '@/components/InputWithIcon'
import { LoginButton } from '@/components/LoginButton'
import { registerClient } from '@/lib/actions/auth'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [age, setAge] = useState<number | ''>('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    // quick client-side checks
    if (!name.trim()) return setError('Name is required')
    if (age === '' || Number.isNaN(age)) return setError('Age is required')
    if ((age as number) < 13) return setError('You must be at least 13')
    if (!email.trim()) return setError('Email is required')
    if (password.length < 8) return setError('Password must be at least 8 characters')
    if (password !== confirmPassword) return setError('Passwords do not match')

    setLoading(true)
    const res = await registerClient({ name: name.trim(), age, email: email.trim(), password })

    if (!res.ok) {
      setError(res.message ?? 'Registration failed')
      return
    }
    window.location.href = '/login?registered=1'
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-1 text-center text-gray-800">Sign Up</h1>
        <p className="text-center text-gray-600 mb-6">
          Create an account to explore our collection
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <InputWithIcon
            icon={<CiUser className="w-5 h-5" />}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <InputWithIcon
            icon={<CiUser className="w-5 h-5" />}
            type="number"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value ? parseInt(e.target.value, 10) : '')}
            required
          />
          <InputWithIcon
            icon={<CiMail className="w-5 h-5" />}
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputWithIcon
            icon={<CiLock className="w-5 h-5" />}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <InputWithIcon
            icon={<CiLock className="w-5 h-5" />}
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p className="text-sm text-red-600">{error}</p>}

          <LoginButton disabled={loading} type="submit">
            {loading ? 'Registering...' : 'Register'}
          </LoginButton>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <a href="/(auth)/login" className="font-semibold text-yellow-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </main>
  )
}
