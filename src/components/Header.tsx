// 'use client';

// import { useState } from 'react';
// import { Container } from '@/components/Container';
// import { Logo } from '@/components/Logo';
// import { Dialog, DialogPanel } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon, PhoneIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
// import { Button } from '@/components/Button';

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="bg-white shadow-md py-4">
//       <Container className="flex flex-wrap items-center justify-between lg:flex-nowrap">
//         <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
//           <div className="my-4 lg:mt-0 lg:grow lg:basis-0">
//             <Logo className="h-12 w-auto text-slate-900" />
//           </div>

//           <div className="hidden lg:flex lg:items-center lg:space-x-8">
//             <div className="text-left">
//               <p className="text-gray-500 text-sm uppercase">Opening Hours</p>
//               <p className="font-semibold text-black">Monday - Sunday | 10:00 AM to 8:00 PM</p>
//             </div>
//             <div className="text-left">
//               <p className="text-gray-500 text-sm uppercase">Call us</p>
//               <p className="font-semibold text-black">+91 9360901090</p>
//             </div>
//             <div className="flex space-x-4">
//               <Button
//                 className="p-2 rounded-full bg-blue-600 text-white"
//                 onClick={() => window.location.href = "tel:9360901090"}
//               >
//                 <ChatBubbleLeftIcon className="h-5 w-5" />
//               </Button>
//               <Button
//                 className="p-2 rounded-full bg-blue-600 text-white"
//                 onClick={() => window.location.href = "tel:9360901090"}
//               >
//                 <PhoneIcon className="h-5 w-5" />
//               </Button>
//             </div>
//           </div>

//           <div className="flex lg:hidden">
//             <Button
//               onClick={toggleMenu}
//               className="text-gray-600 hover:text-gray-900 focus:outline-none"
//             >
//               <Bars3Icon className="w-6 h-6" />
//             </Button>
//           </div>
//         </div>

//         <Dialog open={isMenuOpen} onClose={closeMenu} className="lg:hidden">
//           <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu}></div>
//           <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-12">
//             <div className="flex items-center justify-between">
//               <Logo className="h-12 w-auto text-slate-900" />
//               <Button onClick={closeMenu} className="text-gray-600">
//                 <XMarkIcon className="h-6 w-6" />
//               </Button>
//             </div>
//             <div className="mt-8 space-y-6 text-left">
//               <div>
//                 <p className="text-gray-500 text-sm uppercase">Opening Hours</p>
//                 <p className="font-semibold text-black">Monday - Sunday | 10:00 AM to 8:00 PM</p>
//               </div>
//               <div>
//                 <p className="text-gray-500 text-sm uppercase">Call us</p>
//                 <p className="font-semibold text-black">+91 9360901090</p>
//               </div>
//               <div className="flex justify-center space-x-6">
//                 <Button
//                   className="p-2 rounded-full bg-blue-600 text-white"
//                   onClick={() => window.location.href = "tel:9360901090"}
//                 >
//                   <ChatBubbleLeftIcon className="h-5 w-5" />
//                 </Button>
//                 <Button
//                   className="p-2 rounded-full bg-blue-600 text-white"
//                   onClick={() => window.location.href = "tel:9360901090"}
//                 >
//                   <PhoneIcon className="h-5 w-5" />
//                 </Button>
//               </div>
//             </div>
//           </DialogPanel>
//         </Dialog>
//       </Container>
//     </header>
//   );
// }

'use client';


