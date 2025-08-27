'use client'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  children: ReactNode
}

export const LoginButton = ({
  loading = false,
  children,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={loading || props.disabled}
      {...props}
      className="w-full py-2 px-4 bg-yellow-400 text-black font-semibold 
                       rounded-lg hover:bg-yellow-500 transition disabled:opacity-60"
    >
      {children}
    </button>
  )
}
