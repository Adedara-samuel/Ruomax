'use client'

import { PropertyGallery } from '@/components/shared/PropertyGallery'
import { Button } from '@/components/ui/button'
import { getPropertyById } from '@/lib/data'
import { Bath, Bed, Calendar, Mail, MapPin, Phone, Square } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = getPropertyById(params.id)

  if (!property) {
    notFound()
  }

  const formatPrice = (price: number) => {
    if (property.category === 'buy' || property.category === 'lease') {
      return `$${price.toLocaleString()}`
    }
    return `$${price.toLocaleString()}/month`
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Images and Details */}
        <div className="lg:col-span-2">
          {/* Gallery */}
          <PropertyGallery images={property.images} title={property.title} />
          {/* Videos */}
          {property.videos && property.videos.length > 0 && (
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-primary">Videos</h2>
              {property.videos.map((vid, idx) => (
                <video
                  key={idx}
                  src={vid}
                  controls
                  className="w-full rounded-lg bg-black"
                />
              ))}
            </div>
          )}

          {/* Property Information */}
          <div className="mt-12 space-y-8">
            {/* Header */}
            <div className="border-b border-border pb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-primary mb-2">{property.title}</h1>
                  <div className="flex items-center gap-2 text-lg text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    {property.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-accent mb-2">
                    {formatPrice(property.price)}
                  </div>
                  <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold capitalize">
                    {property.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {property.bedrooms && (
                <div className="bg-secondary p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Bed className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Bedrooms</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{property.bedrooms}</p>
                </div>
              )}
              {property.bathrooms && (
                <div className="bg-secondary p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Bath className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Bathrooms</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{property.bathrooms}</p>
                </div>
              )}
              {property.squareFeet && (
                <div className="bg-secondary p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Square className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Square Feet</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{property.squareFeet.toLocaleString()}</p>
                </div>
              )}
              <div className="bg-secondary p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-muted-foreground font-semibold capitalize">Type</span>
                </div>
                <p className="text-2xl font-bold text-foreground capitalize">{property.type}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Description</h2>
              <p className="text-lg text-foreground leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            {property.amenities.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 bg-secondary p-3 rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Agent & Booking */}
        <div className="lg:col-span-1">
          {/* Agent Card */}
          <div className="bg-white border border-border rounded-lg p-6 sticky top-20 space-y-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Agent Information</h2>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Agent</p>
              <p className="text-xl font-semibold text-foreground">{property.agent.name}</p>
            </div>

            <div className="space-y-3">
              <a
                href={`tel:${property.agent.phone}`}
                className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-muted transition-colors"
              >
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">{property.agent.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${property.agent.email}`}
                className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-muted transition-colors"
              >
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground text-sm break-all">{property.agent.email}</p>
                </div>
              </a>
            </div>

            {/* Booking Buttons */}
            <div className="border-t border-border pt-6 space-y-3">
              <Link href={`/contact?propertyId=${property.id}`} className="block">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Inspection
                </Button>
              </Link>
              <Button variant="outline" className="w-full font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Call Agent
              </Button>
            </div>

            {/* Share */}
            <div className="border-t border-border pt-6">
              <p className="text-sm font-medium text-foreground mb-3">Share Property</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  WhatsApp
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
