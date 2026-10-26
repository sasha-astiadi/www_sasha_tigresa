'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'


const product = {
  name: 'Private Retreats',
  images: [
    {
      id: 1,
      name: 'Private Retreat Space 1',
      src: '/images/private.jpg',
      alt: 'Private retreat space with dahabiya setting',
    },
    {
      id: 2,
      name: 'Private Retreat Space 2', 
      src: '/images/veda2.jpg',
      alt: 'Elegant dahabiya for private groups',
    },
    {
      id: 3,
      name: 'Private Retreat Space 3',
      src: '/images/veda3.jpg',
      alt: 'Private retreat on the Nile',
    },
    {
      id: 4,
      name: 'Private Retreat Space 4',
      src: '/images/veda4.jpg',
      alt: 'Exclusive dahabiya experience',
    },
  ],
  colors: [
    { id: 'washed-black', name: 'Washed Black', classes: 'bg-gray-700 checked:outline-gray-700' },
    { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
    { id: 'washed-gray', name: 'Washed Gray', classes: 'bg-gray-500 checked:outline-gray-500' },
  ],
  description: `
    <p>Groups enjoy privacy and a highly personalized experience aboard our elegant and homy dahabiya, ensuring a vibrant, exclusive and secluded setting.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Groups enjoy privacy and a highly personalized experience aboard our elegant and homy dahabiya, ensuring a vibrant, exclusive and secluded setting.',
        'Options range from corporate wellness programs and team-building exercises to energy practices, yoga sessions, and group\'s own activities.',
        'Flexible itineraries: Groups can choose their journey stops, allowing for a tailored experience that can include private tours of historical landmarks, meditation in ancient temples, or leisurely sails to less-known Nile locations.',
      ],
    },
    {
      name: 'Benefits',
      items: [
        'The tranquil and culturally rich environment of the Nile encourages reflection, ideation, and personal growth.',
        'The fusion of personalized wellness, cultural immersion, and luxury in a private setting ensures a unique journey that aligns with the group\'s interests.',
        'Retreats are adaptable in length and activities, allowing for a program that perfectly fits the group\'s schedule and desired outcomes, whether for a few days or an extended period.',
      ],
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Retreats() {
  const [open, setOpen] = useState(false)

  return (
    <div className="pb-24">
      <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
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

                <div className="divide-y divide-gray-200 border-t border-gray-200">
                  {product.details.map((detail) => (
                    <Disclosure key={detail.name} as="div">
                      <h3>
                        <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span className="text-sm font-medium text-gray-900 group-data-open:text-indigo-600">
                            {detail.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="block size-6 text-gray-400 group-hover:text-gray-500 group-data-open:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="hidden size-6 text-indigo-400 group-hover:text-indigo-500 group-data-open:block"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pb-6">
                        <ul
                          role="list"
                          className="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300"
                        >
                          {detail.items.map((item) => (
                            <li key={item} className="pl-2">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>

            {/* Image gallery */}
            <TabGroup className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-6">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium text-gray-900 uppercase hover:bg-gray-50 focus:ring-3 focus:ring-indigo-500/50 focus:ring-offset-4 focus:outline-hidden"
                    >
                      <span className="sr-only">{image.name}</span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <img alt="" src={image.src} className="size-full object-cover" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-selected:ring-indigo-500"
                      />
                    </Tab>
                  ))}
                </TabList>
              </div>

              <TabPanels>
                {product.images.map((image) => (
                  <TabPanel key={image.id}>
                    <img alt={image.alt} src={image.src} className="aspect-square w-full object-cover sm:rounded-lg" />
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </main>
    </div>
  )
}
