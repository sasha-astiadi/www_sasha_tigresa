'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'

import { NavLink } from '@/components/NavLink'

function MobileNavLink({ href, children }) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2 font-semibold uppercase tracking-[0.15em] text-red-600/90 transition-colors duration-300 hover:text-red-500">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-love-red"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-50/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 bottom-full flex origin-bottom flex-col bg-black/10 p-4 text-lg tracking-tight text-white backdrop-blur-sm data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MobileNavLink href="/">HOME</MobileNavLink>
        <MobileNavLink href="/about">ABOUT</MobileNavLink>
        <MobileNavLink href="/music">MUSIC</MobileNavLink>
        <MobileNavLink href="/videos">DJ SETS</MobileNavLink>
        <MobileNavLink href="/contact">CONTACT</MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="fixed bottom-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm py-4 md:py-3">
      <Container>
        <nav className="relative z-50 flex items-center justify-between">
          <div className="flex flex-1 items-center md:hidden">
            <Link href="/" aria-label="Home">
              <Image src="/images/logomark.svg" alt="" width="32" height="32" className="h-8 w-auto" unoptimized />
            </Link>
          </div> 
          <div className="hidden md:flex flex-1 items-center justify-between">
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/about">ABOUT</NavLink>
            <NavLink href="/music">MUSIC</NavLink>
            <NavLink href="/videos">DJ SETS</NavLink>
            <NavLink href="/contact">CONTACT</NavLink>
          </div>
          <div className="md:hidden">
            <MobileNavigation />
          </div>
        </nav>
      </Container>
    </header>
  )
}
