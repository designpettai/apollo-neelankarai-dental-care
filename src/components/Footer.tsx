'use client';

import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { DpLogo } from '@/components/dp-logo';
import { Container } from '@/components/Container';



export function Footer() {
  return (
    <footer className="py-10">
      <Container>
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between md:space-y-0 space-y-10">
          <div className="flex flex-col items-center md:items-start">
            <Logo className="h-12 w-auto text-slate-900 mb-4" />
            <p className="text-lg font-semibold mb-2">Contact us</p>
            <div className="flex space-x-4">
              <Button
                className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition"
                onClick={() => window.location.href = "tel:+919360901090"}
                aria-label="Phone"
              >
                <FaPhoneAlt size={20} />
              </Button>
              <Button
                className="p-3 rounded-full bg-green-500 hover:bg-green-600 transition"
                onClick={() => window.open("https://wa.me/919360901090", "_blank")}
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </Button>
              <Button
                className="p-3 rounded-full bg-blue-400 hover:bg-blue-500 transition"
                onClick={() => window.location.href = "mailto:apollodentalpadur@gmail.com"}
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </Button>
              <Button
                className="p-3 rounded-full bg-pink-500 hover:bg-pink-600 transition"
                onClick={() => window.open("https://www.instagram.com/apollodentalomr/?hl=en", "_blank")}
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold text-center md:text-left mb-4">Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62248.99771485371!2d80.22503!3d12.806895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525196b51eb6f7%3A0x864b1dd15f681180!2sApollo%20Dental%20Clinic%20OMR%20Padur%20%7C%20Invisalign%20Provider%20%7C%20Best%20Dental%20Clinic%20in%20OMR%20%7C%20Dental%20Laser%20%26%20Implant%20Center!5e0!3m2!1sen!2sin!4v1730729486810!5m2!1sen!2sin"
              width="100%"
              height="200"
              className="rounded"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Apollo Dental Clinic Location"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500 flex justify-between">
          <div>
            <div className="flex items-center mb-2">
              <p className="mr-2">Designed with <span className="text-red-500">❤</span> by</p>
              <span className="font-semibold">Apollo Dental Care</span>
            </div>
            <div className="flex items-center">
              <DpLogo className="h-12 w-[120px] text-slate-900" />
            </div>
          </div>
          <div>
            <p className="text-right mt-4">
              &copy; {new Date().getFullYear()} Apollo Dental Care Limited, All Rights Reserved.
            </p>
          </div>


        </div>

      </Container>
    </footer>
  );
}
