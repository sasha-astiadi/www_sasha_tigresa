import Image from 'next/image'

import { Header } from '@/components/Header'

export const metadata = {
  title: 'About',
}

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-black">
        <section className="grid -mt-20 md:mt-0 md:fixed md:inset-0 md:grid-cols-2">
          <div className="relative h-[60vh] md:h-full">
            <Image
              src="/images/about/sasha_tigresa.JPG"
              alt="Sasha Tigresa"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex h-full min-h-0 flex-col px-8 py-10 lg:px-16 lg:py-16">
            <h1 className="font-anton uppercase leading-none text-red-600/90 text-6xl md:text-7xl mb-10">
              About
            </h1>
            <div className="flex-1 min-h-0 overflow-y-auto pr-4 space-y-6 text-lg leading-relaxed text-gray-200">
              <p>
                Sasha Tigresa is an Indonesian-German DJ and electronic music
                producer whose sound lives at the intersection of rhythm,
                cultures and emotion.
              </p>
              <p>
                Born in Indonesia and shaped by a life spent across Africa,
                Asia, Europe, North and Latin America, Sasha Tigresa draws
                inspiration from a world of contrasting cultures, rhythms and
                rituals.
              </p>
              <p>
                Her musical identity weaves together her Indonesian heritage
                and folk music, the movement of Afro-Latin rhythms, and the
                raw energy of underground electronic music.
              </p>
              <p>
                Dubbed “the newcomer to watch for” by @cultureofhouse, she
                established her sound across international electronic music
                scenes. Her edit of “Feel” (Abra Remix) by &amp;ME gained
                hundreds of thousands of downloads, bringing her music to
                dance floors around the world.
              </p>
              <p>
                Since then, she has been booked by renowned clubs, venues,
                brands and promoters, including Pacha, Nike, SLS, and Culture
                of House, while attracting the attention and support of
                artists across the afro house and tribal melodic electronic
                music spectrum, including Pablo Fierro, Floyd Lavine,
                Everything Is Art, Thee Suka, Idd Aziz, Rancido, Collé, and
                many others.
              </p>
              <p>
                Her sets move fluidly through Afro House, electronic,
                percussive and atmospheric sounds, treating genre less as a
                boundary and more as a language.
              </p>
              <p>
                For Sasha, music is ultimately about intimacy. A DJ set is
                not simply a sequence of tracks, but a conversation between
                artist, rhythm and the dancefloor.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
