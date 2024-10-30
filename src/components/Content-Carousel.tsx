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
  items: Array<{ id: string; name: string; review: string; image: string; rating: number }>;
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
    <div className={clsx(className, 'relative bg-[#f6f8f8]')}>
      <div className="overflow-hidden relative h-[250px] flex items-center justify-center"> {/* Decreased height */}
        {items.map((item, index) => (
          <div
            key={item.id}
            className={clsx('absolute transition-opacity duration-500 w-full h-full left-0 top-0 flex flex-col items-center justify-center p-2', { // Decreased padding
              'opacity-100': index === currentIndex,
              'opacity-0': index !== currentIndex,
            })}
          >
            <Image 
              src={item.image} 
              alt={item.name} 
              width={40}
              height={40}
              className="rounded-full mb-2" 
            />
            <h3 className="text-lg font-bold">{item.name}</h3>
            <div className="text-yellow-400">
              {'⭐'.repeat(item.rating)} 
              {'★'.repeat(5 - item.rating)} 
            </div>
            <p className="text-center mt-1 text-sm">{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
