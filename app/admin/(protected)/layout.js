// app/admin/(protected)/layout.js
import { requireAdmin } from '@/lib/auth';
import {
  Package,
  FileText,
  BookOpen,
  LogOut,
  Home,
  Shield
} from 'lucide-react';

export default async function AdminLayout({ children }) {
  await requireAdmin();

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: Home, current: true },
    { name: 'Packages', href: '/admin/packages', icon: Package, current: false },
    { name: 'Proposals', href: '/admin/proposals', icon: FileText, current: false },
    { name: 'Blogs', href: '/admin/blogs', icon: BookOpen, current: false },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl">
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
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
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
        <div className="absolute w-70 bottom-0 left-0 right-0 p-4 ">
          <div className="flex items-center space-x-3 mb-4 px-3">
            <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-white">A</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin User</p>
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

      {/* Main Content - No header/footer, just the content */}
      <main className="flex-1 overflow-auto bg-gray-50">
        {children}
      </main>
    </div>
  );
}