export default function PanDataStats({ panStats }: any) {
  return (
    <div className="card p-4">
      <h3 className="text-sm text-gray-600">No. of PANs Solicited</h3>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded p-3">
          <div className="text-xs text-gray-500">With Image</div>
          <div className="text-lg font-semibold">{panStats.solicited.withImage}</div>
        </div>
        <div className="bg-gray-50 rounded p-3">
          <div className="text-xs text-gray-500">Without Image</div>
          <div className="text-lg font-semibold">{panStats.solicited.withoutImage}</div>
        </div>
      </div>

      <h3 className="text-sm text-gray-600 mt-4">Data Received</h3>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded p-3">
          <div className="text-xs text-gray-500">With Image</div>
          <div className="text-lg font-semibold">{panStats.received.withImage}</div>
        </div>
        <div className="bg-gray-50 rounded p-3">
          <div className="text-xs text-gray-500">Without Image</div>
          <div className="text-lg font-semibold">{panStats.received.withoutImage}</div>
        </div>
      </div>
    </div>
  );
}
