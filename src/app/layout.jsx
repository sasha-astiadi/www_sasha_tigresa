import { Anton, Inter, Lexend } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import BgNoise from '@/components/BgNoise'

export const metadata = {
  metadataBase: new URL('https://www.sashatigresa.com'),
  title: {
    template: '%s — Sasha Tigresa',
    default: 'Sasha Tigresa — DJ & Electronic Music Producer',
  },
  description:
    'Sasha Tigresa is an Indonesian-German DJ and electronic music producer whose sound lives at the intersection of rhythm, cultures and emotion — Afro House, melodic and percussive electronic music.',
  keywords: [
    'Sasha Tigresa',
    'DJ Sasha Tigresa',
    'Indonesian DJ',
    'Afro House DJ',
    'melodic techno',
    'electronic music producer',
    'female DJ',
    'Barcelona DJ',
    'DJ booking',
  ],
  authors: [{ name: 'Sasha Tigresa' }],
  creator: 'Sasha Tigresa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sashatigresa.com',
    siteName: 'Sasha Tigresa',
    title: 'Sasha Tigresa — DJ & Electronic Music Producer',
    description:
      'Indonesian-German DJ and electronic music producer. Afro House, melodic and percussive electronic music.',
    images: [
      {
        url: '/images/homegallery/hero0.JPG',
        width: 1200,
        height: 800,
        alt: 'Sasha Tigresa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sasha Tigresa — DJ & Electronic Music Producer',
    description:
      'Indonesian-German DJ and electronic music producer. Afro House, melodic and percussive electronic music.',
    images: ['/images/homegallery/hero0.JPG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Sasha Tigresa',
  alternateName: 'DJ Sasha Tigresa',
  description:
    'Indonesian-German DJ and electronic music producer whose sound lives at the intersection of rhythm, cultures and emotion.',
  genre: ['Afro House', 'Melodic Techno', 'Electronic', 'Afro-Latin'],
  url: 'https://www.sashatigresa.com',
  image: 'https://www.sashatigresa.com/images/homegallery/hero0.JPG',
  sameAs: [
    'https://www.instagram.com/sasha.tigresa/',
    'https://soundcloud.com/sasha-tigresa',
    'https://ra.co/dj/sashatigresa',
    'https://www.youtube.com/@sashatigresa',
  ],
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jmhTypewriter = localFont({
  src: '../fonts/jmh_typewriter/JMH Typewriter.otf',
  variable: '--font-jmh-typewriter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth antialiased',
        inter.variable,
        lexend.variable,
        jmhTypewriter.variable,
        anton.variable,
      )}
    >
                  <body className="flex h-full flex-col bg-black pt-20 pb-20 text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BgNoise />
        {children}
              </body>
    </html>
  )
}
