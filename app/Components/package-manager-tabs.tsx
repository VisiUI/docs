'use client'

import React, { useState } from 'react'
import { ClipboardIcon, CheckIcon } from 'lucide-react'

const packageManagers = ['npm', 'pnpm', 'yarn', 'bun'] as const

type PackageManager = typeof packageManagers[number]

interface PackageManagerCommand {
  commands: Record<PackageManager, string>;
}

export default function PackageManagerTabs({ commands }: PackageManagerCommand) {
  const availablePackageManagers = packageManagers.filter(pm => pm in commands)
  const [activeTab, setActiveTab] = useState<PackageManager>(availablePackageManagers[0])
  const [copied, setCopied] = useState(false)

  const currentCommand = commands[activeTab]
  const fullCommand = `${activeTab} ${currentCommand}`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="bg-white dark:bg-[#1e1e1e] rounded-lg overflow-hidden shadow-md">
      <div className="flex border-b border-gray-200 dark:border-[#2e2e2e]">
        {availablePackageManagers.map((pm) => (
          <button
            key={pm}
            className={`px-4 py-2 text-sm ${
              activeTab === pm 
                ? 'text-blue-600 dark:text-white bg-blue-50 dark:bg-[#2e2e2e]' 
                : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white'
            }`}
            onClick={() => setActiveTab(pm)}
          >
            {pm}
          </button>
        ))}
      </div>
      <div className="p-4 flex justify-between items-center bg-gray-50 dark:bg-[#1e1e1e]">
        <div className="flex items-center">
          <span className="text-blue-600 dark:text-[#9cdcfe] mr-2">{activeTab}</span>
          <span className="text-gray-800 dark:text-white">{currentCommand}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white focus:outline-none"
          aria-label={copied ? "Copied" : "Copy to clipboard"}
        >
          {copied ? (
            <CheckIcon className="w-5 h-5 text-green-500" />
          ) : (
            <ClipboardIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  )
}