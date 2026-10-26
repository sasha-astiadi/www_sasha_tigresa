import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, SparklesIcon } from '@heroicons/react/20/solid'

const features = [

]

export default function NewFeatures() {
  return (
    <div className="overflow-hidden bg-creme-600 pb-0 pt-12 lg:pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="flex items-start justify-end lg:justify-start lg:order-first">
          <img
             alt="New Features"
              src="images/story1.png"
            className="w-full max-w-[40rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
            style={{ maxWidth: '40rem', height: 'auto' }}
          />
        </div>
          <div className="lg:ml-auto lg:pl-4 lg:pt-0">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">OUR STORY</p>
              <p className="mt-4 text-xl leading-8 tracking-wide ITALIC font-normal text-gray-600">
              THE TALE OF SACRED ENERGIES OF THE NILE
              </p>
              <p className="mt-6 text-lg leading-7 font-light text-gray-500">
              Our founders, Isabelle Peeters and Kristof De Spiegeleer fell in love with the Nile and envisioned creating clean, unique, and high-energy boats for people to experience its sacred energies.
              </p>
              <p className="mt-6 text-lg leading-7 font-light text-gray-500">
              Their goal is to offer a sanctuary for the body, mind, and spirit, a safe space to open yourself to new experiences, and allow these sacred energies to enter your consciousness, helping you reconnect with your true essence.
              </p>
              <p className="mt-4 text-lg leading-7 font-light text-gray-500">
              We are in unique times, marked by the energies of the Aquarian Age. As chaotic as these times may seem, they bring a shift in energies and an opportunity for transformation. The Nile is a powerful energy vortex, and we are here to help you align with its frequencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
