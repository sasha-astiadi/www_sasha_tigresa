import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action4.png'
import logoVeda from '@/images/logos/veda_logo2.svg'  

export function CallToAction3() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gold-900 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={1440}
        height={564}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center py-20">
        <ul
          role="list"
          className=" flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-2 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'veda', logo: logoVeda },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-2 sm:flex-row sm:gap-x-12 sm:gap-y-0 "
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name}  width={300} height={84} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        </div>
      </Container>
    </section>
  )
}
