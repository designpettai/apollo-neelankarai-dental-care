import Image from 'next/image';
import clsx from 'clsx';
import LogoSrc from '@/images/Dp-logo.jpg'; 

interface LogoProps {
  className?: string;
  position?: 'left' | 'right';
}

export const DpLogo = ({ className, position = 'left' }: LogoProps) => {
  return (
    <div className={clsx(className)}>
      <Image
        className={clsx(
          position === 'left' ? 'left-image-class' : 'right-image-class',
          'h-8 w-auto'
        )}
        src={LogoSrc}
        alt="DesignPetai Logo"
        priority
        unoptimized
      />
    </div>
  );
};
