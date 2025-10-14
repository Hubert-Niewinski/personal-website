'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { CONTAINER_CLASS } from '@/types/styles';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { Footer } from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { BackgroundGradient } from '@/components/BackgroundGradient';

export default function Home() {
  useIntersectionObserver();

  return (
    <div className={`${CONTAINER_CLASS} relative overflow-hidden`}>
      <BackgroundGradient />

      <div className="relative z-10">
        <Navigation />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 lg:py-16">
          <HeroSection />
          <ServicesSection />
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
}
