import Image from 'next/image'

import { Container } from '@/components/Container'

const testimonials = [
  [
    {
      content:
        "I had the most wonderful retreat with VEDA along the Nile. You are really immersed in its atmosphere as you slowly pass the sleepy river bank villages, local farmers going about their day, and lush green nature while surrounded by the history of the pharaohs past. It's not just a retreat with healthy eating and relaxing sessions, it's a spiritual experience where you are invited to open your heart and mind, if you let go you will leave feeling so uplifted. I will definitely be back again!",
      author: {
        name: 'Adnan',
        role: 'Retreat Guest',
        image: '/images/comments/Adnan.jpg',
      },
    },
    {
      content:
        "When I set foot on the ship, my world was changed. The sincere joy and authenticity of the team, the powerful serenity of the river, the quality of the rooms with incredible views, it all puts you directly in an atmosphere of total relaxation. The humanity and the delicacy of the attention I could feel touched my heart very deeply. The experience has changed something inside of me.",
      author: {
        name: 'Eloise',
        role: 'Retreat Guest',
        image: '/images/comments/eloise.jpg',
      },
    },
  ],
  [
    {
      content:
        "The VEDA trip on the Nile was not only a journey in the geographic sense but really also a journey that my heart and soul took. I was not that happy about going but when I boarded the Veda boat in Luxor, I transformed in a second from a frowning person to a smiling one. The peaceful, serene, majestic nile effects reflect on you. I will never forget the trip and every part of me is begging me to return as soon as possible.",
      author: {
        name: 'Owen',
        role: 'Retreat Guest',
        image: '/images/comments/owen.jpg',
      },
    },
    {
      content:
        "I am very fortunate to have attended a VEDA retreat on the Nile last December. It was the best Christmas gift possible: great group, magical Nile, incredible temples. VEDA's understated luxury, smart cuisine and extremely accommodating staff made the experience extra special. My personal discovery was the temples. Each temple had a unique gift to offer: Isis' motherly support, Zahmet's clarity, Osiris' protection.",
      author: {
        name: 'Helena',
        role: 'Retreat Guest',
        image: '/images/comments/helena.jpg',
      },
    },
  ],
  [
    {
      content:
        "VEDA exceeded every expectation I had. The combination of ancient Egyptian culture and modern wellness practices created something truly magical. Watching the sunrise over the Nile while practicing yoga on deck was life-changing!",
      author: {
        name: 'Sacha',
        role: 'Wellness Enthusiast',
        image: '/images/comments/sacha.jpg',
      },
    },
    {
      content:
        "As someone who travels frequently for work, I can honestly say VEDA is in a league of its own. The thoughtful curation of experiences, from temple visits with knowledgeable guides to intimate cooking classes with local ingredients, created memories I'll treasure forever. The dahabiya itself is a floating sanctuary of peace and luxury.",
      author: {
        name: 'Karoline',
        role: 'Travel Consultant',
        image: '/images/comments/karoline.jpeg',
      },
    },
    {
      content:
        "What struck me most about VEDA was how they seamlessly blend adventure with relaxation. One moment you're exploring ancient tombs, the next you're enjoying a massage while floating down the world's most famous river. The organic meals were exceptional, and the evening discussions under the stars created bonds with fellow travelers that continue today.",
      author: {
        name: 'Sam',
        role: 'Adventure Seeker',
        image: '/images/comments/sam.jpg',
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-creme-600 pt-10 pb-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            LOVED BY COMMUNITIES WORLDWIDE
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Discover the heartfelt stories of joy, relaxation, and adventure that make VEDA a cherished choice for travelers seeking unique and sophisticated experiences on the Nile.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-lg bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-creme-600">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
