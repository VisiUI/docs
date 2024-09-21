"use client"

import React, { useState } from 'react'
import { FileIcon, Copy, Check } from 'lucide-react'

interface CodeBoxProps {
  code: string
  fileName: string
  fileExtension: string
}

export default function CodeBox({ code, fileName, fileExtension }: CodeBoxProps) {
  const [isCopied, setIsCopied] = useState(false)

  const getLanguageClass = (extension: string) => {
    const languageMap: { [key: string]: string } = {
      js: 'language-javascript',
      ts: 'language-typescript',
      jsx: 'language-jsx',
      tsx: 'language-tsx',
      html: 'language-html',
      css: 'language-css',
      json: 'language-json',
      md: 'language-markdown',
      mdx: 'language-markdown',
      // Add more languages as needed
    }
    return languageMap[extension] || 'language-plaintext'
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="bg-white dark:bg-[#1e1e1e] rounded-lg overflow-hidden font-mono text-sm w-full max-w-2xl shadow-md">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-[#8b8b8b] border-b border-gray-200 dark:border-[#3a3a3a]">
        <div className="flex items-center gap-2">
          <FileIcon className="w-4 h-4" aria-hidden="true" />
          <span>{fileName}.{fileExtension}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-[#3a3a3a] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#4a4a4a] transition-colors"
          aria-label={isCopied ? "Copied" : "Copy code"}
        >
          {isCopied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          <span className="text-xs">{isCopied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-[#1e1e1e] overflow-x-auto">
        <pre className={`text-gray-800 dark:text-[#d4d4d4] ${getLanguageClass(fileExtension)}`}>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}