// This instead should be used for every component

"use client";

import React, { useState, ReactNode } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus, vs } from "react-syntax-highlighter/dist/esm/styles/prism";

interface StyledContainerProps {
  code: string;
  children: ReactNode;
  className?: string;
  title?: string;
}

export default function StyledContainer({
  code,
  children,
  className = "",
  title,
}: StyledContainerProps) {
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
      className={`bg-background text-foreground rounded-lg w-full max-w-3xl ${className}`}
    >
      {title && (
        <div className="px-4 py-2 border-b border-border">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      )}
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 rounded ${activeTab === "preview" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"}`}
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </button>
          <button
            className={`px-3 py-1 rounded ${activeTab === "code" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"}`}
            onClick={() => setActiveTab("code")}
          >
            Code
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-muted-foreground" onClick={handleCopy}>
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
      </div>
      <div className="bg-secondary rounded-b-lg">
        {activeTab === "preview" ? (
          <div className="p-4">{children}</div>
        ) : (
          <div className="max-h-[400px] overflow-y-auto">
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              customStyle={{
                background: "var(--background)", 
                color: "var(--foreground)",
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
}