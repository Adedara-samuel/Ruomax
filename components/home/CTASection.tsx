'use client'

import React from 'react' // Added back specifically to help the compiler find types
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function CTASection() {
  // We cast the ref to HTMLDivElement to satisfy the TypeScript error
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div 
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90">
              Contact our team today to discuss your real estate needs. We&apos;re here to help you find the perfect property.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Call us anytime</p>
                  <p className="opacity-80">+234 814 630 8816</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Email us</p>
                  <p className="opacity-80">info@ruomaxpropertyconsult.com</p>
                  <p className="opacity-80">ruonarita@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent">
                <Link href="/properties">Browse Properties</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Form */}
          <div 
            className={`bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6">Quick Inquiry Form</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 outline-none"
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium mb-2">Interest Type</label>
                <select 
                  id="type"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-white/50 outline-none [&>option]:text-black"
                >
                  <option value="">Select an option</option>
                  <option value="buy">Buy Property</option>
                  <option value="rent">Rent Property</option>
                  <option value="lease">Lease Property</option>
                </select>
              </div>
              <Button type="submit" className="w-full bg-white text-primary hover:bg-white/90 font-bold">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}