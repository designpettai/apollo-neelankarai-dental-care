"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

export function ContentCarousel({
  className,
  items,
  autoPlay = true,
  interval = 500,
}: {
  className?: string;
  items: Array<{ id: string; name: string; role: string; review: string; image: string }>;
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
    <div className={clsx(className, 'relative')}>
      <div className="overflow-hidden relative h-[500px] flex items-center">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={clsx('absolute transition-opacity duration-500 w-full h-full left-0 top-0 flex flex-col items-center justify-center p-4', {
              'opacity-100': index === currentIndex,
              'opacity-0': index !== currentIndex,
            })}
          >
            <Image 
              src={item.image} 
              alt={item.name} 
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-gray-600">{item.role}</p>
            <p className="text-center mt-2">{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
