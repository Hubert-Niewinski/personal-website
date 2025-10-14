import { ReactNode } from 'react';
import { CONTAINER_CLASS } from '@/types/styles';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { BackgroundGradient } from '@/components/BackgroundGradient';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className={`${CONTAINER_CLASS} relative overflow-hidden min-h-screen`}>
      {/* Subtle animated gradient overlay */}
      <BackgroundGradient />

      <div className="relative z-10">
        <Navigation />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 lg:py-16">{children}</div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};
