import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import React from 'react'


const FFVid = () => {
    return (
        <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-creme-600 pt-6 pb-24"
    >
      <Container>
        <div className="mx-auto max-w-5xl md:text-center">
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
          A Glimpse Into Private Retreats at VEDA
          </h2>
          <p className="mt-4 mb-12 text-lg pb-6 tracking-tight text-slate-700">
          We were honored to welcome FreeFlow Retreats aboard VEDA, where guests experienced the perfect blend of wellness, culture, and tranquility on the Nile. Watch the video below for a glimpse of how your own retreat could unfold in this unique setting. 
          </p>
        </div>
      <div className="video-container">
        <iframe
          src="https://player.vimeo.com/video/725069296?autoplay=1&loop=1&muted=1"
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
  
export default FFVid;