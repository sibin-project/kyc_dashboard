import { TKycStatus } from '../type';
import {
  ClockIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
const items: { key: keyof TKycStatus; label: string; icon: any; color: string }[] = [
  { key: 'initiated', label: 'KYC Initiated', icon: ClockIcon, color: 'bg-blue-50 text-blue-600' },
  { key: 'underProcess', label: 'Under Process', icon: ArrowPathIcon, color: 'bg-yellow-50 text-yellow-600' },
  { key: 'registered', label: 'Registered', icon: CheckCircleIcon, color: 'bg-green-50 text-green-600' },
  { key: 'validated', label: 'Validated', icon: ShieldCheckIcon, color: 'bg-green-50 text-green-700' },
  { key: 'hold', label: 'Hold', icon: ExclamationTriangleIcon, color: 'bg-red-50 text-red-600' },
  { key: 'docsPending', label: 'Docs Pending', icon: DocumentTextIcon, color: 'bg-indigo-50 text-indigo-600' }
];

export default function KycStatusCards({ kycStatus }: { kycStatus: TKycStatus }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((it) => {
        const Icon = it.icon;
        const value = (kycStatus as any)[it.key];
        return (
          <div key={it.key} className="card p-4 flex items-center gap-4">
            <div className={`p-2 rounded-md ${it.color}`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-gray-500 ">{it.label}</div>
              <div className="text-lg font-semibold">{value}</div>
            </div>

          </div>
        );
      })}
    </div>
  );
}
