'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MDXContentProps {
  content: string;
  isDark?: boolean;
}

export function MDXContent({ content }: MDXContentProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        // Headings with better styling
        h1: ({ children, ...props }) => (
          <h1 
            className="text-4xl font-bold mt-8 mb-4 pb-3 border-b border-slate-700/50 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent" 
            {...props}
          >
            {children}
          </h1>
        ),
        h2: ({ children, ...props }) => (
          <h2 
            className="text-3xl font-bold mt-8 mb-4 pb-2 border-b border-slate-700/30 text-slate-200 flex items-center gap-3" 
            {...props}
          >
            <span className="text-blue-400">#</span>
            {children}
          </h2>
        ),
        h3: ({ children, ...props }) => (
          <h3 
            className="text-2xl font-semibold mt-6 mb-3 text-slate-300 flex items-center gap-2" 
            {...props}
          >
            <span className="text-blue-400/60">##</span>
            {children}
          </h3>
        ),
        
        // Paragraphs
        p: ({ children, ...props }) => (
          <p className="text-slate-300 leading-[1.6] mb-4 text-lg" {...props}>
            {children}
          </p>
        ),
        
        // Code blocks with syntax highlighting
        code: ({ inline, className, children, ...props }: { inline?: boolean; className?: string; children?: React.ReactNode }) => {
          const match = /language-(\w+)/.exec(className || '');
          const language = match ? match[1] : '';
          const codeString = String(children).replace(/\n$/, '');
          const isCopied = copiedCode === codeString;
          
          if (!inline && language) {
            return (
              <div className="my-6 rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl">
                {/* Code block header */}
                <div className="bg-slate-800/50 px-5 py-3 border-b border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="ml-3 text-xs font-mono text-slate-400">{language}</span>
                  </div>
                  <button 
                    onClick={() => handleCopy(codeString)}
                    className="text-xs transition-colors px-3 py-1 rounded flex items-center gap-1.5 bg-slate-700/30 hover:bg-slate-700/50"
                    aria-label="Copy code to clipboard"
                  >
                    {isCopied ? (
                      <>
                        <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span className="text-slate-400 hover:text-slate-200">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                {/* Code content */}
                <div className="bg-slate-900/50">
                  <SyntaxHighlighter
                    style={oneDark}
                    language={language}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      padding: '1.5rem',
                      background: 'transparent',
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                    }}
                    codeTagProps={{
                      style: {
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                      }
                    }}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                </div>
              </div>
            );
          }
          
          // Inline code
          return (
            <code 
              className="px-2 py-0.5 rounded bg-slate-800/60 text-blue-300 font-mono text-[0.9em] border border-slate-700/40" 
              {...props}
            >
              {children}
            </code>
          );
        },
        
        // Lists
        ul: ({ children, ...props }) => (
          <ul className="space-y-1.5 mb-4 ml-6" {...props}>
            {children}
          </ul>
        ),
        ol: ({ children, ...props }) => (
          <ol className="space-y-1.5 mb-4 ml-6 list-decimal" {...props}>
            {children}
          </ol>
        ),
        li: ({ children, ...props }) => (
          <li className="text-slate-300 text-lg leading-[1.6] flex items-start" {...props}>
            <span className="text-blue-400 mr-3 mt-0.5">•</span>
            <span className="flex-1">{children}</span>
          </li>
        ),
        
        // Blockquotes
        blockquote: ({ children, ...props }) => (
          <blockquote 
            className="my-6 pl-6 pr-4 py-4 border-l-4 border-blue-500/60 bg-slate-800/30 rounded-r-lg italic" 
            {...props}
          >
            <div className="text-slate-300/90 text-lg leading-[1.6]">{children}</div>
          </blockquote>
        ),
        
        // Links
        a: ({ children, href, ...props }) => (
          <a 
            href={href}
            className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-300 transition-colors"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            {...props}
          >
            {children}
          </a>
        ),
        
        // Strong/Bold
        strong: ({ children, ...props }) => (
          <strong className="font-bold text-slate-100" {...props}>
            {children}
          </strong>
        ),
        
        // Emphasis/Italic
        em: ({ children, ...props }) => (
          <em className="italic text-slate-200" {...props}>
            {children}
          </em>
        ),
        
        // Horizontal rule
        hr: (props) => (
          <hr className="my-6 border-slate-700/50" {...props} />
        ),
        
        // Tables
        table: ({ children, ...props }) => (
          <div className="my-6 overflow-x-auto rounded-xl border border-slate-700/50">
            <table className="min-w-full divide-y divide-slate-700/50" {...props}>
              {children}
            </table>
          </div>
        ),
        thead: ({ children, ...props }) => (
          <thead className="bg-slate-800/50" {...props}>
            {children}
          </thead>
        ),
        th: ({ children, ...props }) => (
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200" {...props}>
            {children}
          </th>
        ),
        td: ({ children, ...props }) => (
          <td className="px-6 py-4 text-slate-300" {...props}>
            {children}
          </td>
        ),
        tr: ({ children, ...props }) => (
          <tr className="border-b border-slate-700/30 hover:bg-slate-800/20 transition-colors" {...props}>
            {children}
          </tr>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
