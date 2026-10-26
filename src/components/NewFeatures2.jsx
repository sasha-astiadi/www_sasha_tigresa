import { SparklesIcon } from '@heroicons/react/20/solid'
import Newfeaturesimg from '@/images/newfeatures3.png'

const features = [
  {
    name: 'Eco-Friendly & Organic.',
    description:
      "Enjoy the finest local cuisine, fresh juices, and detox smoothies while supporting environmental responsibility. With natural cleaning products and solar-powered boats, VEDA offers a sophisticated, eco-friendly journey on the Nile.",
    icon: SparklesIcon,
  },
  {
    name: 'Nurture Your Mind, Body, and Spirit',
    description:
      "Participate in yoga, breathwork, meditation, and wellness workshops in serene surroundings. Our holistic approach ensures your journey is enriching and rejuvenating, leaving you with a sense of balance and inner peace.",
    icon: SparklesIcon,
  },
  {
    name: 'Immersive Cultural Experiences',
    description:
      "Explore the wonders of ancient Egypt with exclusive guided tours and in-depth cultural experiences. Gain unique insights into Egypt’s rich history and traditions, deepening your understanding of this timeless civilization.",
    icon: SparklesIcon,
  },
]

export default function NewFeatures2() {
  return (
    <div className="overflow-hidden bg-creme-600 pb-10 pt-0 lg:pt-10 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:order-first">
            <div className="lg:max-w-lg">
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
          <div className="flex items-start justify-end lg:justify-start lg:order-last">
              <img
              alt="New Features"
             src="/images/newfeatures0.png"
             className="w-full max-w-[35rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
             style={{ height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
