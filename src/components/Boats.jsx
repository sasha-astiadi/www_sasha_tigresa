import { useId } from 'react';
import Image from 'next/image';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import veda1 from '@/images/dahabiyas/veda1.jpg';
import veda2 from '@/images/dahabiyas/veda2.jpg';
import veda3 from '@/images/dahabiyas/veda3.jpg';
import veda4 from '@/images/dahabiyas/veda4.jpg';

const people = [
    {
        name: 'VEDA I',
        role: 'The ideal retreat for luxury and privacy, perfect for intimate gatherings.',
        image: veda1,
        bio: [
            '6 rooms & 4 suites with balconies.',
            'Hosts up to 20 people.',
            'Private bathroom ensuites.'
        ],
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'VEDA II',
        role: 'The perfect spacious space for larger groups seeking comfort',
        image: veda2,
        bio: [
            '8 rooms & 2 suites with balconies.',
            'Hosts up to 20 people.',
            'Private bathroom ensuites.'
        ],
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'VEDA III',
        role: 'Senior Developer',
        image: veda3,
        bio: [
            '5 rooms with balconies.',
            'Hosts up to 10 people.',
            'Private bathroom ensuites.'
        ],
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'VEDA IV',
        role: 'Senior Developer',
        image: veda4,
        bio: [
            '10 rooms & 4 suites with balconies.',
            'Hosts up to 28 people.',
            'Private bathroom ensuites.'
        ],
        xUrl: '#',
        linkedinUrl: '#',
    },
    // More people...
];

export default function Boats() {
    return (
        <div className="bg-creme-600 py-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">Our team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                        best results for our clients.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="relative aspect-[3/2] w-full rounded-lg overflow-hidden">
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-800">{person.name}</h3>
                            <ul className="mt-4 text-base leading-7 text-gray-600 list-disc pl-5 space-y-1">
                                {person.bio.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
