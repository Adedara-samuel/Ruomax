import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Award, Users, Target, TrendingUp, Mail, Linkedin } from 'lucide-react'

export default function AboutPage() {
  const team = [
    {
      name: 'John Smith',
      role: 'Senior Agent',
      specialization: 'Luxury Properties',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=500&auto=format&fit=crop',
    },
    {
      name: 'Sarah Johnson',
      role: 'Senior Agent',
      specialization: 'Residential Properties',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Commercial Specialist',
      specialization: 'Commercial Leasing',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      specialization: 'Portfolio Management',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&auto=format&fit=crop',
    },
  ]

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide exceptional real estate solutions that transform lives and create opportunities for our clients.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'We prioritize our clients\' needs and work tirelessly to exceed their expectations.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of professionalism and integrity in everything we do.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We embrace new technologies and approaches to better serve the real estate market.',
    },
  ]

  return (
    <div className="bg-slate-50/50">
      {/* Header */}
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
            className="w-full h-full object-cover" 
            alt="office background"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">About Ruomax</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
            Defining excellence in real estate since 2009. We don't just find houses; we find homes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Company Overview */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Established 2009</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
                Premium Real Estate <br />Solutions for Everyone
              </h2>
              <div className="space-y-4 text-slate-600 text-lg">
                <p>
                  For over 15 years, Ruomax has been at the forefront of the property market, 
                  blending traditional values with modern technology to deliver results.
                </p>
                <p>
                  Our expertise spans residential sales, commercial leasing, and portfolio management. 
                  We believe that transparency and trust are the foundations of every successful transaction.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <Button asChild className="bg-primary hover:bg-primary/90 rounded-full px-8">
                  <Link href="/properties">Browse Properties</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 border-slate-300">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              {[
                { label: 'Properties Listed', value: '500+' },
                { label: 'Happy Clients', value: '10K+' },
                { label: 'Years Experience', value: '15+' },
                { label: 'Customer Support', value: '24/7' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Principles</h2>
            <p className="text-slate-500 text-lg">The values that guide every decision we make at Ruomax.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary/20 transition-all hover:-translate-y-1 shadow-sm">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Experts</h2>
            <p className="text-slate-500 text-lg">A dedicated team of professionals with deep market knowledge.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-3">
                    <button className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wide">{member.role}</p>
                <p className="text-slate-500 text-sm">{member.specialization}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to work with the <span className="text-primary">best?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Whether you're looking for an investment or your next home, our team is ready to guide you through every step.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-12 h-14 text-lg">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}