import Image from 'next/image'
import React from 'react';
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const people = [
    {
      name: 'Isabelle Peeters',
      role: 'CEO, Founder, Awareness Coach',
      imageUrl:
        '/images/isabelle.png',
      bio: 'Isabelle holds a law degree and MBA. Two years after setting up her legal solutions firm, a progressed form of Lyme disease called her to a halt.',
      bio2: 'Years of conventional medicine made her completely bedridden, until she realized that true healing only started after introducing organic healing food, biological medicine protocols, energy healing, meditation, and understanding the Self.',
      bio3: 'Helping to grow people in awareness and understanding their own power became a true passion of Isabelle.',
      Url: 'https://www.linkedin.com/in/isabelle-peeters-54305589/',
    },
    {
        name: 'Chef Dave De Belder',
        role: 'Nutritionist, Chef, Nutritional Coach',
        imageUrl:
          '/images/dave.png',
        bio: "Dave's culinary career started with top chef Jonnie Boer. From there he went to Spain to be trained by star chefs Ferran & Albert Adria and chef Joan Roca.",
        bio2: "After successfully opening two michelin-stars restaurant in Belgium and Australia, Dave needed a radical change in his life and moved to Ibiza in 2015. Going back to the basics inspired him to go fully organic and local.",
        bio3: "In Workshops and retreats at VEDA, Dave helps people to understand the impact of food on the body, mind, and soul. He also teaches how to improve your diet and cook in a real and healthy way.",
        Url: 'https://glowbelle.es/',
      },
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-creme-600 py-12 md:py-32 lg:py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">OUR PEOPLE</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a dynamic family of individuals from diverse cultural backgrounds and varied expertise, united by our passion in spirituality and dedication delivering heartfelt and authentic Nile experiences for our guests.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img alt="" src={person.imageUrl} className="aspect-[4/4] w-full rounded-2xl object-cover" />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
                <p className="mt-2 text-base leading-7 text-gray-600">{person.bio2}</p>
                <p className="mt-2 text-base leading-7 text-gray-600">{person.bio3}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={person.Url} className="text-gray-400 hover:text-gray-500" target='_blank' rel="noopener noreferrer">
                      <span className="sr-only">Website</span>
                      <svg fill="none" stroke='gray' strokeWidth="3" viewBox="0 0 64 64" width="25" height="25">
                      <path d="M39.93 55.72a24.86 24.86 0 1116.93-23.57 37.24 37.24 0 01-.73 6M37.86 51.1A47 47 0 0132 56.7"></path>
                      <path d="M32 7a34.14 34.14 0 0111.57 23 34.07 34.07 0 01.09 4.85M32 7a34.09 34.09 0 00-11.69 25.46c0 16.2 7.28 21 11.66 24.24"></path>
                      <path d="M10.37 19.9L53.75 19.9"></path>
                      <path d="M32 6.99L32 56.7"></path>
                      <path d="M11.05 45.48L37.04 45.48"></path>
                      <path d="M7.14 32.46L56.86 31.85"></path>
                      <path d="M53.57 57L58 52.56l-8-8 4.55-2.91a.38.38 0 00-.12-.7l-15.29-3.58a.39.39 0 00-.46.46L42 53.41a.39.39 0 00.71.13L45.57 49z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  