"use client";

import React, { useState } from 'react';
import clsx from 'clsx';

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
    <div className={clsx(className, 'relative overflow-hidden h-[100vh] w-3/4 md:h-[100vh] md:w-3/4', 'h-[400px] w-full')}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={clsx('absolute transition-opacity duration-500 w-full h-full left-0 top-0 bg-cover bg-center', {
            'opacity-100': index === currentIndex,
            'opacity-0': index !== currentIndex,
          })}
          style={{
            backgroundImage: `url(${item.src})`,
          }}
          aria-hidden={index !== currentIndex}
        >
          <span className="sr-only">{item.alt}</span>
        </div>
      ))}
    </div>
  );
}
