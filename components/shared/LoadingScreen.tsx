'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  const [show, setShow] = useState(isLoading)

  useEffect(() => {
    setShow(isLoading)
  }, [isLoading])

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-8">
        {/* Logo with pulse animation */}
        <div className="animate-scale-in">
          <Image
            src="/logo.png"
            alt="Ruomax Loading"
            width={150}
            height={80}
            className="animate-pulse-soft"
            priority
          />
        </div>

        {/* Loading spinner */}
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" style={{ animationDelay: '0.4s' }} />
        </div>

        {/* Loading text */}
        <p className="text-foreground text-sm font-medium tracking-wide">Loading...</p>
      </div>
    </div>
  )
}
