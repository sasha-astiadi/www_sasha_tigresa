import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, SparklesIcon } from '@heroicons/react/20/solid'
import Newfeaturesimg from '@/images/newfeatures0.png'

const features = [
  {
    name: 'Your journey, your way.',
    description:
      "Create a travel experience that suits you perfectly, from the length of your stay to a tailored itinerary. Our expert guidance ensures every detail, from daily activities to dining options, aligns with your vision for a bespoke adventure.",
    icon: SparklesIcon,
  },
  {
    name: 'Experience the extraordinary.',
    description:
      "Engage in exclusive activities like private barbecues on pristine islands or moments in ancient temples. Our VEDA crew will guide you to the Nile’s most stunning locations, tailored to your interests for an unforgettable experience.",
    icon: SparklesIcon,
  },
]

export default function NewFeatures() {
  return (
    <div className="overflow-hidden bg-creme-600 pb-0 pt-12 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="flex items-start justify-end lg:justify-start lg:order-first">
          <img
             alt="New Features"
              src="images/newfeatures3.png"
            className="w-full max-w-[40rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
            style={{ maxWidth: '40rem', height: 'auto' }}
          />
        </div>
          <div className="lg:ml-auto lg:pl-4 lg:pt-0">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-gold-600">WHAT SETS US APART</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">VEDA EXPERIENCES</p>
              <p className="mt-4 text-lg leading-8 font-normal text-gray-600">
                At VEDA, we embrace a transformative journey by aligning with your personal preferences and holistic experiences. Our mission is to offer profound and memorable moments that inspire and uplift, guiding you on a journey within.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-800">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-gold-300" />
                      {feature.name}
                    </dt>{' '}
                    <dd className='font-display'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
