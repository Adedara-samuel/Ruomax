import { useState, useEffect, ChangeEvent } from 'react'
import { Property } from '@/lib/data'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface Props {
  property?: Property
  onSave: (prop: Property) => void
  onCancel: () => void
}

export default function PropertyForm({ property, onSave, onCancel }: Props) {
  const [form, setForm] = useState<Property>(
    property || {
      id: '',
      title: '',
      price: 0,
      location: '',
      category: 'buy',
      type: 'house',
      images: [],
      videos: [],
      description: '',
      amenities: [],
      featured: false,
      agent: { name: '', phone: '', email: '' },
      createdAt: new Date(),
    }
  )

  useEffect(() => {
    if (property) setForm(property)
  }, [property])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as any
    if (name === 'featured') {
      setForm((f) => ({ ...f, featured: checked }))
      return
    }
    if (name.startsWith('agent.')) {
      const field = name.replace('agent.', '')
      setForm((f) => ({ ...f, agent: { ...f.agent, [field]: value } }))
      return
    }
    setForm((f) => ({ ...f, [name]: type === 'number' ? Number(value) : value }))
  }

  const handleFile = (e: ChangeEvent<HTMLInputElement>, field: 'images' | 'videos') => {
    const files = e.target.files
    if (files) {
      const arr: string[] = []
      Array.from(files).forEach((file) => {
        const reader = new FileReader()
        reader.onload = () => {
          if (reader.result) {
            arr.push(reader.result.toString())
            if (arr.length === files.length) {
              setForm((f) => ({ ...f, [field]: [...f[field], ...arr] }))
            }
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(form)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 mb-6 border border-border rounded-lg space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <Input name="title" value={form.title} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <Input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <Input name="location" value={form.location} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-input rounded-md"
          >
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
            <option value="lease">Lease</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-input rounded-md"
          >
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="land">Land</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full h-24 p-2 border border-input rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Bedrooms</label>
          <Input
            type="number"
            name="bedrooms"
            value={form.bedrooms || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Bathrooms</label>
          <Input
            type="number"
            name="bathrooms"
            value={form.bathrooms || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Square Feet</label>
          <Input
            type="number"
            name="squareFeet"
            value={form.squareFeet || ''}
            onChange={handleChange}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Amenities (comma separated)</label>
          <Input
            name="amenities"
            value={form.amenities.join(', ')}
            onChange={(e) =>
              setForm((f) => ({ ...f, amenities: e.target.value.split(',').map((s) => s.trim()) }))
            }
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFile(e, 'images')}
            className="w-full"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Videos</label>
          <input
            type="file"
            accept="video/*"
            multiple
            onChange={(e) => handleFile(e, 'videos')}
            className="w-full"
          />
        </div>
        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleChange}
            />
            <span>Featured</span>
          </label>
        </div>
        {/* agent info */}
        <div className="md:col-span-2">
          <h4 className="text-lg font-semibold mb-2">Agent Information</h4>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <Input
            name="agent.name"
            value={form.agent.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <Input
            name="agent.phone"
            value={form.agent.phone}
            onChange={handleChange}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input
            type="email"
            name="agent.email"
            value={form.agent.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex gap-2 justify-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}
