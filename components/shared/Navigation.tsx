'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  // check admin status on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsAdmin(!!localStorage.getItem('admin'))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('admin')
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-sm animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Ruomax"
              width={120}
              height={60}
              className="h-16 w-20 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/properties" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Properties
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/properties?category=buy" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary">
                  Buy
                </Link>
                <Link href="/properties?category=rent" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary">
                  Rent
                </Link>
                <Link href="/properties?category=lease" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary">
                  Lease
                </Link>
              </div>
            </div>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isAdmin && (
              <>
                <Link href="/admin/dashboard">
                  <Button variant="ghost" className="text-sm font-medium">
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" className="text-sm font-medium" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-medium rounded-full px-6">
                Inquiry
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-border bg-card">
            <div className="flex flex-col space-y-3 pt-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-foreground py-2">
                Home
              </Link>
              <Link href="/properties" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-foreground py-2">
                Properties
              </Link>
              <div className="pl-4 flex flex-col space-y-2 border-l-2 border-muted">
                <Link href="/properties?category=buy" onClick={() => setMobileMenuOpen(false)} className="text-sm text-muted-foreground py-1">
                  Buy
                </Link>
                <Link href="/properties?category=rent" onClick={() => setMobileMenuOpen(false)} className="text-sm text-muted-foreground py-1">
                  Rent
                </Link>
                <Link href="/properties?category=lease" onClick={() => setMobileMenuOpen(false)} className="text-sm text-muted-foreground py-1">
                  Lease
                </Link>
              </div>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-foreground py-2">
                About
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-foreground py-2">
                Contact
              </Link>
              
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                {isAdmin && (
                  <>
                    <Link href="/admin/dashboard" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full justify-center">
                        Dashboard
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full justify-center" onClick={handleLogout}>
                      Logout
                    </Button>
                  </>
                )}
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                    Inquiry
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}