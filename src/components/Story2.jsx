import { SparklesIcon } from '@heroicons/react/20/solid'

const features = [
]

export default function NewFeatures2() {
  return (
    <div className="overflow-hidden bg-creme-600 pb-10 pt-0 lg:pt-10 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:order-first">
            <div className="lg:max-w-lg">
              <p className="mt-4 text-lg leading-7 font-light text-gray-500">
              Frequencies are the new currency. Our mission is to help you recognize and align with different frequencies, creating a deeply fulfilling life in tune with your soul's gifts. Self-knowledge and self-mastery are the keys to fully opening your heart. By understanding and resonating with these frequencies, you can achieve a life of harmony and fulfillment.
              </p>
              <p className="mt-4 text-lg leading-7 italic font-normal text-gray-600">
              Are you ready to step out of your comfort zone and embrace these changes? Can you let the new energies flow through you and break free from outdated programs to welcome new wisdom?
              </p>
              <p className="mt-4 text-lg leading-7 font-light text-gray-500">
              Together, let us open new gates of consciousness and expand the flow of unconditional love. The magical energy of the Nile is ready to flow through us, uniting us in a heartbeat. Home is calling you, inviting you to a journey of inner discovery and profound connection.
              </p>
              <h2 className="text-base mt-6 font-semibold leading-7 italic text-gold-600">With Love,</h2>
              <h2 className="text-base font-semibold leading-7 text-gray-700">Kristof & Isabelle</h2>
            </div>
          </div>
          <div className="flex items-start justify-end lg:justify-start lg:order-last">
              <img
              alt="New Features"
             src="/images/story2.png"
             className="w-full max-w-[35rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
             style={{ height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
