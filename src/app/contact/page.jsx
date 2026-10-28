'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

const links = [
  { label: 'Instagram', href: 'https://www.instagram.com/sasha.tigresa/' },
  { label: 'SoundCloud', href: 'https://soundcloud.com/sasha-tigresa' },
  { label: 'Resident Advisor', href: 'https://ra.co/dj/sashatigresa' },
  { label: 'Booking', href: 'mailto:tigresamusic@gmail.com' },
]

export default function Contact() {
  return (
    <>
      <Header />
      <main className="bg-transparent">
        <div className="relative -mt-20 min-h-screen bg-black/5">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="absolute inset-0 -z-20"
            >
              <Image
                src="/images/contact/contact_hero.JPG"
                alt="Sasha Tigresa"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 -z-10 bg-black/40" />
          <Container className="flex min-h-screen items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="relative z-10 mx-auto flex flex-col items-center gap-4 md:gap-4"
            >
              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                {links.map((link, index) => (
                  <span key={link.href} className="flex items-center gap-4 md:gap-6">
                    {index > 0 && <span className="hidden md:inline text-red-600/90 text-3xl">/</span>}
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="font-anton uppercase tracking-[0.1em] whitespace-nowrap text-3xl md:text-4xl text-red-600/90 transition-colors duration-300 hover:text-red-500"
                    >
                      {link.label}
                    </a>
                  </span>
                ))}
              </div>
              <a
                href="/docs/sashatigresa_presskit.pdf"
                download="sashatigresa_presskit.pdf"
                className="mt-2 md:mt-0 font-anton uppercase tracking-[0.1em] whitespace-nowrap text-3xl md:text-4xl text-red-600/90 transition-colors duration-300 hover:text-red-500"
              >
                Presskit
              </a>
            </motion.div>
          </Container>
        </div>
      </main>
    </>
  )
}
