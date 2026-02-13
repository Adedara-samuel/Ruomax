import { redirect } from 'next/navigation'

export default function AdminIndexPage() {
  // always send to dashboard
  redirect('/admin/dashboard')
}
