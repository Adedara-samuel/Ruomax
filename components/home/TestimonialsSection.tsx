'use client'

import { Star } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const testimonials = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'Property Buyer',
    content: 'Ruomax helped me find my dream home in just two weeks. The team was professional and transparent throughout the entire process.',
    rating: 5,
    avatar: '/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'Leased an office space through Ruomax. Their expertise in commercial properties is unmatched.',
    rating: 5,
    avatar: '/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Tenant',
    content: 'Great rental options and hassle-free booking process. Ruomax made renting a pleasant experience.',
    rating: 5,
    avatar: '/testimonial-3.jpg',
  },
]

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Join thousands of satisfied customers who found their perfect property
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white p-8 rounded-2xl border border-border/30 hover:shadow-2xl hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 italic">&quot;{testimonial.content}&quot;</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent/30">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
