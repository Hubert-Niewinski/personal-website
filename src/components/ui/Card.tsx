interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export function Card({ children, hover = true, className = '' }: CardProps) {
  const baseClasses = 'p-6 rounded-xl bg-slate-800/40 border border-slate-700/40';
  const hoverClasses = hover ? 'transition-all duration-300 hover:border-slate-600/70' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
