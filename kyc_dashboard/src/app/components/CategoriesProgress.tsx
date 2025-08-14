export default function CategoriesProgress({ categories, viewType }: any) {
  const data = categories[viewType];

  const prog = (n: number) => `${Math.max(0, Math.min(100, n))}%`;

  return (
    <div className="mt-4 space-y-4">
      <div>
        <div className="flex justify-between">
          <div className="text-xs text-gray-500">RI</div>
          <div className="text-xs text-gray-500">{data.RI}%</div>
        </div>
        <div className="w-full bg-gray-100 h-3 rounded mt-2 overflow-hidden">
          <div className="h-3 bg-blue-600" style={{ width: prog(data.RI) }} />
        </div>
      </div>

      <div>
        <div className="flex justify-between">
          <div className="text-xs text-gray-500">NRI</div>
          <div className="text-xs text-gray-500">{data.NRI}%</div>
        </div>
        <div className="w-full bg-gray-100 h-3 rounded mt-2 overflow-hidden">
          <div className="h-3 bg-blue-300" style={{ width: prog(data.NRI) }} />
        </div>
      </div>
    </div>
  );
}
