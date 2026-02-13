'use client'

import { PropertyCard } from '@/components/shared/PropertyCard'
import { Button } from '@/components/ui/button'
import { useProperties } from '@/lib/propertyStorage'
import { CheckCircle, Clock, Heart, LogOut, Settings } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface User {
  name: string
  email: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  const [favorites, setFavorites] = useState<string[]>([])
  const { properties } = useProperties()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      const storedFavorites = localStorage.getItem('favorites')
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites))
      }
    } else {
      router.push('/admin/login')
    }
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  const toggleFavorite = (propertyId: string) => {
    const newFavorites = favorites.includes(propertyId)
      ? favorites.filter((id) => id !== propertyId)
      : [...favorites, propertyId]
    setFavorites(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  const favoriteProperties = properties.filter((p) => favorites.includes(p.id))

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) return null

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome, {user.name}!</h1>
              <p className="text-lg opacity-90">{user.email}</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 font-medium border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-accent text-accent'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Overview
            </div>
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`px-4 py-3 font-medium border-b-2 transition-colors ${
              activeTab === 'favorites'
                ? 'border-accent text-accent'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Favorites ({favorites.length})
            </div>
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-4 py-3 font-medium border-b-2 transition-colors ${
              activeTab === 'inquiries'
                ? 'border-accent text-accent'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Inquiries
            </div>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-3 font-medium border-b-2 transition-colors ${
              activeTab === 'settings'
                ? 'border-accent text-accent'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </div>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-primary">Saved Properties</h3>
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-2">{favorites.length}</p>
                <p className="text-sm text-muted-foreground">Properties in your favorites</p>
              </div>
              <div className="bg-white border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-primary">Inquiries</h3>
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-2">0</p>
                <p className="text-sm text-muted-foreground">Active property inquiries</p>
              </div>
              <div className="bg-white border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-primary">Bookings</h3>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-2">0</p>
                <p className="text-sm text-muted-foreground">Scheduled inspections</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/properties">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Browse Properties
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full font-semibold">
                    Send Inquiry
                  </Button>
                </Link>
                <Button variant="outline" className="w-full font-semibold">
                  View Notifications
                </Button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'favorites' && (
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Your Favorite Properties</h2>
            {favoriteProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="bg-secondary rounded-lg p-12 text-center">
                <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-lg text-muted-foreground mb-4">No favorite properties yet</p>
                <Link href="/properties">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Browse Properties
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}

        {activeTab === 'inquiries' && (
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Your Inquiries</h2>
            <div className="bg-secondary rounded-lg p-12 text-center">
              <Clock className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-lg text-muted-foreground mb-4">No active inquiries</p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Your First Inquiry
                </Button>
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-primary mb-6">Account Settings</h2>
            <div className="bg-white border border-border rounded-lg p-6 space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                <input
                  type="text"
                  defaultValue={user.name}
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  defaultValue={user.email}
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Password</label>
                <input
                  type="password"
                  placeholder="Enter new password (leave blank to keep current)"
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Save Changes
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
