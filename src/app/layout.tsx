import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { AuthProvider } from '@/context/AuthContext';
import OrientationLock from "@/components/OrientationLock";
import GoogleAnalytics from '@/components/GoogleAnalaytics';
import Hotjar from '@/components/Hotjar';
// import MetaPixel from '@/components/MetaPixel';

// Import Mapbox CSS
import 'mapbox-gl/dist/mapbox-gl.css';
import "./globals.css";

// Font configuration
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Add display swap for better font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://askdevi.com'), // Add your domain
  title: {
    default: "Ask Devi - Your Personal Vedic Astrologer",
    template: "%s | Ask Devi"
  },
  description: "Get instant, hyper-personalized Vedic astrology readings powered by AI. Ask about love, career, health & more. Your personal AI astrologer available 24/7. Free trial available.",
  keywords: [
    "vedic astrology",
    "AI astrologer",
    "horoscope",
    "birth chart reading",
    "love astrology",
    "career astrology",
    "indian astrology",
    "jyotish",
    "kundli"
  ],
  authors: [{ name: "Ask Devi" }],
  creator: "Ask Devi",
  publisher: "Ask Devi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://askdevi.com',
    siteName: 'Ask Devi',
    title: 'Ask Devi - Your Personal Vedic Astrologer',
    description: 'Get instant, hyper-personalized Vedic astrology readings powered by AI.',
    images: [
      {
        url: '/og-image.jpg', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'Ask Devi Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ask Devi - Your Personal Vedic Astrologer',
    description: 'Get instant, hyper-personalized Vedic astrology readings powered by AI.',
    images: ['/twitter-image.jpg'], // Add your Twitter card image
    creator: '@askdevi'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`bg-[#220038] ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <GoogleAnalytics />
      </head>
      <body className="antialiased min-h-screen bg-gradient-to-b from-[#220038] via-[#150030] to-[#220038]">
        {/* <MetaPixel /> */}
        <AuthProvider>
          <OrientationLock />
          {children}
        </AuthProvider>
        <Hotjar />
        <Analytics />
      </body>
    </html>
  );
}