'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-300"
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
)

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-400 hover:text-white transition-colors duration-300"
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </motion.a>
)

interface LuxuryModernFooterProps {
  brandName: string;
  brandDescription: string;
  quickLinks: Array<{ href: string; label: string }>;
  resourcesLinks: Array<{ href: string; label: string }>;
  socialLinks: Array<{ href: string; icon: React.ReactNode }>;
  copyrightText: string;
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <motion.h2 
              className="text-2xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {brandName}
            </motion.h2>
            <p className="text-sm text-gray-400">{brandDescription}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400 text-white">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400 text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <SocialIcon key={index} href={social.href}>
                  {social.icon}
                </SocialIcon>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  )
}
