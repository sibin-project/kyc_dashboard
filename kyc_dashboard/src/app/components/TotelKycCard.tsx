import { TTotalKyc } from '../../../src/app/type';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

export default function TotalKycCard({ data }: { data: TTotalKyc }) {
  return (
    <div className="flex gap-3">
      <div className="card p-4 w-44">
        <div className="text-xs text-gray-500">New KYC</div>
        <div className="text-2xl font-bold">{data.new.count.toLocaleString()}</div>
        <div className="mt-2 inline-flex items-center gap-2 text-green-600 text-sm">
          <ArrowUpIcon className="w-4 h-4" /> {data.new.change}%
        </div>
      </div>

      <div className="card p-4 w-44">
        <div className="text-xs text-gray-500">Modified KYC</div>
        <div className="text-2xl font-bold">{data.modified.count.toLocaleString()}</div>
        <div className="mt-2 inline-flex items-center gap-2 text-red-500 text-sm">
          <ArrowDownIcon className="w-4 h-4" /> {Math.abs(data.modified.change)}%
        </div>
      </div>
    </div>
  );
}
