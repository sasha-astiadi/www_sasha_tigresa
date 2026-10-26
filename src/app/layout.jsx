import { Inter, Lexend } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - MN',
    default: 'Maison Noire',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth antialiased',
        inter.variable,
        lexend.variable,
        jmhTypewriter.variable,
      )}
    >
                  <body className="flex h-full flex-col bg-black pt-20 text-slate-900">
        {children}
              </body>
    </html>
  )
}
