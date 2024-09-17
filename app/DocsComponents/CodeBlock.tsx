'use client'

import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  code: string
  fileName: string
  fileExtension: string
  className?: string
}

export default function CodeBlock({
  code,
  fileName = 'file',
  fileExtension = 'tsx',
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  // Create a custom style by modifying vscDarkPlus
  const customStyle = {
    ...vscDarkPlus,
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      background: '#1e1e1e',
      padding: '16px',
      margin: 0,
    },
    'code[class*="language-"]': {
      ...vscDarkPlus['code[class*="language-"]'],
      background: 'none',
      textShadow: 'none',
    },
  }

  return (
    <div className={`bg-[#1e1e1e] text-foreground rounded-md w-full max-w-3xl ${className}`}>
      <div className="flex justify-between items-center px-4 py-2 bg-[#252526] rounded-t-md">
        <div className="flex items-center space-x-2">
          <span className="flex items-center space-x-1 text-gray-300">
            <span className="bg-[#007acc] text-white text-xs font-bold px-2 py-1 rounded-xl">
              {fileExtension.toUpperCase()}
            </span>
            <div className='p-1'>
              <span><code>{fileName}.{fileExtension}</code></span>
            </div>
          </span>
        </div>
        <button className="text-gray-400 hover:text-white" onClick={handleCopy}>
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>

      <div className="bg-[#1e1e1e] rounded-b-md overflow-hidden">
        <SyntaxHighlighter
          language={fileExtension}
          style={customStyle}
          customStyle={{
            borderRadius: '0 0 8px 8px',
          }}
          showLineNumbers={false}
          wrapLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}