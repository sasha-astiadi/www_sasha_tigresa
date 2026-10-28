'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'


const images = ['/images/homegallery/hero0.JPG']

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="relative -mt-20 min-h-screen bg-black/5">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute inset-0 -z-20"
          >
            <Image
              src={images[currentImageIndex]}
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={currentImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      <Container className="flex min-h-screen items-center justify-center text-center">
        <div className="relative z-10 mx-auto flex justify-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="font-anton uppercase leading-none text-red-600/90 text-[13vw] whitespace-nowrap"
          >
            Sasha Tigresa
          </motion.h1>
        </div>
      </Container>
      </div>
      {/* <div className="relative hidden md:block">
        <Image
          unoptimized
          src="/images/booktear1.png"
          alt="Page divider"
          width={1080}
          height={200}
          className="relative z-10 -mt-14 w-full h-auto"
        />
      </div> */}
      <div className="relative">
        <div
          className="bg-cover bg-center lg:-mt-14 mt-0"
          style={{ backgroundImage: 'url(/images/paper.jpg)', opacity: '0.9' }}
        >
        </div>
      </div>
    </>
  )
}
