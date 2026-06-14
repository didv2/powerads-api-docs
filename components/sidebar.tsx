'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavItem {
  title: string;
  href: string;
  method?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs/introduction' },
      { title: 'Authentication', href: '/docs/authentication' },
      { title: 'Rate Limits', href: '/docs/rate-limits' },
    ],
  },
  {
    title: 'Video API',
    items: [
      { title: 'Generate Video', href: '/docs/video/generate', method: 'POST' },
      { title: 'Check Status', href: '/docs/video/status', method: 'GET' },
      { title: 'Webhooks', href: '/docs/video/webhooks' },
    ],
  },
  {
    title: 'Models',
    items: [
      { title: 'Video Models', href: '/docs/models' },
    ],
  },
  {
    title: 'Tokens & Billing',
    items: [
      { title: 'Token System', href: '/docs/billing' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 z-40 h-screen w-64 bg-gray-950 border-r border-gray-800 overflow-y-auto">
      <div className="p-5 border-b border-gray-800">
        <Link href="/docs/introduction" className="flex items-center gap-2">
          <Image
            src="/powerads-logo-full.png"
            alt="PowerAds"
            width={140}
            height={32}
            className="brightness-0 invert"
          />
        </Link>
        <p className="text-xs text-gray-500 mt-1.5 font-medium tracking-wide uppercase">
          API Documentation
        </p>
      </div>

      <nav className="p-4 space-y-6">
        {navigation.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">
              {section.title}
            </h3>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors ${
                        isActive
                          ? 'bg-brand-500/10 text-brand-400 font-medium'
                          : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                      }`}
                    >
                      {item.method && (
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            item.method === 'POST'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-green-500/20 text-green-400'
                          }`}
                        >
                          {item.method}
                        </span>
                      )}
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-4 mt-4 border-t border-gray-800">
        <a
          href="https://app.powerads.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Go to Dashboard
        </a>
      </div>
    </aside>
  );
}
