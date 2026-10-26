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
  name: 'VEDA IV',
  images: [
    {
      id: 1,
      name: 'Veda 1',
      src: '/images/veda41.jpg',
      alt: 'Veda2 Veda 1',
    },
    {
      id: 2,
      name: 'Veda 2',
      src: '/images/veda42.jpg',
      alt: 'Veda2 Veda 2',
    },
    {
      id: 3,
      name: 'Veda 3',
      src: '/images/veda43.jpg',
      alt: 'Veda2 Veda 3',
    },
    {
      id: 4,
      name: 'Veda 4',
      src: '/images/veda44.jpg',
      alt: 'Veda2 Veda 4',
    },
    {
      id: 5,
      name: 'Veda 4',
      src: '/images/veda45.jpg',
      alt: 'Veda2 Veda 4',
    },
    {
      id: 6,
      name: 'Veda 4',
      src: '/images/veda46.jpg',
      alt: 'Veda2 Veda 4',
    },
    {
      id: 7,
      name: 'Veda 4',
      src: '/images/veda47.jpg',
      alt: 'Veda2 Veda 4',
    },
    {
      id: 8,
      name: 'Veda 4',
      src: '/images/veda48.jpg',
      alt: 'Veda2 Veda 4',
    },
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>This stunning 55-meter dahabiya offers a tranquil and organic platform for hosting personalized cruises, providing an unforgettable experience on the Nile.</p>
    <p>VEDA IV accommodates up to 28 guests in 14 elegantly designed rooms. Each room is equipped with double beds that can be converted into singles, ensuring flexibility and comfort. All rooms feature private bathrooms. Among these, 4 rooms are luxurious suites with private balconies, offering spectacular views.</p>
    <p>VEDA IV features two air-conditioned meeting spaces that can accommodate up to 50 people, ideal for gatherings and events. The upper deck meeting room offers a breathtaking 360-degree panoramic view, perfect for meetings or leisure. There are multiple areas designed for relaxation and suitable for workshops, yoga, or meditation, providing a serene environment for all guests. Additionally, a well-stocked library is available, featuring a curated collection of books on Egyptian history and awareness, offering guests a quiet place to read and learn.</p>
  `,
  details: [
    {
      name: 'FEATURES',
      items: [
        '14 Rooms: 10 standard rooms and 4 suites with balconies',
        'Hosts up to 28 people',
        'Private bathroom ensuites in each room',
        'Two air-conditioned meeting spaces for up to 50 people',
        'Upper deck meeting room with a 360-degree panoramic view',
        'Multiple relaxation areas for workshops, yoga, or meditation',
        'Library with a collection of Egyptian history and awareness books',
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
