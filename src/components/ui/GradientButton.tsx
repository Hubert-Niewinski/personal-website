import { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Reusable gradient button component
 * Eliminates duplicate button styling across Button, BlogCard, BackToTop, etc.
 */
export function GradientButton({ 
  children, 
  onClick, 
  href,
  className = '', 
  variant = 'primary',
  size = 'md'
}: GradientButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 hover:scale-105';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30',
    secondary: 'bg-slate-800/40 text-slate-300 border border-slate-700/40 hover:border-blue-500/50 hover:bg-slate-800/60'
  };
  
  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
