'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function PageLoadDetector() {
  const router = useRouter()

  useEffect(() => {
    // Listen for route changes via the router
    const handleRouteChange = () => {
      // You can add analytics or other tracking here
      // The page transition animation will handle the visual effect
    }

    // This is a simple implementation - Next.js handles transitions automatically
    return () => {
      handleRouteChange()
    }
  }, [router])

  return null
}
