"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

const TimelineItem: React.FC<TimelineItem & { index: number }> = ({ year, title, description, index }) => (
  <motion.div 
    className={`flex flex-col md:flex-row items-center mb-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} mb-4 md:mb-0`}>
      <motion.div 
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm md:text-base">{description}</p>
      </motion.div>
    </div>
    <motion.div 
      className="absolute mr-6 md:left-1/2 w-8 h-8 flex items-center justify-center transform -translate-x-1/2 z-10"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
    >
      <span className="text-white font-bold text-sm mr-7">{year}</span>
    </motion.div>
  </motion.div>
)

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform md:-translate-x-1/2" />
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} index={index} />
      ))}
    </div>
  )
}

export default function ImprovedTimeline() {
  const timelineItems: TimelineItem[] = [
    {
      year: "2023",
      title: "Launch of New Product",
      description: "Successfully launched our flagship product, revolutionizing the industry with cutting-edge technology and user-centric design."
    },
    {
      year: "2022",
      title: "Expansion to Europe",
      description: "Opened our first European office in Berlin, marking a significant milestone in our global growth strategy and establishing a strong presence in the EU market."
    },
    {
      year: "2021",
      title: "Series B Funding",
      description: "Secured $50 million in Series B funding, enabling us to accelerate product development, expand our team, and explore new market opportunities."
    },
    {
      year: "2020",
      title: "Company Founded",
      description: "Our journey began with a vision to transform the way people interact with technology, starting with a small team of passionate innovators in a garage office."
    }
  ]

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      
      <Timeline items={timelineItems} />
    </div>
  )
}