import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>
        <div className="flex flex-col items-center text-right">
          <div className="mb-2 border-b border-[#333] py-4">
            <div className="flex items-center text-gray-900 mb-2">
              <MdEmail className="mr-2 text-2xl" /> Email: apollodentalsuchitra@gmail.com
            </div>
            <div className="flex items-center text-lg text-blue-600">
              <MdLocationOn className="mr-2 text-2xl" /> Find Location
            </div>
          </div>
          <div className="flex items-center align-center mb-2">
            <div className="flex items-center justify-center h-16 w-16 bg-blue-500 rounded-full mr-2">
              <MdPhone className="text-white text-2xl" />
            </div>
            <div className="flex flex-col items-center text-md font-semibold">
              <span>Emergency? Call us!</span>
              <span className="text-red-500">90003-38933</span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
