import React from 'react';
import { ImageCarousel } from '@/components/Carousel';
import { BannerContent } from '@/components/BannerContent';
import { AppointmentForm } from './AppointmentForm';
import image3 from '@/images/avatars/ap102.jpg';
import image4 from '@/images/avatars/IMG_9542.jpg';
import image5 from '@/images/avatars/Slide-2.jpg';
import image6 from '@/images/avatars/slide-3.jpg';
import image7 from '@/images/avatars/slide-4.jpg';

export function Hero() {
  const carouselItems = [
    { id: '3', src: image3.src, alt: 'Image 3 Description' },
    { id: '4', src: image4.src, alt: 'Image 4 Description' },
    { id: '5', src: image5.src, alt: 'Image 5 Description' },
    { id: '6', src: image6.src, alt: 'Image 6 Description' },
    { id: '7', src: image7.src, alt: 'Image 7 Description' },
  ];

  return (
    <div className="relative">
      <ImageCarousel  
        items={carouselItems}
        autoPlay={true}
        interval={5000}
        className="h-[250px] md:h-[600px]"
      />
      <div className="absolute left-0 right-[0%] md:right-[50%] top-0 bottom-0 bg-black bg-opacity-45">
        <BannerContent />
      </div>
      <div className="absolute  left-0 right-0 md:left-[15%] md:right-[15%] bottom-[-740px] md:bottom-[-210px]">
        <AppointmentForm />
      </div>

    </div>
  );
}
