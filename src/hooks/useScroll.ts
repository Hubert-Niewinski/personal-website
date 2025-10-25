'use client';

import { useState, useEffect } from 'react';

export function useScroll() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') {
        return;
      }

      const shouldBeScrolled = window.scrollY > 50;

      setScrolled((prev) => {
        if (prev === shouldBeScrolled) {
          return prev;
        }

        return shouldBeScrolled;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrolled;
}
