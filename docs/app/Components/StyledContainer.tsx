"use client";

import React, { useState, ReactNode } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface StyledContainerProps {
  code: string;
  children: ReactNode;
  className?: string;
  title?: string;
}

const StyledContainer: React.FC<StyledContainerProps> = ({
  code,
  children,
  className = "",
  title,
}) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className={`bg-[#1e1e1e] text-white rounded-lg w-full max-w-3xl ${className}`}
    >
      {title && (
        <div className="px-4 py-2 border-b border-gray-700">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      )}
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 rounded ${activeTab === "preview" ? "bg-[#2d2d2d] text-white" : "text-gray-400"}`}
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </button>
          <button
            className={`px-3 py-1 rounded ${activeTab === "code" ? "bg-[#2d2d2d] text-white" : "text-gray-400"}`}
            onClick={() => setActiveTab("code")}
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
      <div className="bg-[#2d2d2d] rounded-b-lg">
        {activeTab === "preview" ? (
          <div className="p-4">{children}</div>
        ) : (
          <div className="max-h-[400px] overflow-y-auto">
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              customStyle={{
                background: "#1e1e1e", 
                padding: "20px", 
                borderRadius: "0 0 8px 8px",
                margin: 0,
                whiteSpace: "pre-wrap", 
                maxHeight: "400px",
                overflowY: "auto", 
              }}
              wrapLines={false} 
              wrapLongLines={false} 
            >
              {code}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default StyledContainer;
