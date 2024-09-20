"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// TODO: Adding light mode theme for the component (optimized for light mode)

interface Advantage {
  icon: React.ReactNode;
  text: string;
}

interface PriceBoxProps {
    title: string;
    price: number | string;
    period?: string;
    advantages?: Advantage[];
    ctaText?: string;
    onCtaClick?: () => void;
    customStyles?: {
      container?: string;
      title?: string;
      price?: string;
      period?: string;
      advantageItem?: string;
      ctaButton?: string;
    };
    animationConfig?: {
      initial?: object;
      animate?: object;
      transition?: object;
    };
    hoverEffects?: boolean;
    backgroundEffects?: boolean;
}

export default function FuturisticPriceBox({
  title,
  price,
  period,
  advantages = [],
  ctaText = "Buy Now",
  onCtaClick,
  customStyles = {},
  animationConfig = {},
  hoverEffects = true,
  backgroundEffects = true,
}: PriceBoxProps) {
  const [isHovered, setIsHovered] = useState(false);

  const defaultAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const animation = {
    ...defaultAnimation,
    ...animationConfig,
  };
  
  return (
    <motion.div
      className={`relative w-full max-w-sm h-auto bg-gradient-to-br from-purple-400/10 to-blue-500/10 rounded-2xl p-6 backdrop-blur-md border border-white/20 shadow-xl overflow-hidden ${customStyles.container || ''}`}
      {...animation}
      onHoverStart={() => hoverEffects && setIsHovered(true)}
      onHoverEnd={() => hoverEffects && setIsHovered(false)}
    >
      {hoverEffects && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 opacity-0 transition-opacity duration-300 ease-in-out z-0" 
          style={{ opacity: isHovered ? 0.2 : 0 }} 
        />
      )}
      
      <h2 className={`text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 ${customStyles.title || ''}`}>
        {title}
      </h2>
      
      <div className="flex items-end mb-6">
        <span className={`text-5xl font-bold text-white ${customStyles.price || ''}`}>
          {typeof price === 'number' ? `$${price}` : price}
        </span>
        {period && (
          <span className={`text-xl text-gray-300 ml-2 ${customStyles.period || ''}`}>
            /{period}
          </span>
        )}
      </div>
      
      {advantages.length > 0 && (
        <ul className="space-y-4 mb-8 ml-[-10px]">
          {advantages.map((advantage, index) => (
            <motion.li
              key={index}
              className={`flex items-start text-gray-300 ${customStyles.advantageItem || ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="mr-3 text-blue-400 flex-shrink-0 mt-[-5px]">{advantage.icon}</span>
              <span className="text-sm leading-tight">{advantage.text}</span>
            </motion.li>
          ))}
        </ul>
      )}
      
      <motion.button
        className={`w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${customStyles.ctaButton || ''}`}
        whileHover={hoverEffects ? { scale: 1.05 } : {}}
        whileTap={hoverEffects ? { scale: 0.95 } : {}}
        onClick={onCtaClick}
      >
        {ctaText}
      </motion.button>
      
      {backgroundEffects && (
        <>
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        </>
      )}
    </motion.div>
  );
}