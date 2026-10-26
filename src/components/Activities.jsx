import act1 from '@/images/act1.png'
import act2 from '@/images/act2.png'
import act3 from '@/images/act3.png'


const posts = [
    {
      id: 1,
      title: 'Yoga',
      href: '#',
      description:
        'Step fully into your body. The perfect start to the morning.',
      image:
        'images/act1.png',
    },
    {
        id: 2,
        title: 'Meditation',
        href: '#',
        description:
          'Open your mind, enter a  deeper state of awareness.',
        image:
          'images/act3.png',
        },
      {
        id: 3,
        title: 'Nutrition',
        href: '#',
        description:
          'Gluten-free, vegetarian, vegan, detox diets, & more.',
        image:
          'images/act2.png',
      },
  ]
  
  
  export default function activities() {
    return (
      <div className="bg-creme-200 py-12 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mt-2 text-lg leading-8 text-gray-600 italic font-semibold">
            Mind, Body, and Soul: For a Deeper Connection.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate shadow-xl flex flex-col justify-end overflow-hidden rounded-lg bg-gray-900 px-8 pb-8 pt-60 sm:pt-48 lg:pt-60"
              >
                <img alt="" src={post.image} className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-lg ring-1 ring-inset ring-gray-900/10" />
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div className="-ml-4 flex items-center gap-x-4">
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-base font-medium leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.description}
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  