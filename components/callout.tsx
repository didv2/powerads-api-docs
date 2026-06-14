import { ReactNode } from 'react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  children: ReactNode;
}

const styles = {
  info: {
    container: 'bg-blue-50 border-blue-200 text-blue-900',
    icon: (
      <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  warning: {
    container: 'bg-amber-50 border-amber-200 text-amber-900',
    icon: (
      <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  error: {
    container: 'bg-red-50 border-red-200 text-red-900',
    icon: (
      <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  success: {
    container: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    icon: (
      <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const style = styles[type];
  return (
    <div className={`flex gap-3 p-4 rounded-lg border mb-4 ${style.container}`}>
      {style.icon}
      <div className="text-sm">
        {title && <p className="font-semibold mb-1">{title}</p>}
        <div className="[&>p]:mb-0">{children}</div>
      </div>
    </div>
  );
}
