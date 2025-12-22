"use client";
import React, { useState } from 'react';
import {
  Package,
  FileText,
  BookOpen,
  LogOut,
  Home,
  Shield
} from 'lucide-react';

const iconMap = {
  Home,
  Package,
  FileText,
  BookOpen,
};

export default function AdminLayoutClient({ navigation, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity xl:hidden ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
      />
      {/* Sidebar */}
      <aside
        className={`fixed xl:static z-50 top-0 left-0 h-screen w-64 xl:w-80 bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} xl:translate-x-0 xl:flex xl:flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Safari Admin</h1>
              <p className="text-xs text-gray-400">Management Panel</p>
            </div>
          </div>
          {/* Mobile close button */}
          <button className="xl:hidden text-gray-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = iconMap[item.icon] || Package;
            const isActive = false; // You can implement active state logic here
            return (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-400 border-r-2 border-amber-400'
                    : 'text-gray-300 hover:bg-gray-750 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${
                  isActive ? 'text-amber-400' : 'text-gray-400 group-hover:text-white'
                }`} />
                <span className="font-medium">{item.name}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-amber-400 rounded-full"></div>
                )}
              </a>
            );
          })}
        </nav>
        {/* User & Logout Section */}
        <div className="mt-auto p-4">
          <div className="flex items-center space-x-3 mb-4 px-3">
            <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-white">A</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">admin</p>
              <p className="text-xs text-gray-400 truncate">admin@safari.com</p>
            </div>
          </div>
          <a
            href="/admin/logout"
            className="flex items-center space-x-3 px-3 py-3 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200 "
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </a>
        </div>
      </aside>
      {/* Mobile sidebar open button */}
      <button
        className="xl:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-lg shadow-lg"
        onClick={() => setSidebarOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      {/* Main Content - No header/footer, just the content */}
      <main className="flex-1 overflow-auto bg-gray-50 xl:ml-80">
        {children}
      </main>
    </div>
  );
}
