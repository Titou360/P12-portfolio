// app/layout.js
import React from 'react';
import { Montserrat } from 'next/font/google';
import '@/app/globals.css';
import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
});

const Layout = ({ children, className = '' }) => {
  return (
    <div className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
