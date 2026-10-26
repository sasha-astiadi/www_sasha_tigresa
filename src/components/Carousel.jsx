"use client"; // <-- This line is crucial

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const cards = [
  {
    image: 'images/act1.png',
    title: 'Yoga',
    description: 'Step fully into your body. The perfect start to the morning.',
  },
  {
    image: 'images/act2.png',
    title: 'Nutrition',
    description: 'Discover a variety of dietary options tailored to your health and wellness needs.',
  },
  {
    image: 'images/act3.png',
    title: 'Meditation',
    description: 'Enhance your mental clarity and inner peace through guided meditation practices.',
  },
  {
    image: 'images/act4.png',
    title: 'Massage',
    description: 'Profound relaxation through massage sessions, harmonizing with the high energies of Egypt.',
  },
  {
    image: 'images/act5.png',
    title: 'Workshops',
    description: 'Healing sessions and workshops designed to enrich your well-being',
  },
  {
    image: 'images/act6.png',
    title: 'Excursions',
    description: 'Experience unforgettable adventures with our curated Nile excursions.',
  },
];

const MultiCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + (isMobile ? 1 : 3)) % cards.length;
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexAdjusted = (prevIndex - (isMobile ? 1 : 3) + cards.length) % cards.length;
      return prevIndexAdjusted;
    });
  };

  // Determine the number of cards to display based on screen size
  const displayCards = isMobile ? [cards[currentIndex]] : cards.slice(currentIndex, currentIndex + 3);

  return (
    <div className="flex items-center justify-center min-h-screen py-6 bg-creme-600">
      <div className="w-full max-w-7xl">
        <div className="text-center mx-auto max-w-3xl">
          <h2 className="text-base font-semibold leading-7 text-gold-600">MISSION</h2>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            VEDA ACTIVITIES
          </h2>
          <p className="mt-2 text-lg tracking-wide font-normal leading-6 pb-12 text-gray-600">
            Explore a diverse range of activities designed to elevate your Mind, Body, and Soul, fostering a deeper connection and holistic well-being.
          </p>
        </div>
        <div className="relative">
          <div className={`flex ${isMobile ? 'w-full' : 'space-x-2 overflow-x-auto'}`}>
            {displayCards.map((card, index) => (
              <div
                className={`flex-none ${isMobile ? 'w-full' : 'w-1/3'} relative overflow-hidden rounded-lg`}
                key={index}
              >
                <img
                  className="h-full w-full object-cover"
                  src={card.image}
                  alt={card.title}
                />
                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-40 flex flex-col justify-end items-start text-left p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-white">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-1/2 flex justify-between px-4 transform -translate-y-1/2">
            <button
              className="w-10 h-10 rounded-full text-white font-semibold bg-gold-600"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <button
              className="w-10 h-10 rounded-full text-white font-semibold bg-gold-600"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
