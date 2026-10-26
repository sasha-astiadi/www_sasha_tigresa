'use client'

import { useState } from 'react'
import {
  Radio,
  RadioGroup,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon } from '@heroicons/react/24/outline'

const product = {
  name: 'VEDA I',
  images: [
    {
      id: 1,
      name: 'Veda',
      src: '/images/veda10.jpg',
      alt: 'Veda1',
    },
    {
      id: 1,
      name: 'Veda',
      src: '/images/veda11.jpg',
      alt: 'Veda1',
    },
    {
      id: 1,
      name: 'Veda',
      src: '/images/veda12.jpg',
      alt: 'Veda1',
    },
    {
      id: 1,
      name: 'Veda',
      src: '/images/veda13.jpg',
      alt: 'Veda1',
    },
    {
      id: 1,
      name: 'Veda',
      src: '/images/veda14.jpg',
      alt: 'Veda1',
    },
    {
      id: 1,
      name: 'Veda',
      src: '/images/veda15.jpg',
      alt: 'Veda1',
    },
    {
      id: 1,
      name: 'Veda',
      src: '/images/veda17.jpg',
      alt: 'Veda1',
    },
    {
      id: 1,
      name: 'Veda',
      src: '/images/veda18.jpg',
      alt: 'Veda1',
    },
    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>This beautiful 50-meter dahabiya offers a peaceful organic platform to host your personalised cruise.</p>
    <p>VEDA 1 accommodates up to 20 guests across 10 rooms with double beds that can be converted into singles, each featuring a private bathroom. Four of these rooms are suites with balconies.</p>
    <p>The facility includes two air-conditioned meeting spaces for up to 50 people, an upper deck meeting room with a 360-degree panoramic view, and various relaxation areas suitable for workshops, yoga, or meditation. Additionally, there is a library with a collection of books on Egyptian history and awareness.</p>
  `,
  details: [
    {
      name: 'FEATURES',
      items: [
      '10 rooms: 6 standard rooms and 4 suites with balconies',
      'Hosts up to 20 people',
      'Private bathroom ensuites in each room',
      'Two air-conditioned meeting spaces for up to 50 people',
      'Upper deck meeting room with a 360-degree panoramic view',
      'Relaxation areas suitable for workshops, yoga, or meditation',
      'Library with a collection of books on Egyptian history and awareness',
      ],
    },
    // More sections...
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  return (
    <div className="bg-creme-600">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <TabGroup className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-6">
                {product.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    <span className="sr-only">{image.name}</span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <img alt="" src={image.src} className="h-full w-full object-cover object-center" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
                    />
                  </Tab>
                ))}
              </TabList>
            </div>

            <TabPanels className="aspect-h-1 aspect-w-1 w-full">
              {product.images.map((image) => (
                <TabPanel key={image.id}>
                  <img
                    alt={image.alt}
                    src={image.src}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                dangerouslySetInnerHTML={{ __html: product.description }}
                className="space-y-6 text-base text-gray-700"
              />
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900">FEATURES</h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc pl-5 space-y-2">
                    {product.details[0].items.map((item) => (
                      <li key={item} className="text-gray-700">
                        <span className="text-gray-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <form className="mt-6">
              <div className="mt-10 flex">
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gold-800x-8 py-3 text-base font-medium text-white hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Book Now
                </button>
              </div>
            </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
