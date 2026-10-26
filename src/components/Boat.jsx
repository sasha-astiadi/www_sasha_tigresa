'use client'

import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'
import { Container } from './Container'
import { Link } from './link'
import { Heading, Subheading } from './text'

const testimonials = [
  {
    img: '/images/veda1.jpg',
    name: '0 - 6 Years Old',
    title: 'From birth to age 6, we offer ECD programs that change lives forever.',
    subtitle: 'A beautiful 50-meter dahabiya offering a tranquil and organic platform for personalized cruises.',
    quote: 'VEDA 1',
    href: '/phases/phase1',
  },
  {
    img: '/images/veda2.jpg',
    name: '6 - 15 Years Old',
    title: 'Unlock the Potential of Youth with transformational learning experiences',
    subtitle: 'An elegant 45-meter dahabiya, ideal for hosting larger groups, healing retreats, company getaways, and more.',
    quote: 'VEDA 2',
    href: '/phases/phase2',
  },
  {
    img: '/images/veda3.jpg',
    name: '15 - 25 Years Old',
    title: 'Skills that Earn & Regenerate Vocational paths that equip young people to live with purpose.',
    subtitle: 'A cozy 18-meter dahabeya offering a serene floating home experience, perfect for private groups seeking tranquility and comfort on the Nile.',
    quote: 'VEDA 3',
    href: '/phases/phase3',
  },
  {
    img: '/images/veda4.jpg',
    name: 'All Ages',
    title: 'A unique portfolio of impact proven Community-led solutions worth implementing',
    subtitle: 'A cozy 55-meter dahabeya offering a serene floating home experience, perfect for smaller groups seeking tranquility and comfort on the Nile.',
    quote: 'VEDA 4',
    href: '/phases/phase4',
  },
]

function TestimonialCard({
  subtitle,
  name,
  title,
  img,
  href,
  children,
  bounds,
  scrollX,
  ...props
}) {
  let ref = useRef(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) bg-white rounded-3xl shadow-lg overflow-hidden sm:w-96"
    >
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden">
        <img
          alt=""
          src={img}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Section Below Image */}
      <div className="p-6">
        <blockquote>
          <p className="text-2xl font-bold text-gray-900 lg:text-3xl">
            {children}
          </p>
        </blockquote>
        
        <p className="mt-4 text-sm text-gray-600 leading-6">
          {subtitle}
        </p>
        
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-600 hover:text-gold-700"
        >
          Learn More
          <ArrowLongRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

export function Boat() {
  let scrollRef = useRef(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    if (scrollRef.current && scrollRef.current.children[0]) {
      setActiveIndex(Math.floor(x / scrollRef.current.children[0].clientWidth))
    }
  })

  function scrollTo(index) {
    let gap = 32
    let width = scrollRef.current.children[0].offsetWidth
    scrollRef.current.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div className="pt-12 pb-24">
      <Container>
        <div ref={setReferenceWindowRef}>
          <h2 className="text-base font-semibold leading-7 text-gold-600">OUR OFFERS</h2>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            VEDA DAHABIYAS
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Discover peaceful platforms where every detail ensures a truly memorable stay. Our fleet of traditional dahabiyas combines authentic Nile heritage with modern comfort, offering intimate sailing experiences that connect you with Egypt's timeless river culture. Each vessel is carefully maintained and uniquely designed to provide the perfect setting for relaxation, reflection, and genuine connection with the magnificent Nile landscape.
          </p>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 pl-6 pr-6 lg:pl-8',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          'pb-8',
        ])}
      >
        {testimonials.map(({ img, name, title, quote, href, subtitle }, testimonialIndex) => (
          <TestimonialCard
            key={testimonialIndex}
            subtitle={subtitle}
            name={name}
            title={title}
            href={href}
            img={img}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(testimonialIndex)}
          >
            {quote}
          </TestimonialCard>
        ))}
        <div className="w-8 shrink-0" />
      </div>
    </div>
  )
}
