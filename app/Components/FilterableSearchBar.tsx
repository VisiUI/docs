'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'

type Filter = {
  id: string
  label: string
}

type Item = {
  id: string
  name: string
  category: string
}

const filters: Filter[] = [
  { id: 'all', label: 'All' },
  { id: 'products', label: 'Products' },
  { id: 'categories', label: 'Categories' },
  { id: 'brands', label: 'Brands' },
]

const items: Item[] = [
  // Products
  { id: 'p1', name: 'Smartphone', category: 'products' },
  { id: 'p2', name: 'Laptop', category: 'products' },
  { id: 'p3', name: 'Headphones', category: 'products' },
  { id: 'p4', name: 'Smartwatch', category: 'products' },
  // Categories
  { id: 'c1', name: 'Electronics', category: 'categories' },
  { id: 'c2', name: 'Clothing', category: 'categories' },
  { id: 'c3', name: 'Home & Garden', category: 'categories' },
  { id: 'c4', name: 'Sports & Outdoors', category: 'categories' },
  // Brands
  { id: 'b1', name: 'Apple', category: 'brands' },
  { id: 'b2', name: 'Samsung', category: 'brands' },
  { id: 'b3', name: 'Nike', category: 'brands' },
  { id: 'b4', name: 'Sony', category: 'brands' },
]

export default function FilterableSearchBar() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesFilter = activeFilter === 'all' || item.category === activeFilter
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchQuery])

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-1.5 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 p-4 bg-gray-50">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => handleFilterClick(filter.id)}
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                activeFilter === filter.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>
        <AnimatePresence>
          {filteredItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-gray-200"
            >
              <ul className="divide-y divide-gray-200">
                {filteredItems.map((item) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-2 hover:bg-gray-50"
                  >
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500 pr-6">{item.category}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
