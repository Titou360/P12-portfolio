import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';
import backgroundImage from '../public/assets/img/main-bg.webp';

const inter = Inter({ subsets: ['latin'] });
const { NEXT_PUBLIC_BASE_URL } = process.env;

export const metadata = {
  openGraph: {
    title: 'Clément FELICES, Intégrateur Web',
    description:
      'Clément FELICES, développeur web passionné basé en Gironde, crée des expériences numériques exceptionnelles. Expertise, créativité, solutions sur mesure, réparations, mise à jour, une pléïade de services',
    url: 'https://clement-felices-portfolio.vercel.app/',
    siteName: 'Clément FELICES, Développeur Web',
    images: [
      {
        url: 'https://clement-felices-portfolio.vercel.app/android-chrome-512x512.png',
        width: 512,
        height: 512
      },
      {
        url: 'https://clement-felices-portfolio.vercel.app/android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: 'Logo de Clément FELICES'
      }
    ],
    icons: {
      icon: './favicon-32x32.png',
      shortcut: 'https://clement-felices-portfolio.vercel.app/apple-touch-icon.png',
      apple: 'https://clement-felices-portfolio.vercel.app/apple-touch-icon.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: 'https://clement-felices-portfolio.vercel.app/apple-touch-icon.png'
      }
    },
    locale: 'fr_FR',
    type: 'website'
  },
  title: 'Clément FELICES, Intégration et développement Web',
  description:
    'Clément FELICES, développeur web passionné en Gironde, crée des expériences numériques exceptionnelles. Expertise, créativité et solutions sur mesure  pour vos sites Internet. Création, mise à jour, dépannage de votre site.',
  favicon: 'https://clement-felices-portfolio.vercel.app/favicon.ico',
  ogImage: 'https://clement-felices-portfolio.vercel.app/android-chrome-512x512.png',
  twitterImage: 'https://clement-felices-portfolio.vercel.app/android-chrome-512x512.png',
  siteUrl: 'https://clement-felices-portfolio.vercel.app/'
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
