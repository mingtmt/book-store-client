import type { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-dvh flex items-center justify-center bg-gray-50">{children}</div>
}
