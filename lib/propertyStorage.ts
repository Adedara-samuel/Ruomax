import { useEffect, useState } from 'react'
import { properties as defaultProperties, Property } from './data'

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>([])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem('properties')
    if (stored) {
      try {
        setProperties(JSON.parse(stored))
      } catch {
        setProperties(defaultProperties)
        localStorage.setItem('properties', JSON.stringify(defaultProperties))
      }
    } else {
      setProperties(defaultProperties)
      localStorage.setItem('properties', JSON.stringify(defaultProperties))
    }
  }, [])

  const save = (newProps: Property[]) => {
    setProperties(newProps)
    if (typeof window !== 'undefined') {
      localStorage.setItem('properties', JSON.stringify(newProps))
    }
  }

  return { properties, setProperties: save }
}
