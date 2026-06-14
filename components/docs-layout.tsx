'use client';

import { Sidebar } from './sidebar';
import { useState } from 'react';

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-900 text-white lg:hidden"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`${mobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform`}>
        <Sidebar />
      </div>

      {/* Main content */}
      <main className="lg:pl-64">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
          <article className="mdx-content">
            {children}
          </article>
        </div>
      </main>
    </div>
  );
}
