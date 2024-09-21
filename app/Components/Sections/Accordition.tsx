'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  title: string
  content: string
}

interface ModernAccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
}

export default function ModernAccordion({ items, allowMultiple = false }: ModernAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      } else {
        return prev.includes(index) ? [] : [index]
      }
    })
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <motion.button
            className="w-full text-left p-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
            onClick={() => toggleItem(index)}
            aria-expanded={openItems.includes(index)}
            aria-controls={`accordion-content-${index}`}
          >
            <span className="text-lg font-medium text-gray-900">{item.title}</span>
            <motion.div
              animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </motion.div>
          </motion.button>
          <AnimatePresence initial={false}>
            {openItems.includes(index) && (
              <motion.div
                id={`accordion-content-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="p-4 bg-gray-50 text-gray-700">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}