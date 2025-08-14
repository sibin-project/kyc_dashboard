import './globals.css';
import { ReactNode } from 'react';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavBar';

export const metadata = { title: 'KYC Dashboard' };

export default function RootLayout({ children }: { children: ReactNode; }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black-900 dark:text-white">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <TopNavbar />
            <main className="p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
