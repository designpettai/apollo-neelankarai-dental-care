import Link from 'next/link';
import clsx from 'clsx';

type ButtonProps =
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined });

export function Button({ className, ...props }: ButtonProps) {
  // Define the base styles
  const baseClass = clsx(
    'inline-flex justify-center rounded-[8px] p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70',
    className,
  );

  // Apply gradient background if it's a button, not a Link
  const buttonClass = clsx(baseClass, 'bg-gradient-to-br from-[#007BA2] to-[#0E424C]');

  // Return either a button or a Link
  return typeof props.href === 'undefined' ? (
    <button className={buttonClass} {...props} />
  ) : (
    <Link className={baseClass} {...props} />
  );
}
