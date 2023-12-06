import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';
import backgroundImage from '../public/main-bg.webp';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Clément FELICES, Réalisateur Digital',
  description: 'Generated by create next app',
  favicon: '/favicon.ico'
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="w-full h-full dark:bg-dark">
          <div
            className="flex items-center w-full h-full xl:p-24 lg:p-16 md:p-12 sm:p-1 "
            style={{
              backgroundImage: `url(${backgroundImage.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {children}
          </div>
        </main>
        <Footer />
      </body>

    </html>
  );
}
