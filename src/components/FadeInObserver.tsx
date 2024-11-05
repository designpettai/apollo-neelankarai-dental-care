// src/components/FadeInObserver.tsx

'use client'; // Add this line at the top of the file to make it a client component

import { useEffect, ReactNode } from 'react';

interface FadeInObserverProps {
  children: ReactNode;
}

export function FadeInObserver({ children }: FadeInObserverProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is in the viewport
    );

    // Select all elements with the 'fade-in' class
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer when component unmounts
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array to only run once after mount

  return <>{children}</>;
}
