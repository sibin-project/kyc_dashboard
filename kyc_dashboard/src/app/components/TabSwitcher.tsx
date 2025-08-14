'use client';
import React from 'react';

export default function TabSwitcher({
  timeRange,
  setTimeRange,
  viewType,
  setViewType,
}: {
  timeRange: 'today' | 'month' | 'custom';
  setTimeRange: (v: any) => void;
  viewType: 'individual' | 'nonIndividual';
  setViewType: (v: any) => void;
}) {
  const tabClass = (active: boolean) =>
    `px-3 py-1 rounded border ${active ? 'bg-blue-600 text-white border-gray-400' : 'text-gray-600 border-gray-300'}`;

  return (
    <div className="flex items-center gap-4">
      {/* Time Range Tabs */}
      <div className="bg-white rounded-lg p-1 flex items-center gap-1 border border-gray-300">
        <button onClick={() => setTimeRange('today')} className={tabClass(timeRange === 'today')}>
          Today
        </button>
        <button onClick={() => setTimeRange('month')} className={tabClass(timeRange === 'month')}>
          This Month
        </button>
        <button onClick={() => setTimeRange('custom')} className={tabClass(timeRange === 'custom')}>
          Custom
        </button>
      </div>

      {/* View Type Tabs */}
      <div className="bg-white rounded-lg p-1 flex items-center gap-1 border border-gray-300">
        <button onClick={() => setViewType('individual')} className={tabClass(viewType === 'individual')}>
          Individual
        </button>
        <button onClick={() => setViewType('nonIndividual')} className={tabClass(viewType === 'nonIndividual')}>
          Non Individual
        </button>
      </div>
    </div>
  );
}
