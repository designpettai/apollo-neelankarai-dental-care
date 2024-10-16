import Link from 'next/link'
import clsx from 'clsx'

type InputProps =
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'input'> & { href?: undefined })

export function Input({ className, ...props }: InputProps) {
  className = clsx(
    'input class="w-full h-[48px] rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-gray-400 active:text-gray-700',
className,  
  )

  return typeof props.href === 'undefined' ? (
    <input className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
