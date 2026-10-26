'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import BgNoise from '@/components/BgNoise'

const images = [
  '/images/homegallery/hero.jpg',
  '/images/homegallery/hero2.jpg',
  '/images/homegallery/hero3.jpg',
  '/images/homegallery/hero4.jpg',
  '/images/homegallery/hero5.jpg',
  '/images/homegallery/hero6.jpg',
]

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
      <BgNoise />
      <Container className="flex min-h-screen items-center justify-center text-center">
        <div className="relative z-10 mx-auto flex justify-center">
          <Image
            src="/images/noire_logo.png"
            alt="Maison Noire"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </Container>
      </div>
      <div className="relative hidden md:block">
        <Image
          unoptimized
          src="/images/booktear1.png"
          alt="Page divider"
          width={1080}
          height={200}
          className="relative z-10 -mt-14 w-full h-auto"
        />
      </div>
      <div className="relative">
        <div
          className="bg-cover bg-center lg:-mt-14 mt-0"
          style={{ backgroundImage: 'url(/images/paper.jpg)', opacity: '0.9' }}
        >
          <div className="px-8 py-24 lg:px-8">
            <div className="mx-auto max-w-2xl text-left">
              <p className="font-script text-2xl text-love-red mb-2 font-typewriter relative">
                <span className="invisible">Ma chérie,</span>
                {isClient && (
                  <span className="absolute top-0 left-0">
                    <Typewriter
                      options={{
                        delay: 75,
                      }}
                      onInit={(typewriter) => {
                        typewriter.typeString('Ma chérie,').start()
                      }}
                    />
                  </span>
                )}
              </p>
              <p className="font-typewriter text-xl max-w-2xl mx-auto leading-relaxed relative">
                <span className="invisible" dangerouslySetInnerHTML={{ __html: 'If you find yourself here, you’ve survived the noise.<br />Sit, let the glass sweat a little.<br />The band will start soon, and perhaps someone will meet your eyes before the chorus ends.<br />If not, the night still owes you a dance...' }} />
                {isClient && (
                  <span className="absolute top-0 left-0">
                    <Typewriter
                      options={{
                        delay: 50,
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(2000)
                          .typeString(
                            'If you find yourself here, you’ve survived the noise.<br />',
                          )
                          .pauseFor(500)
                          .typeString('Sit, let the glass sweat a little.<br />')
                          .pauseFor(500)
                          .typeString(
                            'The band will start soon, and perhaps someone will meet your eyes before the chorus ends.<br />',
                          )
                          .pauseFor(500)
                          .typeString('If not, the night still owes you a dance...')
                          .start()
                      }}
                    />
                  </span>
                )}
              </p>
              <p className="font-script text-xl text-love-red mt-6 font-typewriter relative">
                <span className="invisible">— M.N.</span>
                {isClient && (
                  <span className="absolute top-0 left-0">
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(17000)
                          .typeString('— M.N.')
                          .start()
                      }}
                    />
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
