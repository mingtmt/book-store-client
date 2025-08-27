'use client'
import type { InputHTMLAttributes, ReactNode } from 'react'

interface InputWithIconProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
}

export function InputWithIcon({ icon, className = '', ...props }: InputWithIconProps) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">{icon}</span>
      <input
        {...props}
        className={`w-full pl-10 pr-3 py-2 border rounded-lg 
                    placeholder-gray-600
                    focus:ring-2 focus:ring-yellow-400 focus:outline-none
                    ${className}`}
      />
    </div>
  )
}
