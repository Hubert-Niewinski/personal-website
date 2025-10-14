import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: 'default' | 'blue-purple' | 'slate' | 'slate-light';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
}

/**
 * GradientText component applies gradient styling with proper spacing to prevent
 * clipping of descenders (letters like g, p, y, q).
 *
 * Uses pb-2 (padding-bottom) and leading-tight to ensure descenders are fully visible.
 *
 * @example
 * <GradientText as="h1" className="text-4xl font-bold">
 *   Public Speaking
 * </GradientText>
 */
export function GradientText({
  children,
  className = '',
  gradient = 'default',
  as: Component = 'span',
}: GradientTextProps) {
  const gradientClasses = {
    default: 'from-slate-200 to-slate-300',
    'blue-purple': 'from-blue-400 to-purple-400',
    slate: 'from-slate-300 to-slate-400',
    'slate-light': 'from-slate-200 via-blue-200 to-slate-200',
  };

  const gradientClass = gradientClasses[gradient];

  return (
    <Component
      className={`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent pb-2 leading-tight ${className}`}
    >
      {children}
    </Component>
  );
}