import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { PhoneIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/Button';

export function Header() {
  const handleClick = () => {
    window.location.href = 'https://www.google.com/maps?q=12.806895,80.22503';
  };
  return (
    <header className="bg-white shadow-md py-4">
      <Container className="px-4 lg:px-8">
        <div className="container mx-auto w-full lg:w-auto lg:flex lg:items-center lg:justify-between">

          <div className="my-4 lg:mt-0 lg:grow lg:basis-0 mb-8 lg:mb-4 ">
            <Logo className="h-12 w-auto text-slate-900 flex items-center justify-center md:items-start md:justify-start" />
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
                className="rounded-full"
                onClick={() => window.location.href = "tel:+919360901090"}
                aria-label="Phone"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.25 2.75C0.25 2.08696 0.513392 1.45107 0.982233 0.982233C1.45107 0.513392 2.08696 0.25 2.75 0.25H3.89333C4.61 0.25 5.235 0.738333 5.40917 1.43333L6.33 5.11917C6.40462 5.4175 6.38955 5.73122 6.28667 6.02102C6.18379 6.31082 5.99769 6.56383 5.75167 6.74833L4.67417 7.55667C4.56167 7.64083 4.5375 7.76417 4.56917 7.85C5.03948 9.12904 5.78216 10.2906 6.74579 11.2542C7.70941 12.2178 8.87096 12.9605 10.15 13.4308C10.2358 13.4625 10.3583 13.4383 10.4433 13.3258L11.2517 12.2483C11.4362 12.0023 11.6892 11.8162 11.979 11.7133C12.2688 11.6105 12.5825 11.5954 12.8808 11.67L16.5667 12.5908C17.2617 12.765 17.75 13.39 17.75 14.1075V15.25C17.75 15.913 17.4866 16.5489 17.0178 17.0178C16.5489 17.4866 15.913 17.75 15.25 17.75H13.375C6.12667 17.75 0.25 11.8733 0.25 4.625V2.75Z"
                    fill="white"
                  />
                </svg>
              </Button>
              <Button
                className="rounded-full"
                onClick={() => window.open("https://wa.me/919360901090", "_blank")}
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.9852 16.9453C18.696 17.764 17.5464 18.4412 16.6296 18.6393C16.002 18.7725 15.1836 18.8779 12.426 17.7352C9.3288 16.452 5.028 11.8812 5.028 8.83945C5.028 7.29099 5.9208 5.48789 7.482 5.48789C8.2332 5.48789 8.3988 5.50254 8.646 6.09551C8.9352 6.79412 9.64081 8.51535 9.7248 8.6918C10.0716 9.41561 9.37199 9.83934 8.86439 10.4695C8.70239 10.6592 8.51881 10.8643 8.72401 11.2172C8.92801 11.5629 9.6336 12.7129 10.6704 13.6359C12.0096 14.8291 13.0956 15.21 13.4844 15.3721C13.7736 15.4921 14.1192 15.4641 14.3304 15.2385C14.598 14.9492 14.9304 14.4692 15.2688 13.9963C15.5076 13.6578 15.8112 13.6155 16.1292 13.7355C16.344 13.81 19.074 15.0778 19.1892 15.2807C19.2744 15.4283 19.2744 16.1267 18.9852 16.9453ZM12.0024 0H11.9964C5.38079 0 0 5.38242 0 12C0 14.624 0.846008 17.0584 2.28481 19.033L0.789606 23.492L5.40121 22.0184C7.29841 23.2739 9.5628 24 12.0024 24C18.618 24 24 18.6176 24 12C24 5.38242 18.618 0 12.0024 0Z"
                    fill="white"
                  />
                </svg>
              </Button>
              <Button
                className="rounded-full"
                onClick={handleClick}
                aria-label="Location"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
              <Button
                className="rounded-full"
                onClick={() => window.open("https://www.instagram.com/apollodentalomr/?hl=en", "_blank")}
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.2 0C3.22355 0 0 3.22355 0 7.2V16.8C0 20.7765 3.22355 24 7.2 24H16.8C20.7765 24 24 20.7765 24 16.8V7.2C24 3.22355 20.7765 0 16.8 0H7.2ZM6.4 12C6.4 8.9072 8.9072 6.4 12 6.4C15.0928 6.4 17.6 8.9072 17.6 12C17.6 15.0928 15.0928 17.6 12 17.6C8.9072 17.6 6.4 15.0928 6.4 12ZM17.6 6.4H19.2V4.8H17.6V6.4Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="lg:hidden flex flex-col items-start mt-4 space-y-4 w-full">
            <div className="flex space-x-4 items-center justify-center w-full mb-2">
              <Button
                className="rounded-full"
                onClick={() => window.location.href = "tel:+919360901090"}
                aria-label="Phone"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.25 2.75C0.25 2.08696 0.513392 1.45107 0.982233 0.982233C1.45107 0.513392 2.08696 0.25 2.75 0.25H3.89333C4.61 0.25 5.235 0.738333 5.40917 1.43333L6.33 5.11917C6.40462 5.4175 6.38955 5.73122 6.28667 6.02102C6.18379 6.31082 5.99769 6.56383 5.75167 6.74833L4.67417 7.55667C4.56167 7.64083 4.5375 7.76417 4.56917 7.85C5.03948 9.12904 5.78216 10.2906 6.74579 11.2542C7.70941 12.2178 8.87096 12.9605 10.15 13.4308C10.2358 13.4625 10.3583 13.4383 10.4433 13.3258L11.2517 12.2483C11.4362 12.0023 11.6892 11.8162 11.979 11.7133C12.2688 11.6105 12.5825 11.5954 12.8808 11.67L16.5667 12.5908C17.2617 12.765 17.75 13.39 17.75 14.1075V15.25C17.75 15.913 17.4866 16.5489 17.0178 17.0178C16.5489 17.4866 15.913 17.75 15.25 17.75H13.375C6.12667 17.75 0.25 11.8733 0.25 4.625V2.75Z"
                    fill="white"
                  />
                </svg>
              </Button>
              <Button
                className="rounded-full"
                onClick={() => window.open("https://wa.me/919360901090", "_blank")}
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.9852 16.9453C18.696 17.764 17.5464 18.4412 16.6296 18.6393C16.002 18.7725 15.1836 18.8779 12.426 17.7352C9.3288 16.452 5.028 11.8812 5.028 8.83945C5.028 7.29099 5.9208 5.48789 7.482 5.48789C8.2332 5.48789 8.3988 5.50254 8.646 6.09551C8.9352 6.79412 9.64081 8.51535 9.7248 8.6918C10.0716 9.41561 9.37199 9.83934 8.86439 10.4695C8.70239 10.6592 8.51881 10.8643 8.72401 11.2172C8.92801 11.5629 9.6336 12.7129 10.6704 13.6359C12.0096 14.8291 13.0956 15.21 13.4844 15.3721C13.7736 15.4921 14.1192 15.4641 14.3304 15.2385C14.598 14.9492 14.9304 14.4692 15.2688 13.9963C15.5076 13.6578 15.8112 13.6155 16.1292 13.7355C16.344 13.81 19.074 15.0778 19.1892 15.2807C19.2744 15.4283 19.2744 16.1267 18.9852 16.9453ZM12.0024 0H11.9964C5.38079 0 0 5.38242 0 12C0 14.624 0.846008 17.0584 2.28481 19.033L0.789606 23.492L5.40121 22.0184C7.29841 23.2739 9.5628 24 12.0024 24C18.618 24 24 18.6176 24 12C24 5.38242 18.618 0 12.0024 0Z"
                    fill="white"
                  />
                </svg>
              </Button>
              <Button
                className="rounded-full"
                onClick={handleClick}
                aria-label="Location"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
              <Button
                className="rounded-full"
                onClick={() => window.open("https://www.instagram.com/apollodentalomr/?hl=en", "_blank")}
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.2 0C3.22355 0 0 3.22355 0 7.2V16.8C0 20.7765 3.22355 24 7.2 24H16.8C20.7765 24 24 20.7765 24 16.8V7.2C24 3.22355 20.7765 0 16.8 0H7.2ZM6.4 12C6.4 8.9072 8.9072 6.4 12 6.4C15.0928 6.4 17.6 8.9072 17.6 12C17.6 15.0928 15.0928 17.6 12 17.6C8.9072 17.6 6.4 15.0928 6.4 12ZM17.6 6.4H19.2V4.8H17.6V6.4Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
            <div className="w-full flex justify-between">
              <div>
                <p className="text-gray-500 text-sm uppercase">Opening Hours</p>
                <p className="font-semibold text-black">10:00 AM to 8:00 PM</p>
                <p className="font-semibold text-black">All Days</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase">Call us</p>
                <p className="font-semibold text-black">+91 9360901090</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
