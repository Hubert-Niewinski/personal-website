interface ActionButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: 'sm' | 'md';
}

export function ActionButton({ href, children, icon, size = 'sm' }: ActionButtonProps) {
  const sizeClasses = size === 'sm' ? 'text-xs px-3 py-2' : 'px-4 py-2 text-sm font-medium';

  const defaultIcon = (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${sizeClasses} rounded-lg transition-all duration-300 inline-flex items-center gap-1 bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/30`}
    >
      {icon || defaultIcon}
      {children}
    </a>
  );
}
