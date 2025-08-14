'use client';
import { useEffect, useState } from 'react';
import type { DashboardData } from '../../src/app/type'
import TabSwitcher from './components/TabSwitcher';
import TotalKycCard from './components/TotelKycCard';
import KycBarChart from './components/KycBarChart';
import KycStatusCards from './components/KycStatusCards';
import CategoriesProgress from './components/CategoriesProgress';
import CircularChart from './components/CircularChart';
import PanDataStats from './components/PanDataStats';
import LoadingSkeleton from './components/LoadingSkeleton';
import Link from 'next/link';

export default function Page() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [viewType, setViewType] = useState<'individual' | 'nonIndividual'>('individual');
  const [timeRange, setTimeRange] = useState<'today' | 'month' | 'custom'>('today');

  useEffect(() => {
    setLoading(true);
    fetch('/api/dashboard')
      .then((r) => r.json())
      .then((json) => setData(json as DashboardData))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading || !data) return <LoadingSkeleton />;

  return (
    <div className="max-w-[1200px] mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Axis MF</h2>
          <Link  href=""className="">Home / Dashboard</Link>
        </div>
        <TabSwitcher
          timeRange={timeRange}
          setTimeRange={setTimeRange}
          viewType={viewType}
          setViewType={setViewType}
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left/Main (2 columns) */}
        <div className="col-span-2 space-y-6">
          <div className="card p-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-3xl font-bold">
                  {(data.totalKyc.new.count + data.totalKyc.modified.count).toLocaleString()}
                </div>

                <div className="text-sm text-gray-500">Total KYCs</div>
              </div>
              <div className="flex gap-4">
                <TotalKycCard data={data.totalKyc} />
              </div>
            </div>

            <div className="mt-6">
              <KycBarChart barChart={data.barChart} />
            </div>
          </div>

          <KycStatusCards kycStatus={data.kycStatus} />
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <div className="card p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-600">Categories</h3>
              <div className="text-xs text-gray-400">Individual / Non Individual</div>
            </div>
            <CategoriesProgress categories={data.categories} viewType={viewType} />
          </div>

          <div className="card p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-600">Solicited</h3>
              <div className="text-xs text-gray-400">Individual</div>
            </div>
            <div className="mt-4">
              <CircularChart circularChart={data.circularChart} />
            </div>
          </div>

          <PanDataStats panStats={data.panStats} />
        </div>
      </div>
    </div>
  );
}
