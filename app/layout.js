

import './globals.css';
import { Roboto } from 'next/font/google';
import HeaderFooterWrapper from './_components/HeaderFooterWrapper';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Asili Explorer',
  description: 'Your premier destination for unforgettable Tanzania adventures.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`} suppressHydrationWarning>
        <HeaderFooterWrapper>{children}</HeaderFooterWrapper>
      </body>
    </html>
  );
}
