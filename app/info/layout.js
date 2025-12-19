// /app/info/layout.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function InfoLayout({ children }) {
  const pathname = usePathname();

  const tabs = [
    { href: '/info/guarantees', label: 'Our guarantees' },
    { href: '/info/when-to-visit', label: 'When to visit Tanzania?' },
    { href: '/info/weather', label: 'Tanzania weather' },
    { href: '/info/travel-advice', label: 'Tanzania Travel Advice' },
    { href: '/info/yellow-fever', label: 'Yellow Fever Requirements' },
    { href: '/info/visa', label: 'Visa Tanzania' },
    { href: '/info/insurance', label: 'Travel Insurance' },
    { href: '/info/flying-doctors', label: 'Flying Doctors Services' },
    { href: '/info/travelife', label: 'Travelife Partner Status' },
    { href: '/info/responsible-travel', label: 'Responsible Travel' },
    { href: '/info/hakuna-matata', label: 'The Hakuna Matata Academy' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* LEFT SIDEBAR */}
      <aside className="w-72 border-r border-gray-200 bg-white p-6 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold text-green-800 mb-6">Practical Information</h2>
        <nav className="space-y-1">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`block px-4 py-3 rounded-lg transition-colors ${
                pathname === tab.href
                  ? 'bg-green-100 text-green-800 font-medium border-l-4 border-green-600 pl-3'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* RIGHT CONTENT AREA */}
      <main className="flex-1 p-8 bg-gray-50">
        <div className="max-w-4xl bg-white rounded-xl shadow-sm p-8">
          {children}
        </div>
      </main>
    </div>
  );
}