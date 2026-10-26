import Image from 'next/image'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-transparent text-center">
      <Container>
        <div className="flex flex-col items-center justify-center gap-6 lg:py-8 py-6">
          <Image src="/images/logomark.svg" alt="" width="48" height="48" className="h-12 w-auto" unoptimized />
        </div>
      </Container>
    </footer>
  )
}
