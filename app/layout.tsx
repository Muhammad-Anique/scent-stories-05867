import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Scent Stories',
  description: 'Discover your signature scent. Join the waitlist for exclusive early access.',
  keywords: ['perfume', 'fragrance', 'scent', 'luxury', 'beauty'],
  authors: [{ name: 'Scent Stories' }],
  openGraph: {
    title: 'Scent Stories',
    description: 'Discover your signature scent. Join the waitlist for exclusive early access.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: 'rgba(46, 16, 101, 0.95)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              color: '#faf5ff',
            },
          }}
        />
      </body>
    </html>
  );
}