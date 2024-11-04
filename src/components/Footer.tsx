import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">

        <div className="flex flex-col items-center md:items-start">
          <Logo className="h-12 w-auto mb-6" />
          <p className="text-lg text-center md:text-left">Contact Us:</p>
          <div className="flex items-center space-x-4 mt-2">
            <a
              href="tel:+919360901090"
              className="flex items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <FaPhoneAlt size={24} className="text-gray-600" />
            </a>
            <a
              href="https://wa.me/919360901090"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-full bg-green-200 hover:bg-green-300 transition"
            >
              <FaWhatsapp size={24} className="text-green-600" />
            </a>
            <a
              href="mailto:apollodentalpadur@gmail.com"
              className="flex items-center justify-center p-2 rounded-full bg-blue-200 hover:bg-blue-300 transition"
            >
              <FaEnvelope size={24} className="text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com/apollodentalomr/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-full bg-pink-200 hover:bg-pink-300 transition"
            >
              <FaInstagram size={24} className="text-pink-600" />
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2">
          <h2 className="text-2xl font-semibold text-center md:text-left">Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62248.99771485371!2d80.22503!3d12.806895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525196b51eb6f7%3A0x864b1dd15f681180!2sApollo%20Dental%20Clinic%20OMR%20Padur%20%7C%20Invisalign%20Provider%20%7C%20Best%20Dental%20Clinic%20in%20OMR%20%7C%20Dental%20Laser%20%26%20Implant%20Center!5e0!3m2!1sen!2sin!4v1730729486810!5m2!1sen!2sin"
            width="100%"
            height="200"
            className="mt-4 rounded"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
      <div className="mt-12 text-center text-sm text-gray-800">
        Copyright &copy; {new Date().getFullYear()} Apollo Dental Care Limited, All Rights Reserved. Designed by "Design Petai".
      </div>
    </footer>
  )
}
