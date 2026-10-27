import Image from 'next/image'

import { Header } from '@/components/Header'

export const metadata = {
  title: 'Music',
}

const releases = [
  {
    src: '/images/music/blue-jeans.jpg',
    title: 'Blue Jeans (Sasha Tigresa Remix)',
    href: 'https://hypeddit.com/b4979n',
  },
  {
    src: '/images/music/feel.webp',
    title: 'Feel (&ME Remix, Sasha Tigresa Edit)',
    href: 'https://hypeddit.com/wvj24x',
  },
  {
    src: '/images/music/mano-mano.jpg',
    title: 'Mano Mano (Sasha Tigresa Remix)',
    href: 'https://hypeddit.com/jjpu9g',
  },
]

export default function Music() {
  return (
    <>
      <Header />
      <main className="bg-black">
        <section className="px-8 py-10 lg:px-16 lg:py-16">
          <h1 className="font-anton uppercase leading-none text-red-600/90 text-6xl md:text-7xl mb-10">
            Music
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {releases.map((release) => (
              <a
                key={release.href}
                href={release.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={release.src}
                    alt={release.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-200 group-hover:text-red-600/90">
                  {release.title}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
