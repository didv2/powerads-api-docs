interface Param {
  name: string;
  type: string;
  required?: boolean;
  default?: string;
  description: string;
}

interface ParamTableProps {
  params: Param[];
}

export function ParamTable({ params }: ParamTableProps) {
  return (
    <div className="overflow-x-auto mb-6 border border-gray-200 rounded-lg">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b border-gray-200">Parameter</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b border-gray-200">Type</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b border-gray-200">Required</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b border-gray-200">Description</th>
          </tr>
        </thead>
        <tbody>
          {params.map((param) => (
            <tr key={param.name} className="border-b border-gray-100 last:border-0">
              <td className="py-2.5 px-4">
                <code className="text-sm font-mono text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded">
                  {param.name}
                </code>
              </td>
              <td className="py-2.5 px-4 text-gray-500 font-mono text-xs">{param.type}</td>
              <td className="py-2.5 px-4">
                {param.required ? (
                  <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">Required</span>
                ) : param.default ? (
                  <span className="text-xs text-gray-500">Default: <code className="font-mono">{param.default}</code></span>
                ) : (
                  <span className="text-xs text-gray-400">Optional</span>
                )}
              </td>
              <td className="py-2.5 px-4 text-gray-600">{param.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
