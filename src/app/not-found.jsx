import Link from 'next/link'

import { Header } from '@/components/Header'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-10rem)] items-center justify-center bg-black px-8 text-center">
        <div>
          <h1 className="font-anton uppercase leading-none text-red-600/90 text-[28vw] md:text-[12rem]">
            404
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Link
            href="/"
            className="mt-10 inline-block text-lg font-semibold uppercase tracking-[0.25em] text-red-600/90 hover:text-red-500"
          >
            Go back home
          </Link>
        </div>
      </main>
    </>
  )
}
