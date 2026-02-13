export interface Property {
  id: string
  title: string
  price: number
  location: string
  category: 'buy' | 'rent' | 'lease'
  type: 'house' | 'land' | 'apartment' | 'commercial'
  images: string[]
  videos?: string[]
  description: string
  bedrooms?: number
  bathrooms?: number
  squareFeet?: number
  amenities: string[]
  featured: boolean
  agent: {
    name: string
    phone: string
    email: string
  }
  createdAt: Date
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Modern Apartment in Downtown',
    price: 850000,
    location: 'Downtown, New York',
    category: 'buy',
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&q=80',
    ],
    description:
      'Stunning modern apartment with floor-to-ceiling windows, premium finishes, and breathtaking city views. Perfect for urban professionals.',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 2500,
    amenities: ['Gym', 'Pool', 'Doorman', 'Parking', 'Rooftop Garden'],
    featured: true,
    agent: {
      name: 'John Smith',
      phone: '+1 (555) 123-4567',
      email: 'john@ruomax.com',
    },
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'Spacious Family Home with Garden',
    price: 1200000,
    location: 'Brooklyn Heights, New York',
    category: 'buy',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45ba003e3810?w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    ],
    description:
      'Beautiful historic townhouse with modern renovations, private garden, and excellent walkability. Ideal for families.',
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3500,
    amenities: ['Garden', 'Parking', 'Renovated Kitchen', 'Hardwood Floors'],
    featured: true,
    agent: {
      name: 'Sarah Johnson',
      phone: '+1 (555) 234-5678',
      email: 'sarah@ruomax.com',
    },
    createdAt: new Date('2024-01-10'),
  },
  {
    id: '3',
    title: 'Premium Studio for Rent',
    price: 2500,
    location: 'Manhattan, New York',
    category: 'rent',
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    ],
    description:
      'Elegant studio apartment in prime Manhattan location. High-end finishes and close to transit.',
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 650,
    amenities: ['Gym', 'Doorman', 'Laundry'],
    featured: true,
    agent: {
      name: 'Michael Chen',
      phone: '+1 (555) 345-6789',
      email: 'michael@ruomax.com',
    },
    createdAt: new Date('2024-02-01'),
  },
  {
    id: '4',
    title: 'Commercial Office Space for Lease',
    price: 5000,
    location: 'Financial District, New York',
    category: 'lease',
    type: 'commercial',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    ],
    description:
      'Professional office space in prestigious building. Modern amenities, flexible lease terms, and prime location.',
    squareFeet: 3000,
    amenities: ['Reception', 'Conference Rooms', 'Parking', 'Cafe'],
    featured: true,
    agent: {
      name: 'Emily Rodriguez',
      phone: '+1 (555) 456-7890',
      email: 'emily@ruomax.com',
    },
    createdAt: new Date('2024-02-05'),
  },
  {
    id: '5',
    title: 'Residential Land Plot',
    price: 450000,
    location: 'Queens, New York',
    category: 'buy',
    type: 'land',
    images: [
      'https://images.unsplash.com/photo-1500382017468-7049e00b351d?w=800&q=80',
      'https://images.unsplash.com/photo-1463666477322-ea7cf742f2e4?w=800&q=80',
    ],
    description:
      'Premium residential land plot with excellent development potential. Ready for construction.',
    squareFeet: 5000,
    amenities: ['Utilities', 'Road Access', 'Zoning Approved'],
    featured: true,
    agent: {
      name: 'David Wilson',
      phone: '+1 (555) 567-8901',
      email: 'david@ruomax.com',
    },
    createdAt: new Date('2024-02-08'),
  },
  {
    id: '6',
    title: 'Cozy 2BR Apartment for Rent',
    price: 3200,
    location: 'Upper West Side, New York',
    category: 'rent',
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
    description:
      'Well-maintained apartment in quiet neighborhood. Close to parks, restaurants, and public transit.',
    bedrooms: 2,
    bathrooms: 1.5,
    squareFeet: 1200,
    amenities: ['Washer/Dryer', 'AC', 'Natural Light'],
    featured: false,
    agent: {
      name: 'Lisa Anderson',
      phone: '+1 (555) 678-9012',
      email: 'lisa@ruomax.com',
    },
    createdAt: new Date('2024-02-10'),
  },
  {
    id: '7',
    title: 'Contemporary Penthouse',
    price: 2500000,
    location: 'Tribeca, New York',
    category: 'buy',
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&q=80',
    ],
    description:
      'Exclusive penthouse with terrace, skyline views, and premium finishes. Ultimate urban living.',
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 4500,
    amenities: ['Terrace', 'Gym', 'Spa', 'Wine Cellar', 'Smart Home'],
    featured: true,
    agent: {
      name: 'James Park',
      phone: '+1 (555) 789-0123',
      email: 'james@ruomax.com',
    },
    createdAt: new Date('2024-02-12'),
  },
  {
    id: '8',
    title: 'Suburban Family House',
    price: 950000,
    location: 'Westchester, New York',
    category: 'buy',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
      'https://images.unsplash.com/photo-1570129477492-45ba003e3810?w=800&q=80',
    ],
    description:
      'Charming colonial-style house with large yard, updated systems, and excellent schools nearby.',
    bedrooms: 4,
    bathrooms: 2.5,
    squareFeet: 3200,
    amenities: ['Large Yard', 'Deck', '2-Car Garage', 'Updated Roof'],
    featured: false,
    agent: {
      name: 'Jessica Martinez',
      phone: '+1 (555) 890-1234',
      email: 'jessica@ruomax.com',
    },
    createdAt: new Date('2024-02-14'),
  },
]

export function getPropertyById(id: string): Property | undefined {
  // prefer localStorage copy if available (client-side)
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('properties')
    if (stored) {
      try {
        const arr: Property[] = JSON.parse(stored)
        const found = arr.find((p) => p.id === id)
        if (found) return found
      } catch {
        // ignore parsing errors
      }
    }
  }
  return properties.find((p) => p.id === id)
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured).slice(0, 6)
}

export function getPropertiesByCategory(
  category: 'buy' | 'rent' | 'lease'
): Property[] {
  return properties.filter((p) => p.category === category)
}

export function getPropertiesByType(type: string): Property[] {
  return properties.filter((p) => p.type === type)
}

export function filterProperties(
  filters: {
    category?: 'buy' | 'rent' | 'lease'
    type?: string
    priceMin?: number
    priceMax?: number
    bedrooms?: number
    location?: string
  }
): Property[] {
  return properties.filter((p) => {
    if (filters.category && p.category !== filters.category) return false
    if (filters.type && p.type !== filters.type) return false
    if (
      filters.priceMin &&
      p.price < filters.priceMin
    )
      return false
    if (
      filters.priceMax &&
      p.price > filters.priceMax
    )
      return false
    if (
      filters.bedrooms &&
      p.bedrooms &&
      p.bedrooms < filters.bedrooms
    )
      return false
    if (
      filters.location &&
      !p.location.toLowerCase().includes(filters.location.toLowerCase())
    )
      return false
    return true
  })
}
