'use client';

interface CollapsibleSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export function CollapsibleSection({ title, isExpanded, onToggle, children }: CollapsibleSectionProps) {
  return (
    <section className="mb-8">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 rounded-xl text-2xl sm:text-3xl font-bold mb-4 cursor-pointer transition-all duration-300 bg-slate-800/40 border border-slate-700/40 hover:border-blue-500/50 hover:bg-slate-800/60 text-white hover:text-blue-300"
        aria-expanded={isExpanded}
        aria-label={`Toggle ${title} section`}
      >
        <span>{title}</span>
        <svg 
          className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isExpanded && children}
    </section>
  );
}
