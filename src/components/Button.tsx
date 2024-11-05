import Link from 'next/link';
import clsx from 'clsx';

type ButtonProps =
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined });

export function Button({ className, ...props }: ButtonProps) {

  const baseClass = clsx(
    'inline-flex justify-center rounded-[8px] p-4 text-base font-semibold text-white',
    className,
  );

  const buttonClass = clsx(baseClass, 'bg-gradient-to-br from-[#007BA2] to-[#0E424C]');

  return typeof props.href === 'undefined' ? (
    <button className={buttonClass} {...props} />
  ) : (
    <Link className={baseClass} {...props} />
  );
}
