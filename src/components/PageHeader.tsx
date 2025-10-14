import { ReactNode } from 'react';
import { GradientText } from '@/components/ui/GradientText';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: ReactNode;
  className?: string;
  subtitleSize?: 'base' | 'lg' | 'xl';
}

export function PageHeader({
  title,
  subtitle,
  description,
  className = '',
  subtitleSize = 'lg',
}: PageHeaderProps) {
  const subtitleSizeClass = {
    base: 'text-lg sm:text-xl',
    lg: 'text-lg sm:text-xl',
    xl: 'text-xl sm:text-2xl',
  }[subtitleSize];

  return (
    <div className={`mb-12 text-center ${className}`}>
      <GradientText as="h1" className="text-4xl sm:text-5xl font-bold mb-4">
        {title}
      </GradientText>
      {subtitle && (
        <p
          className={`${subtitleSizeClass} ${subtitle && description ? 'mb-6' : ''} text-balance text-slate-400`}
        >
          {subtitle}
        </p>
      )}
      {description && (
        <div className="text-base sm:text-lg leading-relaxed whitespace-pre-line text-pretty text-slate-300">
          {description}
        </div>
      )}
    </div>
  );
}
