'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { getPropertyById } from '@/lib/data'
import { Clock, Mail, MapPin, Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react'

function ContactFormContent() {
  const searchParams = useSearchParams()
  const propertyId = searchParams.get('propertyId')
  const property = propertyId ? getPropertyById(propertyId) : null

  const { ref: formRef, isVisible: formVisible } = useScrollAnimation()
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestType: property?.category || 'buy',
    propertyId: propertyId || '',
    inspectionDate: '',
    inspectionTime: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      localStorage.setItem('lastInquiry', JSON.stringify(formData))
      setSubmitted(true)
      setIsLoading(false)
    }, 800)
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto py-12">
        <div className="bg-white border border-slate-200 rounded-3xl p-10 text-center shadow-xl shadow-slate-200/50">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h2>
          <p className="text-slate-500 mb-8">
            Thank you, <span className="font-semibold">{formData.name}</span>. We've received your inquiry and will reach out shortly.
          </p>
          <Button 
            onClick={() => setSubmitted(false)}
            className="rounded-full px-8 bg-primary hover:bg-primary/90"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      
      {/* Contact Info Sidebar */}
      <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-8">Get in Touch</h3>
          
          <div className="space-y-6">
            <ContactMethod 
              icon={<Phone className="w-5 h-5" />}
              label="Call or WhatsApp"
              value="+234 814 630 8816"
              href="tel:+2348146308816"
            />
            <ContactMethod 
              icon={<Mail className="w-5 h-5" />}
              label="Email Address"
              value="info@ruomaxproperty.com"
              href="mailto:info@ruomaxpropertyconsult.com"
            />
            <ContactMethod 
              icon={<MapPin className="w-5 h-5" />}
              label="Our Office"
              value="House 8 Jed’s court estate, Ajah, Lagos"
            />
            <ContactMethod 
              icon={<Clock className="w-5 h-5" />}
              label="Working Hours"
              value="Mon - Fri: 9am - 6pm"
            />
          </div>

          <div className="mt-10 pt-8 border-t border-slate-100">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Connect</p>
            <a 
              href="https://wa.me/2348146308816" 
              target="_blank"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-bold transition-all"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {property && (
          <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden">
             <div className="relative z-10">
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Selected Property</p>
                <h4 className="text-lg font-bold mb-1">{property.title}</h4>
                <p className="text-slate-400 text-sm mb-4">{property.location}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold">
                    {property.agent.name.charAt(0)}
                  </div>
                  <div className="text-sm">
                    <p className="font-bold">{property.agent.name}</p>
                    <p className="text-slate-500">Property Specialist</p>
                  </div>
                </div>
             </div>
          </div>
        )}
      </div>

      {/* Main Form */}
      <div className="lg:col-span-8 order-1 lg:order-2" ref={formRef}>
        <div className={`bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm transition-all duration-700 ${
          formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              {property ? 'Book an Inspection' : 'How can we help?'}
            </h2>
            <p className="text-slate-500 mb-10">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormGroup label="Full Name" required>
                <Input name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required className="bg-slate-50 border-none h-12" />
              </FormGroup>
              <FormGroup label="Email Address" required>
                <Input type="email" name="email" placeholder="email@example.com" value={formData.email} onChange={handleChange} required className="bg-slate-50 border-none h-12" />
              </FormGroup>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormGroup label="Phone Number" required>
                <Input type="tel" name="phone" placeholder="+234..." value={formData.phone} onChange={handleChange} required className="bg-slate-50 border-none h-12" />
              </FormGroup>
              <FormGroup label="Interest Type">
                <select 
                  name="interestType" 
                  value={formData.interestType} 
                  onChange={handleChange}
                  className="w-full bg-slate-50 border-none rounded-md px-4 h-12 text-sm focus:ring-2 focus:ring-primary outline-none"
                >
                  <option value="buy">I want to Buy</option>
                  <option value="rent">I want to Rent</option>
                  <option value="lease">I want to Lease</option>
                </select>
              </FormGroup>
            </div>

            {/* Inspection Date/Time - Only shows if relevant */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-slate-50 rounded-2xl">
              <FormGroup label="Preferred Date">
                <Input type="date" name="inspectionDate" value={formData.inspectionDate} onChange={handleChange} className="bg-white border-slate-200 h-12" />
              </FormGroup>
              <FormGroup label="Preferred Time">
                <Input type="time" name="inspectionTime" value={formData.inspectionTime} onChange={handleChange} className="bg-white border-slate-200 h-12" />
              </FormGroup>
            </div>

            <FormGroup label="Your Message">
              <textarea 
                name="message" 
                rows={4} 
                placeholder="Tell us about your requirements..." 
                value={formData.message} 
                onChange={handleChange}
                className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary outline-none"
              />
            </FormGroup>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full md:w-auto px-12 h-14 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-lg shadow-primary/20 transition-all"
            >
              {isLoading ? 'Processing...' : (
                <span className="flex items-center gap-2">Send Message <Send className="w-4 h-4" /></span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

// UI Helper Components
function ContactMethod({ icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) {
  const Content = (
    <div className="flex gap-4 group cursor-pointer">
      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{label}</p>
        <p className="text-slate-900 font-semibold">{value}</p>
      </div>
    </div>
  )
  return href ? <a href={href}>{Content}</a> : Content
}

function FormGroup({ label, children, required }: { label: string, children: React.ReactNode, required?: boolean }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Let's Talk Property</h1>
            <p className="text-slate-400 text-lg">
              Whether you're looking for a luxury villa or a simple studio, 
              our expert consultants are ready to guide you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <Suspense fallback={<div className="py-20 text-center">Loading contact options...</div>}>
          <ContactFormContent />
        </Suspense>
      </div>
    </div>
  )
}