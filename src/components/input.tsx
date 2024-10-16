import React from 'react'
import clsx from 'clsx'

type InputProps = React.ComponentPropsWithoutRef<'input'> | React.ComponentPropsWithoutRef<'textarea'> & {
  as?: 'input' | 'textarea'; // Optional 'as' prop to switch between input and textarea
}

export function Input({ className, as = 'input', ...props }: InputProps) {
  className = clsx(
    'w-full h-[48px] rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 active:text-gray-700',
    className,
  )

  if (as === 'textarea') {
    return <textarea className={className} {...props} />
  }

  return <input className={className} {...props} />
}
