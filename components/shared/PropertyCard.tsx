'use client'

import { Button } from '@/components/ui/button'
import { Property } from '@/lib/data'
import { Bath, Bed, MapPin, Square, Video } from 'lucide-react'
import Link from 'next/link'

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    if (property.category === 'buy' || property.category === 'lease') {
      return `$${price.toLocaleString()}`
    }
    return `$${price.toLocaleString()}/month`
  }

  return (
    <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {/* Image */}
      <Link href={`/property/${property.id}`}>
        <div className="relative h-48 overflow-hidden bg-muted">
          {property.images[0] && (
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold capitalize">
            {property.category}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link href={`/property/${property.id}`}>
          <h3 className="text-lg font-semibold text-foreground hover:text-primary mb-2 line-clamp-2">
            {property.title}
          </h3>
        </Link>

        {/* Price */}
        <div className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
          {formatPrice(property.price)}
          {property.videos && property.videos.length > 0 && (
            <Video className="w-5 h-5 text-accent" title="Has video tour" />
          )}
        </div>

        {/* Location */}
        <div className="flex items-start gap-1 text-sm text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        {/* Details */}
        <div className="flex gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
          {property.bedrooms && (
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms} Bed</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms} Bath</span>
            </div>
          )}
          {property.squareFeet && (
            <div className="flex items-center gap-1">
              <Square className="w-4 h-4" />
              <span>{property.squareFeet.toLocaleString()} sqft</span>
            </div>
          )}
        </div>

        {/* Agent Info */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">Agent</p>
          <p className="font-medium text-foreground">{property.agent.name}</p>
        </div>

        {/* CTA Button */}
        <Link href={`/property/${property.id}`} className="block">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  )
}
