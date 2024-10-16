import React from 'react'
import clsx from 'clsx'

// Define the InputProps type using a discriminated union
type InputProps = {
  as?: 'input' | 'textarea'; // Optional 'as' prop to switch between input and textarea
} & (
  | React.InputHTMLAttributes<HTMLInputElement> // Props for 'input'
  | React.TextareaHTMLAttributes<HTMLTextAreaElement> // Props for 'textarea'
);

export function Input({ className, as = 'input', ...props }: InputProps) {
  // Combine the default className with any additional classes passed through props
  className = clsx(
    'w-full h-[48px] rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 active:text-gray-700',
    className,
  )

  // Render a textarea element if 'as' is 'textarea'
  if (as === 'textarea') {
    return <textarea className={className} {...props} />
  }

  // Render an input element (default case)
  return <input className={className} {...props} />
}
