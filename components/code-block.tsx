'use client';

import { useState, useEffect } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = 'bash', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState('');

  useEffect(() => {
    async function highlight() {
      try {
        const shiki = await import('shiki');
        const highlighter = await shiki.createHighlighter({
          themes: ['github-dark'],
          langs: [language as any],
        });
        const result = highlighter.codeToHtml(code.trim(), {
          lang: language,
          theme: 'github-dark',
        });
        setHtml(result);
      } catch {
        setHtml(`<pre class="shiki" style="background-color:#24292e;color:#e1e4e8;padding:1rem;border-radius:0.5rem;overflow-x:auto"><code>${escapeHtml(code.trim())}</code></pre>`);
      }
    }
    highlight();
  }, [code, language]);

  const copy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg overflow-hidden mb-4 border border-gray-800">
      {title && (
        <div className="bg-gray-900 px-4 py-2 text-xs text-gray-400 border-b border-gray-800 font-mono">
          {title}
        </div>
      )}
      <div className="relative">
        {html ? (
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className="text-sm [&>pre]:!rounded-none [&>pre]:!m-0 [&>pre]:p-4"
          />
        ) : (
          <pre className="bg-[#24292e] p-4 text-sm text-gray-300 overflow-x-auto">
            <code>{code.trim()}</code>
          </pre>
        )}
        <button
          onClick={copy}
          className="absolute top-2 right-2 p-1.5 rounded-md bg-gray-700/50 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
          title="Copy"
        >
          {copied ? (
            <svg className="w-4 h-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

function escapeHtml(str: string) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
