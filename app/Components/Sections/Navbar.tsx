'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, Search, X, Sun, Moon } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '../ThemeContext'

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const { theme, toggleTheme } = useTheme()

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'} shadow-sm rounded-xl transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0" prefetch={false}>
              <svg className={`h-8 w-8 ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${theme === 'light' ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-blue-400'} px-3 py-2 rounded-md text-sm font-medium transition-colors no-underline`}
                    prefetch={false}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative flex items-center">
              <input
                type="search"
                placeholder="Search..."
                className={`px-3 py-2 pr-10 rounded-md text-sm ${theme === 'light' ? 'bg-gray-100 text-gray-800' : 'bg-gray-700 text-white'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'}`}
              />
              <button
                onClick={toggleSearch}
                className={`p-2 rounded-md ${theme === 'light' ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-blue-400'} focus:outline-none focus:ring-2 focus:ring-blue-500 absolute right-0`}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md ${theme === 'light' ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-blue-400'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md ${theme === 'light' ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-blue-400'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-y-0 right-0 w-64 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'} shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex-shrink-0" prefetch={false}>
              <svg className={`h-8 w-8 ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md ${theme === 'light' ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-blue-400'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${theme === 'light' ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' : 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'} transition-colors no-underline`}
                prefetch={false}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-6 space-y-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className={`w-full px-3 py-2 rounded-md text-sm ${theme === 'light' ? 'bg-gray-100 text-gray-800' : 'bg-gray-700 text-white'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <Search className={`absolute right-3 top-2.5 h-4 w-4 ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
            <button
              onClick={toggleTheme}
              className={`w-full p-2 rounded-md ${theme === 'light' ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-blue-400'} focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="h-5 w-5 mr-2" /> : <Sun className="h-5 w-5 mr-2" />}
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}