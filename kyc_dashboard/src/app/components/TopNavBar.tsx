'use client';
import { useState } from 'react';
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import person from './person';

export default function TopNavbar() {
  const [q, setQ] = useState('');

  return (
    <header className="flex items-center justify-between p-4 bg-white text-black ">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Search box */}
        <div className="relative">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search intermediaries"
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-gray-50 text-black 
                        text-sm"
          />
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-400 " />
        </div>

        {/* Notification button */}
        <button className="p-2 rounded-full hover:bg-gray-100 ">
          <BellIcon className="w-5 h-5 text-gray-600 " />
        </button>

        {/* Profile section */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-300  rounded-full flex items-center justify-center">{person()}</div> 
          <div className="hidden sm:block text-right">
            <div className="text-sm">Madhu Kumar</div>
            <div className="text-xs text-gray-500 ">
              {format(new Date('2024-05-19'), 'MMM d, yyyy')}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
