import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/partials/Footer';
import Header from '@/components/partials/Header';
import Providers from '@/components/Providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Runes launchpad, trading platform',
  description: 'Fair launch',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-ord-dark-blue pt-9 lg:pt-14">
            <Header />
            <div className="container my-[4rem] lg:my-[5rem] px-6 py-[4.5rem] lg:py-0">
              {children}
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
