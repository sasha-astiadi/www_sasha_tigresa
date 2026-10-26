'use client'

import { useId } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import veda1 from '@/images/dahabiyas/veda1.jpg'
import veda2 from '@/images/dahabiyas/veda2.jpg'
import veda3 from '@/images/dahabiyas/veda3.jpg'
import veda4 from '@/images/dahabiyas/veda4.jpg'

const features = [
  {
    name: 'VEDA 1',
    summary: 'The ideal retreat for luxury and privacy, perfect for intimate gatherings.',
    description: [
      '6 rooms & 4 suites with balconies.',
      'Hosts up to 20 people.',
      'Private bathroom ensuites.'
    ],
    button: 'Learn More',
    href: '/dahabiyas',
    image: veda1,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#c6892d" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    },
  },
  {
    name: 'VEDA 2',
    summary: 'The perfect spacious space for larger groups seeking comfort.',
    description: [
      '8 rooms & 2 suites with balconies.',
      'Hosts up to 20 people.',
      'Private bathroom ensuites.'
    ],
    button: 'Learn More',
    href: '/dahabiyas',
    image: veda2,
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      )
    },
  },
  {
    name: 'VEDA 3',
    summary: 'An ideal choice for small groups valuing intimacy in a cozy setting.',
    description: [
      '5 rooms with balconies.',
      'Hosts up to 10 people.',
      'Private bathroom ensuites.'
    ],
    button: 'Learn More',
    href: '/dahabiyas',
    image: veda3,
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      )
    },
  },
  {
    name: 'VEDA 4',
    summary: 'The perfect choice for accommodating larger gatherings with ease.',
    description: [
      '10 rooms & 4 suites with balconies.',
      'Hosts up to 28 people.',
      'Private bathroom ensuites.'
    ],
    button: 'Learn More',
    href: '/dahabiyas',
    image: veda4,
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-gold-600' : 'bg-slate-500',
        )}
      >
        {/* Render icon here if needed */}
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-gold-600' : 'text-slate-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <ul className="mt-4 text-sm text-slate-600 list-disc list-inside">
        {feature.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary} className="relative mx-auto max-w-full">
          <div className="relative overflow-hidden rounded-xl bg-creme-900">
            <Image
              className="w-full h-auto object-cover"
              src={feature.image}
              alt={feature.name}
              layout="responsive"
              width={1000}
              height={600}
            />
          </div>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="mx-auto max-w-2xl mt-4">
            <Button href={feature.href} variant="primary" className="rounded-2xl bg-gold-900 mt-4 lg:text-base text-xs px-3 py-2 text-white">
            {feature.button}
            </Button>
          </div>
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-10 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-4 gap-x-4">
            {features.map((feature, featureIndex) => (
              <Tab
                key={feature.summary}
                className={clsx(
                  'relative flex flex-col items-center text-center shadow-lg p-4 border border-gold-200 bg-white rounded-lg',
                  featureIndex === selectedIndex ? 'text-gold-900' : 'text-slate-600'
                )}
              >
                <div className="w-full mb-2">
                  <Image
                    className="w-full h-auto rounded-lg"
                    src={feature.image}
                    alt={feature.name}
                    layout="responsive"
                    width={300}
                    height={200}
                  />
                </div>
                <span className="mt-2 text-lg font-semibold">{feature.name}</span>
                <p className="mt-4 text-sm text-slate-600">{feature.summary}</p>
                <ul className="mt-4 mb-2 text-sm text-slate-600 list-disc list-inside">
                  {feature.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <Button href={feature.href} variant="primary" className="rounded-2xl mb-4 bg-gold-900 mt-4 text-base lg:text-xs px-3 py-1 text-white">
                  {feature.button}
                </Button>
              </Tab>
            ))}
          </TabList>
          <TabPanels className="relative mt-10">
            {features.map((feature, featureIndex) => (
              <TabPanel
                key={feature.summary}
                className={clsx(
                  'transition-opacity duration-500 ease-in-out',
                  featureIndex === selectedIndex ? 'opacity-100' : 'opacity-0'
                )}
                aria-hidden={featureIndex !== selectedIndex}
              >
                {/* Content of the selected tab can go here */}
              </TabPanel>
            ))}
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-14 lg:pt-20 lg:pb-20"
    >
      <Container>
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="text-base font-semibold leading-7 text-gold-600">OUR OFFERS</h2>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            VEDA DAHABIYAS
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Discover peaceful platforms where every detail ensures a truly memorable stay.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
