import Image from 'next/image'
import clsx from 'clsx'

import logoImage from '@/images/apollo-logo.jpg'

export function Logo({
  className,
  position = 'left',
}: {
  className?: string
  position?: 'left' | 'right'
}) {
  return (
    <div
      className={clsx(
        'relative w-full h-full', // Define container size
        className,
      )}
    >
      <Image
        src={logoImage}
        alt="Apollo Logo"
        width={185} // Set the desired width
        height={118} // Set the desired height
        priority
        unoptimized
      />
    </div>
  )
}
