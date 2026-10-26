"use client"

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useId } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'


export default function Route() {
  return (
    <div className="overflow-hidden bg-creme-600 pt-6 pb-24">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:gap-y-16 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-gold-600">ITINERARY</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">THE SACRED RIVER</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              By following the natural flow of the Nile river you will discover some of the most sacred places of the world.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">All our trips are designed according to your wishes. Your group's tailored itinerary will lead you to the locations and temples which fit your energy.
              </p>
              <div className="relative z-10 mt-10 mb-10 lg:mb-40 lg:py-2 xs:mb-20 flex justify-startgap-x-6">
             <Button className="button-gold" href="/register">Plan Your Visit</Button>
            </div>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative overflow-hidden sm:mx-auto sm:max-w-2xl sm:rounded-3xl lg:mx-0 lg:max-w-none">
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <img
                  alt="trip map"
                  src="images/map.png"
                  width={500}
                  height={500}
                  className="w-full max-w-full rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
