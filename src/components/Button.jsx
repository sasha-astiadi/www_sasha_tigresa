import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
      'bg-gold-900 text-white hover:bg-gold-800 hover:text-slate-100 active:bg-gold-800 active:text-gold-300 focus-visible:outline-gold-900',
    blue: 'bg-gold-600 text-white hover:text-slate-100 hover:bg-gold-500 active:bg-gold-800 active:text-slate-100 focus-visible:outline-gold-600',
    white:
      'bg-white text-slate-100 hover:bg-gold-50 active:bg-gold-200 active:text-slate-100 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-200 hover:text-slate-300 hover:ring-slate-300 active:bg-slate-100 active:text-slate-200 focus-visible:outline-gold-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-300 active:ring-slate-200 active:text-slate-100 focus-visible:outline-white',
  },
}

export function Button({ className, ...props }) {
  props.variant ??= 'solid'
  props.color ??= 'slate'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
