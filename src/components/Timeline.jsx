/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const features = [
    {
      name: 'Day 1: Luxor',
      description:
        "Welcome to Luxor, often referred to as the world's greatest open-air museum.Begin your journey by exploring the city's rich history and captivating landmarks.",
        description2:
        "Visit the magnificent Karnak Temple, one of the largest religious complexes in the world, and marvel at its towering columns and intricate hieroglyphs. Then, head to the Luxor Temple, a stunning example of ancient Egyptian architecture.",
        description3:
        "In the evening, enjoy a traditional Egyptian dinner on our Dahabiya, followed by a relaxing evening under the stars.",
        imageSrc: '/images/luxor.jpg',
    },
    {
        name: 'Day 2: Sailing to Esna',
        description:
          "Set sail on the serene waters of the Nile, as we journey towards the charming town of Esna.",
          description2:
          "As the dahabiya glides through the tranquil river, take in the breathtaking views of the lush landscapes and ancient monuments that line the banks. Enjoy a relaxing day on deck, with opportunities to participate in yoga and meditation sessions, or simply unwind with a good book from our library.",
          description3:
          "In the evening, dock at Esna and explore the local markets, where you can discover unique handicrafts and interact with friendly locals.",
          imageSrc: 'images/esna.jpg',
      },
      {
        name: 'Day 3: Crossing the Esna Lock',
        description:
          "Experience the fascinating process of crossing the Esna Lock, a marvel of engineering that allows vessels to navigate the varying water levels of the Nile.",
          description2:
          "Witness the skilled operation of the lock as the dahabiya is raised or lowered to continue its journey upstream. This unique experience offers a glimpse into the intricate workings of river navigation and provides an excellent opportunity for photography.",
          description3:
          "After crossing the lock, continue sailing towards Edfu, enjoying the serene ambiance and scenic vistas along the way.",
          imageSrc: '/images/lock.jpg',
      },
      {
        name: 'Day 4: Edfu',
        description:
          "Arrive in Edfu, home to one of Egypt's best-preserved temples dedicated to the falcon god Horus.",
          description2:
          "Explore the impressive Temple of Edfu, with its massive pylons, detailed reliefs, and captivating myths depicted on its walls. Discover the fascinating stories of ancient Egyptian deities and their significance in the culture and religion of the time.",
          description3:
          "After the temple visit, return to the dahabiya for a leisurely afternoon sail, with opportunities for relaxation and rejuvenation on board.",
          imageSrc: '/images/edfu.jpg',
      },
      {
        name: 'Day 5: Silsila',
        description:
          "Together we will visit the historic site of Gebel el-Silsila, known for its ancient sandstone quarries.",
          description2:
          "Explore the remnants of temples, shrines, and inscriptions that reveal the area's significance as a source of building materials for many of Egypt's monumental structures. Gain insight into the craftsmanship and artistry of the ancient Egyptians as you wander through this unique archaeological site.",
          description3:
          "In the evening, continue our journey along the Nile, soaking in the tranquil beauty of the river.",
          imageSrc: '/images/silsila.jpg',
      },
      {
        name: 'Day 6: Kom Ombo',
        description:
          "Our journey brings us to Kom Ombo, a unique temple dedicated to two gods: Sobek, the crocodile god, and Horus the Elder, the falcon-headed god.",
          description2:
          "Explore the symmetrical design of the temple, with its dual sanctuaries and fascinating reliefs depicting medical instruments, surgical scenes, and ancient calendars. Don't miss the nearby Crocodile Museum, where you can view mummified crocodiles and learn about the sacred role of these creatures in ancient Egyptian culture.",
          description3:
          "Return to the dahabiya for a relaxing evening as we sail towards Aswan.",
          imageSrc: '/images/komombo.jpg',
      },
      {
        name: 'Day 7: Aswan',
        description:
          "We will conclude our journey in the picturesque city of Aswan, known for its stunning landscapes and rich cultural heritage.",
          description2:
          "Visit the majestic Philae Temple, dedicated to the goddess Isis, and marvel at its beautiful island setting. Explore the bustling Aswan market, where you can shop for spices, jewelry, and local crafts. In the afternoon, take a peaceful felucca ride around Elephantine Island and enjoy the gentle breeze and scenic views.",
          description3:
          "As the day draws to a close, gather for a farewell dinner on board, celebrating the unforgettable experiences and memories created during the VEDA Retreat.",
          imageSrc: '/images/aswan.jpg',
      },

  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Example() {
    return (
      <div className="bg-creme-600">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">VEDA ITINERARY SAMPLE</h2>
            <p className="mt-4 text-gray-500">
            Experience the magic of the Nile with our thoughtfully crafted 5-day VEDA Retreat itinerary. This sample journey showcases the highlights of a typical retreat, offering a blend of cultural exploration, relaxation, and rejuvenation. Each day is designed to provide a unique and enriching experience, from exploring ancient temples and charming towns to enjoying serene river cruises and immersive wellness activities. Whether you're seeking adventure or tranquility, this itinerary gives you a glimpse into the unforgettable experiences that await on your VEDA Retreat.
            </p>
          </div>
  
          <div className="mt-16 space-y-16">
            {features.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                    'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4',
                  )}
                >
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                  <p className="mt-2 text-sm text-gray-500">{feature.description2}</p>
                  <p className="mt-2 text-sm text-gray-500">{feature.description3}</p>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                    'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8',
                  )}
                >
                  <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                    <img alt={feature.imageAlt} src={feature.imageSrc} className="object-cover object-center" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  