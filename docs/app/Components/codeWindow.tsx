"use client"

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

const CodeWindow: React.FC<{ code: string; language: string; className?: string }> = ({
  code,
  language,
  className = 'max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-4',
}) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        className="mt-2 rounded-lg"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const CodeWindow2: React.FC<{ previewCode: string }> = ({ previewCode }) => {
  const [activeTab, setActiveTab] = useState('preview');
  const [copied, setCopied] = useState(false);

  const codeString = `import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeWindowProps {
  code: string;
  language: string;
  className?: string;
}

const CodeWindow: React.FC<CodeWindowProps> = ({
  code,
  language,
  className = "max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-4",
}) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        className="mt-2 rounded-lg"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

CodeWindow.defaultProps = {
  language: "javascript",
};

export default CodeWindow;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-[#1e1e1e] text-white p-4 rounded-lg w-full max-w-3xl">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 rounded ${
              activeTab === 'preview' ? 'bg-[#2d2d2d] text-white' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
          <button
            className={`px-3 py-1 rounded ${
              activeTab === 'code' ? 'bg-[#2d2d2d] text-white' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('code')}
          >
            Code
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-gray-400" onClick={handleCopy}>
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
      </div>
      <div className="bg-[#2d2d2d] p-4 rounded max-h-[400px] overflow-y-auto">
        {activeTab === 'preview' ? (
          <CodeWindow code={previewCode} language="javascript" />
        ) : (
          <SyntaxHighlighter
            language="tsx"
            style={vscDarkPlus}
            customStyle={{
              background: 'transparent',
              padding: 0,
              margin: 0,
            }}
            wrapLines={true}
            wrapLongLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
};

export default CodeWindow2;
