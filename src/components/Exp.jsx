const features = [
    { name: 'Mind and Body Practices', description: 'Activities that enhance physical well-being and mental clarity through mindful movement and meditation.', image: '/images/activities/mind.jpg' },
    { name: 'Healing and Wellness Therapies', description: 'Therapeutic activities designed to promote relaxation, rejuvenation, and overall well-being.', image: '/images/activities/healing.jpg' },
    { name: 'Holistic Health and Nutrition', description: 'Programs focused on nourishing the body and promoting health through mindful eating and natural remedies.', image: '/images/activities/holistic.jpg' },
    { name: 'Creative and Expressive Workshops', description: 'Opportunities for self-expression and exploration through artistic and creative endeavors.', image: '/images/activities/creative.jpg' },
    { name: 'Relaxation and Reflection', description: 'Activities that encourage rest, introspection, and a deeper connection with oneself and the natural world.', image: '/images/activities/relax.jpg' },
    { name: 'Entertainment and Performance Arts', description: 'Experiences that offer enjoyment and inspiration through music, dance, and captivating performances.', image: '/images/activities/entertain.jpg' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-creme-600">
        <div className="mt-24 relative mx-auto  max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">VEDA EXPERIENCES</h2>
            <p className="mt-4 text-gray-900">
              Join us for transformative journeys of wellness, creativity, and connection on the tranquil and sacred Nile.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <img
                  src={feature.image}
                  alt={feature.name}
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  