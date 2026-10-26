export function Experiences() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-gold-600">PROGRAMS</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
        VEDA EXPERIENCES
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          From intimate community gatherings to professional retreats, VEDA offers transformative experiences on the Nile. Each space is thoughtfully designed to foster connection, creativity, and personal growth in an inspiring riverside setting.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-8 lg:grid-rows-2">
          <div className="flex p-px lg:col-span-5">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl">
              <div className="h-80 w-full overflow-hidden">
                <img
                  alt=""
                  src="/images/community.jpg"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="p-10">
                <p className="mt-2 text-lg font-semibold tracking-tight text-gray-900">Community building Space</p>
                <p className="mt-2 max-w-xl text-sm lg:text-base text-gray-600">
                  Community building holds significant value by fostering a sense of belonging, providing social and emotional support, and promoting collective action. It enhances social capital, encourages collaboration. Human to human connection become more and more important as new technological times require us to collaborate more on a peer to peer level and connect on different levels with each other.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-3">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-tr-4xl">
              <div className="h-80 w-full overflow-hidden">
                <img
                  alt=""
                  src="/images/private.jpg"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="p-10">
                <p className="mt-2 text-lg font-semibold tracking-tight text-gray-900">Private Retreats</p>
                <p className="mt-2 max-w-lg text-sm lg:text-base text-gray-600">
                  Designed for companies, private groups or families, veda is happy to organise your exclusive retreat experience. 
These retreats offer the flexibility to design the itinerary and activities based on the group’s specific interests and needs.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-3">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-bl-4xl">
              <div className="h-80 w-full overflow-hidden">
                <img
                  alt=""
                  src="/images/events.jpg"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="p-10">
                <p className="mt-2 text-lg font-semibold tracking-tight text-gray-900">Events & Conferences</p>
                <p className="mt-2 max-w-lg text-sm lg:text-base text-gray-600">
                  VEDA’s facilities are suited for hosting events, a unique venue that combines professional functionality with the tranquility of the Nile.
An innovative setting that stands apart from traditional conference venues, promising a impactful event.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-5">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl">
              <div className="h-80 w-full overflow-hidden">
                <img
                  alt=""
                  src="/images/nomads.jpg"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="p-10">
                <p className="mt-2 text-lg font-semibold tracking-tight text-gray-900">Digital Nomad Hub</p>
                <p className="mt-2 max-w-lg text-sm lg:text-base text-gray-600">
                  A haven for remote workers seeking inspiration, focus, and balance. Our spaces combine reliable connectivity, comfortable work areas, and serene surroundings — creating the perfect environment to blend productivity with rejuvenation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
