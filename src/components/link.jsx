import NextLink from 'next/link'
import { clsx } from 'clsx'

export function Link({ href, className, children, ...props }) {
  return (
    <NextLink
      href={href}
      className={clsx(className)}
      {...props}
    >
      {children}
    </NextLink>
  )
}
