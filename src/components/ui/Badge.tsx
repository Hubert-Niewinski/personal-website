interface BadgeProps {
  children: React.ReactNode;
  variant?: 'skill' | 'tag' | 'category';
  className?: string;
}

export function Badge({ children, variant = 'skill', className = '' }: BadgeProps) {
  const variantStyles = {
    skill:
      'px-4 py-2 rounded-lg text-sm font-medium bg-slate-700/50 text-slate-200 border border-slate-600/50',
    tag: 'text-xs px-2 py-1 rounded bg-slate-700/30 text-slate-400',
    category:
      'inline-block px-3 py-1 text-xs font-semibold rounded-full bg-slate-700/50 text-slate-300',
  };

  return <span className={`${variantStyles[variant]} ${className}`}>{children}</span>;
}
