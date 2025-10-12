interface BadgeProps {
  children: React.ReactNode;
  variant?: 'skill' | 'tag' | 'category';
  level?: 1 | 2 | 3; // Star rating: 1 = Basic, 2 = Intermediate, 3 = Advanced
  className?: string;
}

export function Badge({ children, variant = 'skill', level, className = '' }: BadgeProps) {
  const variantStyles = {
    skill: 'px-4 py-2 rounded-lg text-sm font-medium bg-slate-700/50 text-slate-200 border border-slate-600/50',
    tag: 'text-xs px-2 py-1 rounded bg-slate-700/30 text-slate-400',
    category: 'inline-block px-3 py-1 text-xs font-semibold rounded-full bg-slate-700/50 text-slate-300'
  };

  const renderStars = () => {
    if (!level) return null;
    return (
      <span className="ml-2 inline-flex gap-0.5" aria-label={`Level ${level} of 3`}>
        {[1, 2, 3].map((star) => (
          <svg
            key={star}
            className={`w-3 h-3 ${star <= level ? 'text-yellow-400' : 'text-slate-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </span>
    );
  };

  // Only use inline-flex when we have stars to display
  const containerClass = level 
    ? `inline-flex items-center ${variantStyles[variant]} ${className}`
    : `${variantStyles[variant]} ${className}`;

  return (
    <span className={containerClass}>
      {children}
      {renderStars()}
    </span>
  );
}
