import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-red-600/90 transition-colors duration-300 hover:text-red-500"
    >
      {children}
    </Link>
  )
}
