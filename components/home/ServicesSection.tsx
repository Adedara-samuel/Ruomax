'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, DollarSign, Handshake } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const services = [
  {
    icon: Home,
    title: 'Buy Property',
    description: 'Find your dream home from our extensive collection of properties for sale.',
    link: '/properties?category=buy',
  },
  {
    icon: DollarSign,
    title: 'Rent Property',
    description: 'Discover affordable rental options in prime locations across the city.',
    link: '/properties?category=rent',
  },
  {
    icon: Handshake,
    title: 'Lease Property',
    description: 'Professional commercial and residential leasing solutions for businesses.',
    link: '/properties?category=lease',
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={index} href={service.link}>
                <div
                  className={`bg-white p-8 rounded-2xl border border-border/30 hover:shadow-2xl hover:border-accent/50 hover:-translate-y-2 transition-all duration-500 h-full transform ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 text-accent rounded-xl mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button
                    variant="link"
                    className="p-0 text-accent hover:text-accent/80 h-auto font-semibold"
                  >
                    Learn More →
                  </Button>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
