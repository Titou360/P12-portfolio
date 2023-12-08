import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';
import backgroundImage from '../public/main-bg.webp';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  openGraph: {
    title: 'Clément FELICES, Intégrateur Web',
    description:
      'Clément FELICES, développeur web passionné en Gironde, crée des expériences numériques exceptionnelles. Expertise, créativité et solutions sur mesure',
    url: 'https://p12-portfolio.vercel.app/',
    siteName: 'Clément FELICES, Intégrateur Web',
    images: [
      {
        url: './android-chrome-512x512.png',
        width: 512,
        height: 512
      },
      {
        url: './android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: 'My custom alt'
      }
    ],
    icons: {
      icon: './favicon-32x32.png',
      shortcut: './apple-touch-icon.png',
      apple: './apple-touch-icon.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: './apple-touch-icon.png'
      }
    },
    locale: 'fr_FR',
    type: 'website'
  },
  title: 'Clément FELICES, Intégrateur Web HTML, CSS, Sass, Javascript, React, Tailwind CSS',
  description:
    'Clément FELICES, développeur web passionné en Gironde, crée des expériences numériques exceptionnelles. Expertise, créativité et solutions sur mesure',
  favicon: '/favicon.ico',
  ogImage: './android-chrome-512x512.png',
  twitterImage: './android-chrome-512x512.png',
  siteUrl: 'https://p12-portfolio.vercel.app/'
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
