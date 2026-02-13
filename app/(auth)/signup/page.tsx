'use client'

import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg border border-border shadow-lg p-8 text-center">
      <h1 className="text-2xl font-bold text-primary mb-4">Registration Closed</h1>
      <p className="text-muted-foreground mb-6">
        This application does not allow new user registrations. Only a single administrator can
        access the dashboard. Please <Link href="/admin/login" className="text-accent hover:underline">log in</Link> with the
        credentials provided by the site owner.
      </p>
      <p className="text-sm">
        <strong>Admin account:</strong> <code>admin@admin.com</code> / <code>Passw0rd</code>
      </p>
    </div>
  )
}
