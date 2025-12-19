// app/_components/HeaderFooterWrapper.jsx
'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from '../_contexts/ThemeContext';

export default function HeaderFooterWrapper({ children }) {
  const pathname = usePathname();
    const hideLayout =
    pathname === "/not-found" || pathname === "/404" || pathname.includes("page-not-found");

  // Don't show header/footer for any admin routes
  if (pathname?.startsWith('/admin') || hideLayout) {
    return (
      <ThemeProvider>
        {children}
      </ThemeProvider>
    );
  }
  
  // Show header/footer for normal routes
  return (
    <ThemeProvider>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}