import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import logoVeda2 from '@/images/logos/veda_icon2.svg'  

export function CallToAction() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gold-900 py-24"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
        <ul
          role="list"
          className=" flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-2 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'veda', logo: logoVeda2 },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-2 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
          <h2 className="font-display lg:text-3xl text-xl tracking-tight text-white pt-4 lg:pt-6">
          VEDA provides an unparalleled cruise experience on the Nile, blending authenticity with sophistication. Enjoy private journeys featuring organic cuisine, hollistic activities, and a dedicated, warm-hearted crew. 
          </h2>
          <p className="mt-4 text-xl lg:text-2xl italic tracking-tight text-gold-100">
          Discover a cruise like no other with us on the Nile.
          </p>
        </div>
      </Container>
    </section>
  )
}
