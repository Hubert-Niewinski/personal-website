import type { ReactNode } from 'react';

type IconButtonVariant = 'default' | 'soft';
type IconButtonSize = 'sm' | 'md' | 'lg';

interface IconButtonProps {
  href: string;
  icon: ReactNode;
  label?: string;
  'aria-label': string;
  isExternal?: boolean;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  className?: string;
  iconClassName?: string;
}

const SIZE_CLASSES: Record<IconButtonSize, string> = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

const VARIANT_BASE_CLASSES: Record<IconButtonVariant, string> = {
  default: 'rounded-lg overflow-hidden hover:scale-110',
  soft: 'rounded-lg bg-white/10 hover:bg-white/20',
};

const VARIANT_ICON_CLASSES: Record<IconButtonVariant, string> = {
  default: 'text-gray-400 group-hover:text-blue-400 transition-colors',
  soft: 'text-gray-300 group-hover:text-white transition-colors',
};

const VARIANT_BACKGROUNDS: Record<IconButtonVariant, ReactNode> = {
  default: (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-xl" />
    </>
  ),
  soft: null,
};

/**
 * Reusable icon button component with hover variants and size controls.
 * Consolidates repeated social media icon button patterns (DRY principle).
 */
export function IconButton({
  href,
  icon,
  label,
  'aria-label': ariaLabel,
  isExternal,
  variant = 'default',
  size = 'md',
  className = '',
  iconClassName,
}: IconButtonProps) {
  const shouldOpenInNewTab =
    typeof isExternal === 'boolean' ? isExternal : /^https?:\/\//i.test(href);

  const externalProps = shouldOpenInNewTab
    ? { target: '_blank', rel: 'noopener noreferrer' as const }
    : {};

  const sizeClass = SIZE_CLASSES[size];
  const variantClass = VARIANT_BASE_CLASSES[variant];
  const computedClassName = [
    'relative inline-flex items-center justify-center transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70',
    sizeClass,
    variantClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const iconWrapperClass = iconClassName ?? VARIANT_ICON_CLASSES[variant];

  return (
    <a href={href} aria-label={ariaLabel} className={computedClassName} {...externalProps}>
      {VARIANT_BACKGROUNDS[variant]}

      <span className={iconWrapperClass}>{icon}</span>

      {label && (
        <span className="ml-2 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
          {label}
        </span>
      )}
    </a>
  );
}
