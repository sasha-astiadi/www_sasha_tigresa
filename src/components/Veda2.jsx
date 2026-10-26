'use client'

import { useState } from 'react'
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'

const product = {
  name: 'VEDA II',
  images: [
    {
      id: 1,
      name: 'Veda 1',
      src: '/images/veda20.jpg',
      alt: 'Veda2 Veda 1',
    },
    {
      id: 2,
      name: 'Veda 2',
      src: '/images/veda21.jpg',
      alt: 'Veda2 Veda 2',
    },
    {
      id: 3,
      name: 'Veda 3',
      src: '/images/veda22.jpg',
      alt: 'Veda2 Veda 3',
    },
    {
      id: 4,
      name: 'Veda 4',
      src: '/images/veda23.jpg',
      alt: 'Veda2 Veda 4',
    },
    {
      id: 5,
      name: 'Veda 4',
      src: '/images/veda24.jpg',
      alt: 'Veda2 Veda 4',
    },
    {
      id: 6,
      name: 'Veda 4',
      src: '/images/veda25.jpg',
      alt: 'Veda2 Veda 4',
    },
    {
      id: 7,
      name: 'Veda 4',
      src: '/images/veda26.jpg',
      alt: 'Veda2 Veda 4',
    },
    {
      id: 8,
      name: 'Veda 4',
      src: '/images/veda27.jpg',
      alt: 'Veda2 Veda 4',
    },
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>This elegant 45-meter dahabiya is perfect for hosting larger groups, healing retreats, company getaways, and more. It provides a comfortable and customizable experience for all guests on board.</p>
    <p>VEDA II accommodates up to 20 guests in 10 rooms, each equipped with double beds that can be converted into singles. Every room features a private bathroom for added convenience and privacy. Among these rooms, two are suites with charming balconies.</p>
    <p>VEDA II boasts a spacious and inviting upper deck, thoughtfully divided into multiple areas, including a sunbathing section, a Bedouin corner, and a dining area. The sun deck offers customizable space to suit your specific needs and preferences.</p>
  `,
  details: [
    {
      name: 'FEATURES',
      items: [
        '10 Rooms: 8 standard rooms and 2 suites with balconies',
        'Hosts up to 20 people',
        'Leather handle and tabs',
        'Private bathroom ensuites in each room',
        'Large, cozy upper deck',
        'Designated outdoor areas for sunbathing, relaxation, and dining',
        'Customizable sun deck space to accommodate unique requirements',
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
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Image gallery */}
          <TabGroup className="lg:order-last">
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

            {/* Image selector */}
            <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-6">
                {product.images.map((image) => (
                  <Tab
                    key={image.id}
                    className={({ selected }) =>
                      classNames(
                        'group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4',
                        selected ? 'ring-indigo-500' : 'ring-transparent'
                      )
                    }
                  >
                    <span className="sr-only">{image.name}</span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <img alt={image.alt} src={image.src} className="h-full w-full object-cover object-center" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2 group-focus:ring-indigo-500"
                    />
                  </Tab>
                ))}
              </TabList>
            </div>
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
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gold-800 px-8 py-3 text-base font-medium text-white hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
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
