"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

export function ImageCarousel({
  className,
  items,
  autoPlay = true,
  interval = 500,
}: {
  className?: string;
  items: Array<{ id: string; src: string; alt: string }>; 
  autoPlay?: boolean;
  interval?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, items.length]);

  return (
    <div className={clsx(className, '')}>
      <div className="overflow-hidden relative h-[500px]">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={clsx('absolute transition-opacity duration-500 w-full h-full left-0 top-0', {
              'opacity-100': index === currentIndex,
              'opacity-0': index !== currentIndex,
            })}
          >
            <Image 
              src={item.src} 
              alt={item.alt} 
              layout="fill"
              objectFit="cover"
              className="w-full rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
