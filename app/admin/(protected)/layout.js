// app/admin/(protected)/layout.js
import { requireAdmin } from '@/lib/auth';
import { Home, Package, FileText, BookOpen } from 'lucide-react';
import AdminLayoutClient from './AdminLayoutClient';
export default async function AdminLayout({ children }) {
  await requireAdmin();
  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: 'Home', current: true },
    { name: 'Packages', href: '/admin/packages', icon: 'Package', current: false },
    { name: 'Proposals', href: '/admin/proposals', icon: 'FileText', current: false },
    { name: 'Blogs', href: '/admin/blogs', icon: 'BookOpen', current: false },
  ];
  return <AdminLayoutClient navigation={navigation}>{children}</AdminLayoutClient>;
}