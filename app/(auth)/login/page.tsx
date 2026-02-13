'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

// this page is deprecated in favor of the new admin route
export default function LoginPage() {
  const router = useRouter()

  useEffect(() => {
    // immediately redirect to the admin login route
    router.replace('/admin/login')
  }, [router])

  return null
}
