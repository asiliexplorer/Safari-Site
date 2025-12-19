// app/admin/layout.js
import '../globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Asili Explorer - Admin',
  description: 'Admin Dashboard',
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`} suppressHydrationWarning>
        {/* No HeaderFooterWrapper - completely clean admin interface */}
        {children}
      </body>
    </html>
  );
}