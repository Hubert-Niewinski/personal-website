'use client';

import BackToTop from '@/components/BackToTop';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

/**
 * Client-only effects that should not force the entire homepage to be interactive.
 */
export function PageEffects() {
  useIntersectionObserver();

  return <BackToTop />;
}
