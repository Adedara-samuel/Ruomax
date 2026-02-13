'use client'

import PropertyForm from '@/components/admin/PropertyForm'
import { Button } from '@/components/ui/button'
import { Property } from '@/lib/data'
import { useProperties } from '@/lib/propertyStorage'
import { Edit, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

// Create a separate component to handle individual item animations
function PropertyCardItem({ 
  prop, 
  onEdit, 
  onDelete 
}: { 
  prop: Property, 
  onEdit: (p: Property) => void, 
  onDelete: (id: string) => void 
}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`border border-border rounded-lg p-4 hover:shadow transition-shadow transform transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">
        {prop.location} • {prop.category} • {prop.type}
      </p>
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => onEdit(prop)}
          className="flex items-center gap-1"
        >
          <Edit className="w-4 h-4" /> Edit
        </Button>
        <Button
          size="sm"
          variant="destructive"
          onClick={() => onDelete(prop.id)}
          className="flex items-center gap-1"
        >
          <Trash2 className="w-4 h-4" /> Delete
        </Button>
      </div>
    </div>
  )
}

export default function AdminDashboardPage() {
  const { properties, setProperties } = useProperties()
  const [editing, setEditing] = useState<Property | null>(null)
  const [showForm, setShowForm] = useState(false)

  const handleAdd = () => {
    setEditing(null)
    setShowForm(true)
  }

  const handleEdit = (prop: Property) => {
    setEditing(prop)
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this property?')) {
      setProperties(properties.filter((p) => p.id !== id))
    }
  }

  const handleSave = (prop: Property) => {
    if (editing) {
      setProperties(properties.map((p) => (p.id === prop.id ? prop : p)))
    } else {
      setProperties([
        ...properties,
        { ...prop, id: Date.now().toString(), createdAt: new Date() },
      ])
    }
    setShowForm(false)
    setEditing(null)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Properties</h2>
        <Button onClick={handleAdd} className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Property
        </Button>
      </div>

      {showForm && (
        <PropertyForm
          property={editing || undefined}
          onCancel={() => {
            setShowForm(false)
            setEditing(null)
          }}
          onSave={handleSave}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {properties.map((prop) => (
          <PropertyCardItem 
            key={prop.id} 
            prop={prop} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
    </div>
  )
}