"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-400 hover:text-white transition-colors duration-300 block py-1 no-underline"
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
)

interface SocialIconProps {
  href: string
  children: React.ReactNode
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-400 hover:text-white transition-colors duration-300 no-underline"
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.95 }}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </motion.a>
)

interface LuxuryModernFooterProps {
  brandName: string
  brandDescription: string
  quickLinks: Array<{ href: string; label: string }>
  resourcesLinks: Array<{ href: string; label: string }>
  socialLinks: Array<{ href: string; icon: React.ReactNode }>
  copyrightText: string
}

export default function LuxuryModernFooter({
  brandName,
  brandDescription,
  quickLinks,
  resourcesLinks,
  socialLinks,
  copyrightText
}: LuxuryModernFooterProps) {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 mb-8">
          <motion.div
            className="space-y-4 mt-[-40px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{brandName}</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{brandDescription}</p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <SocialIcon key={index} href={social.href}>
                  {social.icon}
                </SocialIcon>
              ))}
            </div>
          </motion.div>
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm sm:text-base text-gray-400">{copyrightText}</p>
        </div>
      </div>
    </footer>
  )
}
