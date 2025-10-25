'use client';

import dynamic from 'next/dynamic';
import { CONTAINER_CLASS } from '@/constants/styles';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { BackgroundGradient } from '@/components/BackgroundGradient';

// Defer heavy or non-critical visual components to the client to reduce initial JS

const Footer = dynamic(() => import('@/components/Footer').then((mod) => mod.Footer), {
  ssr: false,
});

const PageEffects = dynamic(
  () => import('@/components/PageEffects').then((mod) => mod.PageEffects),
  {
    ssr: false,
  }
);

export function HomeClient() {
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
      <PageEffects />
    </div>
  );
}
