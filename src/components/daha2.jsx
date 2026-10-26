import { Container } from '@/components/Container';
import veda1 from '@/images/veda1.jpg';
import veda2 from '@/images/veda2.jpg';
import veda3 from '@/images/veda3.jpg';
import veda4 from '@/images/veda4.jpg';

const categories = [
  {
    name: 'VEDA I',
    href: '#',
    image: '/images/veda1.jpg',
    imageAlt: 'veda1',
    description: 'The ideal retreat for space and privacy, perfect for intimate gatherings.',
  },
  {
    name: 'VEDA II',
    href: '#',
    image: '/images/veda2.jpg',
    imageAlt: 'veda2',
    description: 'The perfect blend of spaciousness and privacy, great for larger groups seeking comfort.',
  },
  {
    name: 'VEDA III',
    href: '#',
    image: '/images/veda3.jpg',
    imageAlt: 'veda3',
    description: ' An ideal choice for those valuing privacy and intimacy in a cozy setting.',
  },
  {
    name: 'VEDA IV',
    href: '#',
    image: '/images/veda4.jpg',
    imageAlt: 'veda4.',
    description: 'Spacious and private, this option accommodates larger gatherings with ease.',
  },
]

export default function Example() {
  return (
    <div className="bg-creme-600">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">DAHABIYAS</h2>
        <p className="mt-4 text-base text-gray-500">
        Choose from our selection of four dahabiyas, each designed to provide a unique and soulful journey.
        </p>

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-y-0">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="group block">
              <div
                aria-hidden="true"
                className="aspect-h-2 aspect-w-3 overflow-hidden rounded-sm lg:aspect-h-9 lg:aspect-w-16 group-hover:opacity-75"
              >
                <img
                  alt={category.imageAlt}
                  src={category.image}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
