interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  testId?: string;
}

/**
 * Primary CTA button with gradient styling
 * Uses consolidated gradient styles for consistency
 */
export function Button({ children, onClick, href, className = '', testId }: ButtonProps) {
  const baseStyles = `relative px-12 py-4 font-semibold rounded-xl transition-all duration-300 overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 border border-blue-500/50 hover:border-blue-400/70 ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 animate-shimmer"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-300/20 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </>
  );

  return (
    <div className="relative group">
      {/* Gradient border container */}
      <div className="absolute -inset-[2px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500 via-purple-400 to-blue-500 blur-sm"></div>
      
      {href ? (
        <a 
          href={href}
          className={baseStyles}
          data-test-id={testId}
        >
          {content}
        </a>
      ) : (
        <button 
          onClick={onClick}
          className={baseStyles}
          data-test-id={testId}
        >
          {content}
        </button>
      )}
    </div>
  );
}
