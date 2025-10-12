'use client';

import { useEffect } from 'react';

export function useIntersectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small delay to ensure smooth rendering
            requestAnimationFrame(() => {
              entry.target.classList.add('animate-fade-in-view');
            });
            // Unobserve immediately to prevent re-triggering
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.15, 
        rootMargin: '50px 0px -100px 0px' // Positive top margin to catch elements already in view
      }
    );

    // Immediately show elements and set up observer
    const elements = document.querySelectorAll('[data-animate="fade-in"]');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      // If element is already in viewport, show it immediately
      if (isInViewport) {
        el.classList.add('animate-fade-in-view');
      } else {
        // Otherwise, observe it for when it enters viewport
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
