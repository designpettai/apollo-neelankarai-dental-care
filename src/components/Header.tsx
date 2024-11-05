'use client';

import { useState } from 'react';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, PhoneIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <Container className="flex flex-wrap items-center justify-between lg:flex-nowrap">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          <div className="my-4 lg:mt-0 lg:grow lg:basis-0">
            <Logo className="h-12 w-auto text-slate-900" />
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <div className="text-left">
              <p className="text-gray-500 text-sm uppercase">Opening Hours</p>
              <p className="font-semibold text-black">Monday - Sunday | 10:00 AM to 8:00 PM</p>
            </div>
            <div className="text-left">
              <p className="text-gray-500 text-sm uppercase">Call us</p>
              <p className="font-semibold text-black">+91 9360901090</p>
            </div>
            <div className="flex space-x-4">
              <Button
                className="p-2 rounded-full bg-blue-600 text-white"
                onClick={() => window.location.href = "tel:9360901090"}
              >
                <ChatBubbleLeftIcon className="h-5 w-5" />
              </Button>
              <Button
                className="p-2 rounded-full bg-blue-600 text-white"
                onClick={() => window.location.href = "tel:9360901090"}
              >
                <PhoneIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex lg:hidden">
            <Button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <Bars3Icon className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <Dialog open={isMenuOpen} onClose={closeMenu} className="lg:hidden">
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu}></div>
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-12">
            <div className="flex items-center justify-between">
              <Logo className="h-12 w-auto text-slate-900" />
              <Button onClick={closeMenu} className="text-gray-600">
                <XMarkIcon className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-8 space-y-6 text-left">
              <div>
                <p className="text-gray-500 text-sm uppercase">Opening Hours</p>
                <p className="font-semibold text-black">Monday - Sunday | 10:00 AM to 8:00 PM</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase">Call us</p>
                <p className="font-semibold text-black">+91 9360901090</p>
              </div>
              <div className="flex justify-center space-x-6">
                <Button
                  className="p-2 rounded-full bg-blue-600 text-white"
                  onClick={() => window.location.href = "tel:9360901090"}
                >
                  <ChatBubbleLeftIcon className="h-5 w-5" />
                </Button>
                <Button
                  className="p-2 rounded-full bg-blue-600 text-white"
                  onClick={() => window.location.href = "tel:9360901090"}
                >
                  <PhoneIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </Container>
    </header>
  );
}
