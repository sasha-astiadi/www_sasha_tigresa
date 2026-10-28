import Image from 'next/image'

import { Header } from '@/components/Header'

export const metadata = {
  title: 'Music',
}

const releases = [
  {
    src: '/images/music/blue-jeans.jpg',
    title: 'Blue Jeans (Sasha Tigresa Remix)',
    listen:
      'https://soundcloud.com/sasha-tigresa/blue-jeans-sasha-tigresa-remix?si=59128156bbb544218facadfffa7d1ebd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    download: 'https://hypeddit.com/b4979n',
  },
  {
    src: '/images/music/feel.webp',
    title: 'Feel (&ME Remix, Sasha Tigresa Edit)',
    listen: 'https://hypeddit.com/wvj24x',
    download: 'https://hypeddit.com/wvj24x',
  },
  {
    src: '/images/music/mano-mano.jpg',
    title: 'Mano Mano (Sasha Tigresa Remix)',
    listen:
      'https://soundcloud.com/sasha-tigresa/mano-mano-sasha-tigresa-remix?si=f818b90201d84d649f0c2e07662ebbbb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    download: 'https://hypeddit.com/jjpu9g',
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
              <div key={release.src} className="group block">
                <div className="relative aspect-w-1 aspect-h-1 overflow-hidden">
                  <Image
                    src={release.src}
                    alt={release.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-10 flex items-center justify-center gap-4 bg-black/70 opacity-0 transition duration-300 group-hover:opacity-100">
                    <a
                      href={release.listen}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold uppercase tracking-[0.25em] text-white hover:text-red-500"
                    >
                      Listen
                    </a>
                    <span className="text-sm text-white">/</span>
                    <a
                      href={release.download}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold uppercase tracking-[0.25em] text-white hover:text-red-500"
                    >
                      Download
                    </a>
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-200 group-hover:text-red-600/90">
                  {release.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
