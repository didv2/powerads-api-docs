import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    table: (props) => (
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg" {...props} />
      </div>
    ),
    thead: (props) => (
      <thead className="bg-gray-50" {...props} />
    ),
    th: (props) => (
      <th className="text-left px-4 py-2 border border-gray-200 font-semibold text-gray-700" {...props} />
    ),
    td: (props) => (
      <td className="px-4 py-2 border border-gray-200 text-gray-600" {...props} />
    ),
    tr: (props) => (
      <tr className="hover:bg-gray-50/50" {...props} />
    ),
    ...components,
  };
}
