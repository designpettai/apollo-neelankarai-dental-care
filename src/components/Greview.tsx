'use client';

import React from 'react';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { ContentCarousel } from '@/components/Content-Carousel';
import { FadeInObserver } from '@/components/FadeInObserver';
import { Button } from '@/components/Button';


export function Greview() {
  const summary =
    "Patients consistently rave about the exceptional care provided at the dental hospital, noting the comprehensive range of services offered, from preventative care to complex surgeries. The facility is praised for its state-of-the-art technology and clean, welcoming environment. Many appreciate the easy-to-navigate online appointment system and the prompt communication from the staff. The knowledgeable and compassionate dental team goes above and beyond to ensure patients feel informed and comfortable during their visits. Overall, the excellent patient care, affordability, and extensive treatment options make this dental hospital a highly recommended choice for anyone seeking top-notch dental services.";

  const reviews = [
    {
      id: '1',
      name: 'Nevil Stephen',
      review:
        "Had a checkup for my Kid(3 year) here for dental cavity. Dr. Akshaya explained about the causes and mitigation very clearly. Dr. Rabina did the pedio dental procedure to perfection. I’m glad I selected this place for dental checkup.",
      image:
        'https://lh3.googleusercontent.com/a-/ALV-UjWK_7Nd1-JPkDElwLK5W9VgThiuSGG7WiquNDLFwZGY69o0jdZIqw=w45-h45-p-rp-mo-ba3-br100',
      rating: 5,
    },
    {
      id: '2',
      name: 'Karthick Kumar Arunachalam',
      review:
        "Highly recommend! I have lots of anxiety about going to the dentist. After I visit, I get to know more about RTC and doctors have explained various options that will best fit for my condition. They made me feel comfortable and helped with painless RCT during and post treatment. I highly recommend this clinic for all my friends and family members...",
      image:
        'https://lh3.googleusercontent.com/a-/ALV-UjUe8QOtU8_G8ANIOektHPrxQJF5AxeWVuLczO_Gzz3MHSQSlvfatQ=w45-h45-p-rp-mo-br100',
      rating: 5,
    },
    {
      id: '3',
      name: 'Rajkumar NandaKumar',
      review:
        "We had an excellent experience with Dr. Akshaya. Treated for dental filling and root canal treatment for my daughter. The procedure was done with great care and minimal discomfort. The office is clean, modern, and well-equipped.",
      image:
        'https://lh3.googleusercontent.com/a-/ALV-UjVZs53oR3rSimXp4yWJHq463U2T7o8AO-L_iYwzbIBdhlxLfHn6Nw=w45-h45-p-rp-mo-br100',
      rating: 5,
    },
  ];

  const firstSliderReviews = [reviews[0], reviews[1], reviews[2]];
  const secondSliderReviews = [reviews[1], reviews[2], reviews[0]];

  return (
    <section className="w-full py-20 mx-auto bg-custom-gradient">
      <Container>
        <FadeInObserver>
          <h1 className="text-3xl font-medium text-white fade-in mb-2">Our Customers Reviews</h1>
        </FadeInObserver>

        <FadeInObserver>
          <div className="flex flex-col md:flex-row justify-between items-left">
            <div className="flex items-center w-full md:w-auto mb-4">
              <Logo className="w-auto h-16 mr-4" isRounded={true} />
              <div className="flex flex-col mt-2 md:mt-0 items-left md:items-start mb-2">
                <span className="text-yellow-400 text-xl fade-in">⭐⭐⭐⭐⭐</span>
                <p className="text-white text-sm fade-in">4.9 rating from 250 reviews</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/Apollo+Dental+Clinic+OMR+Padur+%7C+Invisalign+Provider+%7C+Best+Dental+Clinic+in+OMR+%7C+Dental+Laser+%26+Implant+Center/@12.8068947,80.2224549,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525196b51eb6f7:0x864b1dd15f681180!8m2!3d12.8068947!4d80.2250298!16s%2Fg%2F11y3kcq_d3?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-auto py-2 border-2 border-white rounded-md bg-none mb-4">
                Share Your Review
              </Button>
            </a>
          </div>
        </FadeInObserver>

        <FadeInObserver>
          <div className="mb-8 fade-in text-white">
            <p className="mb-4">{summary}</p>
          </div>
        </FadeInObserver>

        <FadeInObserver>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <ContentCarousel
              items={firstSliderReviews}
              autoPlay
              interval={3000}
              className="p-4 rounded mb-8 md:mb-0 md:w-1/2 w-full fade-in"
            />
            <ContentCarousel
              items={secondSliderReviews}
              autoPlay
              interval={3000}
              className="p-4 rounded md:w-1/2 w-full fade-in"
            />
          </div>
        </FadeInObserver>
      </Container>
    </section>
  );
}
