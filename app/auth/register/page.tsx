'use client'
import { type FormEvent, useState } from 'react'
import { CiLock, CiMail, CiUser } from 'react-icons/ci'

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
    setLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    // TODO: Call your register API
    console.log({ name, age, email, password })

    setLoading(false)
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-1 text-center text-gray-800">Sign Up</h1>
        <p className="text-center text-gray-600 mb-6">
          Create an account to explore our collection
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Name */}
          <div className="relative">
            <CiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
            <input
              type="text"
              className="w-full pl-10 pr-3 py-2 border rounded-lg 
                         focus:ring-2 focus:ring-yellow-400 focus:outline-none 
                         placeholder-gray-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
            />
          </div>

          {/* Age */}
          <div className="relative">
            <CiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
            <input
              type="number"
              className="w-full pl-10 pr-3 py-2 border rounded-lg 
                         focus:ring-2 focus:ring-yellow-400 focus:outline-none 
                         placeholder-gray-600"
              value={age}
              onChange={(e) => setAge(e.target.value ? parseInt(e.target.value, 10) : '')}
              required
              placeholder="Age"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <CiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
            <input
              type="email"
              className="w-full pl-10 pr-3 py-2 border rounded-lg 
                         focus:ring-2 focus:ring-yellow-400 focus:outline-none 
                         placeholder-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <CiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
            <input
              type="password"
              className="w-full pl-10 pr-3 py-2 border rounded-lg 
                         focus:ring-2 focus:ring-yellow-400 focus:outline-none 
                         placeholder-gray-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <CiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
            <input
              type="password"
              className="w-full pl-10 pr-3 py-2 border rounded-lg 
                         focus:ring-2 focus:ring-yellow-400 focus:outline-none 
                         placeholder-gray-600"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm password"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            disabled={loading}
            type="submit"
            className="w-full py-2 px-4 bg-yellow-400 text-black font-semibold 
                       rounded-lg hover:bg-yellow-500 transition disabled:opacity-60"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <a href="/auth/login" className="font-semibold text-yellow-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </main>
  )
}
