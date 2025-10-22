import type { ReactNode } from 'react';

interface IconButtonProps {
  href: string;
  icon: ReactNode;
  label?: string;
  'aria-label': string;
  isExternal?: boolean;
}

/**
 * Reusable icon button component with gradient hover effects.
 * Consolidates repeated social media icon button patterns (DRY principle).
 */
export function IconButton({
  href,
  icon,
  label,
  'aria-label': ariaLabel,
  isExternal = true,
}: IconButtonProps) {
  const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="relative w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      {...externalProps}
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-xl" />

      {/* Icon with color transition */}
      <div className="text-gray-400 group-hover:text-blue-400 transition-colors">{icon}</div>

      {/* Optional label */}
      {label && (
        <span className="ml-2 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
          {label}
        </span>
      )}
    </a>
  );
}
