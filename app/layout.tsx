import './globals.css';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Analytics from '../src/components/Analytics';
// import { register } from 'swiper/element/bundle';

const aeonik = localFont({
  src: [
    {
      path: '../public/fonts/Aeonik/Aeonik-Air.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aeonik/Aeonik-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aeonik/Aeonik-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aeonik/Aeonik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aeonik/Aeonik-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aeonik/Aeonik-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aeonik/Aeonik-Black.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-aeonik',
});
// const clay_display = localFont({
//   src: '../public/fonts/ClashDisplay/ClashDisplay-Variable.woff2',
//   display: 'swap',
//   variable: '--font-clash-display',
// });

export const metadata: Metadata = {
  title: 'Beta Score',
  description: 'Beta Score',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // register();
  return (
    <html lang="en">
      <body className={`${aeonik.className}`}>
        <Suspense>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
