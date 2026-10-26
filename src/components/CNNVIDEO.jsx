import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import React from 'react'


const CnnVideo = () => {
    return (
        <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-creme-600 pt-6 pb-24"
    >
      <Container>
        <div className="mx-auto max-w-4xl md:text-center">
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
          VEDA ON CNN 
          </h2>
          <p className="mt-4 text-lg pb-6 tracking-tight text-slate-700">
          CNN Travel visited the Veda boats to give you a first hand impression of what awaits you when cruising the Nile.
          </p>
        </div>
      <div className="video-container">
        <iframe
          src="https://player.vimeo.com/video/371621672?autoplay=1&loop=1&muted=1"
          width="100%"
          height="600"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="rounded-lg w-full max-w-6xl mx-auto"
        ></iframe>
      </div>
        </Container>
        </section>
    );
  };
  
  export default CnnVideo;