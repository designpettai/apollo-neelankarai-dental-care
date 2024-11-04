'use client';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: 'About Us', href: '#about' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Dental Clinics', href: '#clinics' },
    { name: 'Find a Dentist', href: '#find' },
  ];

  return (
    <header className="relative z-50 flex-none py-8 lg:py-11">
      <Container className="flex flex-wrap items-center justify-between lg:flex-nowrap">
        <div className="my-4 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>

        <div className="hidden md:flex md:space-x-8">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-900">
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </Container>

      <Dialog open={isMenuOpen} onClose={closeMenu} className="md:hidden">
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu}></div>
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-white px-4 py-12">
          <div className="flex items-center justify-between">
            <Logo className="h-8 w-auto text-slate-900" />
            <button onClick={closeMenu} className="text-gray-600">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-12 space-y-2 text-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
