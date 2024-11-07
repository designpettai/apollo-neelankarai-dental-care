'use client';

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
            <Logo className="h-12 w-auto text-slate-900 mb-8" />
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
                onClick={() => window.location.href = "mailto:apollodentalpadur@gmail.com"}
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 16" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.96802 4.32668e-07H16.032C16.4706 -9.56733e-06 16.8491 -1.96602e-05 17.1624 0.0213503C17.4922 0.0438603 17.8221 0.0933606 18.1481 0.228361C18.8831 0.532841 19.4672 1.11687 19.7716 1.85195C19.9066 2.17788 19.9561 2.50779 19.9787 2.83762C20 3.15088 20 3.52936 20 3.96801V12.032C20 12.4706 20 12.8491 19.9787 13.1624C19.9561 13.4922 19.9066 13.8221 19.7716 14.1481C19.4672 14.8831 18.8831 15.4672 18.1481 15.7716C17.8221 15.9066 17.4922 15.9561 17.1624 15.9787C16.8491 16 16.4706 16 16.032 16H3.96801C3.52936 16 3.15088 16 2.83762 15.9787C2.50779 15.9561 2.17788 15.9066 1.85195 15.7716C1.11687 15.4672 0.53284 14.8831 0.22836 14.1481C0.0933604 13.8221 0.0438603 13.4922 0.0213503 13.1624C-1.96602e-05 12.8491 -9.56733e-06 12.4706 4.32668e-07 12.032V3.96802C-9.56733e-06 3.52937 -1.96602e-05 3.15088 0.0213503 2.83762C0.0438603 2.50779 0.0933604 2.17788 0.22836 1.85195C0.53284 1.11687 1.11687 0.532841 1.85195 0.228361C2.17788 0.0933606 2.50779 0.0438603 2.83762 0.0213503C3.15088 -1.96602e-05 3.52937 -9.56733e-06 3.96802 4.32668e-07ZM2.31745 2.27777C2.68114 1.86214 3.3129 1.82002 3.72854 2.1837L9.3415 7.095C9.7185 7.4249 10.2815 7.4249 10.6585 7.095L16.2715 2.1837C16.6871 1.82002 17.3189 1.86214 17.6825 2.27777C18.0462 2.69341 18.0041 3.32517 17.5885 3.68885L11.9755 8.6002C10.8444 9.5899 9.1556 9.5899 8.0245 8.6002L2.41153 3.68885C1.99589 3.32517 1.95377 2.69341 2.31745 2.27777Z"
                    fill="white"
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
        <div className="flex items-center justify-center mb-2 py-12">
          <p className="mr-2">Designed by</p>
          <a href="https://www.designpettai.com">
            <DpLogo className="h-[2.25rem] w-[120px] text-slate-900" />
          </a>
        </div>
      </Container >
    </footer >
  );
}
