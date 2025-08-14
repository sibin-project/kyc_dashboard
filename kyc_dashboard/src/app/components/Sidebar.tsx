'use client';
import { useState } from 'react';
import clsx from 'clsx';
import {
  HomeIcon,
  ClipboardDocumentIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  DocumentTextIcon,
  BellIcon
} from '@heroicons/react/24/outline';

import KycLogo from './logo';
const items = [
  { key: 'dashboard', label: 'Dashboard', icon: HomeIcon },
  { key: 'applications', label: 'Applications', icon: ClipboardDocumentIcon },
  { key: 'billing', label: 'Billing', icon: CreditCardIcon },
  { key: 'ratecard', label: 'Rate Card', icon: DocumentChartBarIcon },
  { key: 'agreement', label: 'Agreement Copy', icon: DocumentTextIcon },
  { key: 'notices', label: 'Notices', icon: BellIcon }
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState('dashboard');

  return (
    <aside className="bg-white text-black  ">
      <div className="h-full flex flex-col">
        <div className="p-4 flex items-center gap-3">
          <div className=" p-2 ">
            <div className="w-6 h-4 ">{KycLogo()}</div>
            
          </div>
          {!collapsed}
          <button onClick={() => setCollapsed(!collapsed)} className="ml-auto text-xs text-black-100">
            {collapsed ? '→' : '←'}
          </button>
        </div>

        <nav className="flex-1 px-2 space-y-1">
          {items.map((it) => {
            const Icon = it.icon;
            const isActive = active === it.key;
            return (
              <button
                key={it.key}
                onClick={() => setActive(it.key)}
                className={clsx(
                  'w-full flex items-center gap-3 rounded-md px-3 py-2',
                  isActive
                    ? 'bg-blue-50 text-brand-500 '
                    : 'text-black hover:bg-gray-100 '
                )}
              >
                <Icon className="w-5 h-5" />
                {!collapsed && <span className="text-sm">{it.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-4 text-xs text-gray-400">
          {!collapsed && '© 2025 Company'}
        </div>
      </div>
    </aside>
  );
}
