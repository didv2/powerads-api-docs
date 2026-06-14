'use client';

import { useState } from 'react';
import { CodeBlock } from './code-block';

interface Tab {
  label: string;
  language: string;
  code: string;
}

interface CodeTabsProps {
  tabs: Tab[];
}

export function CodeTabs({ tabs }: CodeTabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-lg overflow-hidden border border-gray-800 mb-4">
      <div className="flex bg-gray-900 border-b border-gray-800">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            className={`px-4 py-2 text-xs font-medium transition-colors ${
              active === i
                ? 'text-brand-400 border-b-2 border-brand-400 bg-gray-800/50'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="[&>div]:!mb-0 [&>div]:!border-0 [&>div]:!rounded-none">
        <CodeBlock
          code={tabs[active].code}
          language={tabs[active].language}
        />
      </div>
    </div>
  );
}
