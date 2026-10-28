import Image from 'next/image'

import { Header } from '@/components/Header'

export const metadata = {
  title: 'DJ Sets',
}

const videos = [
  {
    src: '/images/videos/dext-afro.jpg',
    title: 'Afro House DJ Set',
    location: 'Dext Force, Barcelona, ES',
    href: 'https://www.youtube.com/watch?v=ZuA6f-_cDeU&t=160s',
  },
  {
    src: '/images/videos/dext-melodic.jpg',
    title: 'Melodic Techno DJ Set',
    location: 'Dext Force, Barcelona, ES',
    href: 'https://www.youtube.com/watch?v=HV6APSEahFg&t=62s',
  },
]

export default function Videos() {
  return (
    <>
      <Header />
      <main className="bg-black">
        <section className="px-8 py-10 lg:px-16 lg:py-16">
          <h1 className="font-anton uppercase leading-none text-red-600/90 text-6xl md:text-7xl mb-10">
            DJ Sets
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <a
                key={video.href}
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                  <Image
                    src={video.src}
                    alt={`${video.title} - ${video.location}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-200 group-hover:text-red-600/90">
                  {video.title}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gray-500">
                  {video.location}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
