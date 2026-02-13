'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  useEffect(() => {
    // redirect to login if not authenticated
    const a = localStorage.getItem('admin')
    if (!a) {
      router.replace('/admin/login')
    }
  }, [router])

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 shadow">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
