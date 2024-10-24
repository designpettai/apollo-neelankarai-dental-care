import Image from 'next/image';
import clsx from 'clsx';
import LogoSrc from '@/images/apollo-logo.jpg'; 

interface LogoProps {
  className?: string;
  position?: 'left' | 'right';
}

export const Logo = ({ className, position = 'left' }: LogoProps) => {
  return (
    <div className={clsx(className)}>
      <Image
        className={clsx(
          position === 'left' ? 'left-image-class' : 'right-image-class',
          'h-16 w-auto'
        )}
        src={LogoSrc}
        alt="Apollo Dental Logo"
        priority
        unoptimized
      />
    </div>
  );
};
