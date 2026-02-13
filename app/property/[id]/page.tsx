'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { PropertyGallery } from '@/components/shared/PropertyGallery'
import { Button } from '@/components/ui/button'
import { getPropertyById } from '@/lib/data'
import { useProperties } from '@/lib/propertyStorage'
import { 
  Bath, Bed, MapPin, Phone, Square, ArrowLeft, 
  Loader2, Calendar, Share2, Heart, ShieldCheck, ExternalLink 
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function PropertyDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { properties } = useProperties()
  const [property, setProperty] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperty = () => {
      const currentId = params?.id as string
      let found = properties.find((p) => String(p.id) === currentId)
      if (!found) found = getPropertyById(currentId)
      setProperty(found)
      setLoading(false)
    }

    if (params?.id) fetchProperty()
  }, [params.id, properties])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50/50">
        <Loader2 className="w-12 h-12 animate-spin text-primary/60 mb-4" />
        <p className="text-muted-foreground animate-pulse">Refining details...</p>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-slate-100 p-6 rounded-full mb-6">
          <MapPin className="w-12 h-12 text-slate-400" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Property Not Found</h2>
        <p className="text-muted-foreground max-w-xs mb-8">
          The property you're looking for might have been sold or moved.
        </p>
        <Button size="lg" onClick={() => router.push('/properties')} className="rounded-full px-8">
          Explore Other Listings
        </Button>
      </div>
    )
  }

  // Create the Google Maps Search URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    property.location + ' ' + property.title
  )}`

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation Header */}
      <div className="bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => router.push('/properties')}
            className="group hover:bg-transparent -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to listings</span>
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full shadow-sm">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full shadow-sm text-red-500 hover:text-red-600">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
              <PropertyGallery images={property.images} title={property.title} />
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                <div className="space-y-2">
                  <div className="flex gap-2 mb-3">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-50 border-none capitalize px-3 py-1">
                      {property.category}
                    </Badge>
                    {property.isFeatured && (
                      <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-none px-3 py-1">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">{property.title}</h1>
                  <p className="flex items-center text-slate-500 text-lg">
                    <MapPin className="w-5 h-5 mr-2 text-primary/70" />
                    {property.location}
                  </p>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 min-w-[180px] text-center md:text-right">
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Price</p>
                  <p className="text-3xl font-black text-primary">
                    ${property.price?.toLocaleString()}
                    {property.category === 'rent' && <span className="text-lg font-medium opacity-70">/mo</span>}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 py-8 border-y border-slate-50">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-primary/5 rounded-2xl"><Bed className="w-6 h-6 text-primary" /></div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-slate-900">{property.bedrooms || '0'}</p>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-tighter">Bedrooms</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-primary/5 rounded-2xl"><Bath className="w-6 h-6 text-primary" /></div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-slate-900">{property.bathrooms || '0'}</p>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-tighter">Bathrooms</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-primary/5 rounded-2xl"><Square className="w-6 h-6 text-primary" /></div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-slate-900">{property.squareFeet?.toLocaleString() || '0'}</p>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-tighter">Sq Ft</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About this property</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-200/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-xl text-slate-900">Listing Agent</h3>
                  <ShieldCheck className="w-5 h-5 text-blue-500" />
                </div>
                
                <div className="flex items-center gap-4 mb-8 p-4 bg-slate-50 rounded-2xl">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-primary/20">
                      {property.agent?.name?.charAt(0) || 'A'}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 leading-none mb-1">{property.agent?.name || 'Ruomax Agent'}</p>
                    <p className="text-sm text-slate-500 font-medium">Verified Professional</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button size="lg" className="w-full rounded-2xl py-7 text-lg shadow-lg shadow-primary/25 hover:shadow-primary/10 transition-all" asChild>
                    <Link href={`/contact?id=${property.id}`}>
                      <Calendar className="w-5 h-5 mr-2" /> Book Inspection
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full rounded-2xl py-7 text-lg border-slate-200 hover:bg-slate-50" asChild>
                    <a href={`tel:${property.agent?.phone}`}>
                      <Phone className="w-5 h-5 mr-2 text-primary" /> Call Agent
                    </a>
                  </Button>
                </div>

                <Separator className="my-6 opacity-50" />
                
                <p className="text-[11px] text-center text-slate-400 px-4">
                  By clicking "Book Inspection" you agree to our terms of service and privacy policy.
                </p>
              </div>

              {/* Functional Map Section */}
              <div className="group relative">
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="bg-slate-200 h-48 w-full relative">
                    {/* Placeholder Background Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors">
                      <div className="bg-white p-3 rounded-full shadow-lg mb-2 transition-transform group-hover:scale-110">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                        View on Google Maps <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-sm text-slate-700 line-clamp-1">{property.location}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}