import { clsx } from 'clsx'

export function Heading({ as: Component = 'h1', className, children, ...props }) {
  return (
    <Component
      className={clsx(
        'text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export function Subheading({ className, children, ...props }) {
  return (
    <h3
      className={clsx(
        'text-lg font-medium text-gray-900',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}
