'use client'

import { useState, useEffect } from 'react'
import { PropertyCard } from '@/components/shared/PropertyCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useProperties } from '@/lib/propertyStorage'
import { 
  Search, X, Filter, ChevronDown, 
  Home, Building2, Landmark, Map 
} from 'lucide-react'

export default function PropertiesPage() {
  const { properties: allProperties } = useProperties()
  const [filteredProperties, setFilteredProperties] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMainCat, setSelectedMainCat] = useState('')
  const [selectedSubCat, setSelectedSubCat] = useState('')
  
  // Track which accordion sections are open
  const [openSections, setOpenSections] = useState({
    sales: true,
    residential: true,
    commercial: false
  })

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const filterGroups = {
    sales: { icon: <Map className="w-4 h-4" />, items: ["Houses for sale", "Land for sale"] },
    residential: { 
      icon: <Home className="w-4 h-4" />, 
      items: [
        "Studio apartments", "Self-contained apartments", "1-bedroom apartments", 
        "2-bedroom apartments", "3-bedroom apartments", "4-bedroom apartments", 
        "Mini flats", "Terrace apartments", "Duplexes", "Bungalows", 
        "Detached houses", "Semi-detached houses", "Serviced apartments", 
        "Luxury apartments", "Short-let apartments", "Furnished apartments", 
        "Shared apartments", "Student housing"
      ] 
    },
    commercial: { 
      icon: <Building2 className="w-4 h-4" />, 
      items: ["Office spaces", "Schools", "Shops", "Warehouses", "Event centers", "Commercial buildings"] 
    }
  }

  useEffect(() => {
    let filtered = [...allProperties]
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    if (selectedMainCat) filtered = filtered.filter(p => p.category === selectedMainCat)
    if (selectedSubCat) filtered = filtered.filter(p => p.type === selectedSubCat)
    setFilteredProperties(filtered)
  }, [searchTerm, selectedMainCat, selectedSubCat, allProperties])

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <section className="bg-primary pt-20 pb-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Property Directory</h1>
          <p className="text-blue-100 mt-2">Find your next investment or dream home</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-primary" /> Filters
                </h3>
                {(searchTerm || selectedSubCat || selectedMainCat) && (
                  <button onClick={() => {setSearchTerm(''); setSelectedSubCat(''); setSelectedMainCat('')}} 
                          className="text-xs font-semibold text-primary hover:text-blue-700">
                    Reset
                  </button>
                )}
              </div>

              <div className="p-5 space-y-6">
                {/* Search Box */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">Quick Search</label>
                  <div className="relative">
                    <Input 
                      className="bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-primary pl-10"
                      placeholder="E.g. Lekki, Duplex..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>

                {/* Main Category Tabs */}
                <div className="flex p-1 bg-slate-100 rounded-lg">
                  {['buy', 'rent', 'lease'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedMainCat(selectedMainCat === cat ? '' : cat)}
                      className={`flex-1 py-2 text-xs font-bold rounded-md transition-all capitalize ${
                        selectedMainCat === cat ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Grouped Accordions */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">Property Type</label>
                  
                  {Object.entries(filterGroups).map(([key, group]) => (
                    <div key={key} className="border border-slate-100 rounded-xl overflow-hidden">
                      <button 
                        onClick={() => toggleSection(key)}
                        className="w-full flex items-center justify-between p-3 bg-white hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3 text-slate-700">
                          <span className="p-1.5 bg-slate-100 rounded-lg text-slate-500">{group.icon}</span>
                          <span className="text-sm font-semibold capitalize">{key}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openSections[key] ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {openSections[key] && (
                        <div className="p-2 pt-0 bg-white grid grid-cols-1 gap-1 max-h-60 overflow-y-auto scrollbar-thin">
                          {group.items.map(item => (
                            <button
                              key={item}
                              onClick={() => setSelectedSubCat(selectedSubCat === item ? '' : item)}
                              className={`text-left px-3 py-2 rounded-lg text-sm transition-all ${
                                selectedSubCat === item 
                                ? 'bg-blue-50 text-primary font-bold' 
                                : 'text-slate-500 hover:bg-slate-50'
                              }`}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <div className="lg:col-span-3">
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-slate-800 font-bold">
                  {filteredProperties.length} <span className="text-slate-400 font-normal ml-1 text-sm">Properties found</span>
                </h2>
             </div>

             {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProperties.map((p) => <PropertyCard key={p.id} property={p} />)}
                </div>
             ) : (
                <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-slate-200">
                   <div className="inline-flex p-4 bg-slate-50 rounded-full mb-4">
                     <Search className="w-8 h-8 text-slate-300" />
                   </div>
                   <h3 className="text-lg font-bold text-slate-800">No matches found</h3>
                   <p className="text-slate-500 text-sm">Try widening your search or resetting filters.</p>
                </div>
             )}
          </div>
        </div>
      </main>
    </div>
  )
}