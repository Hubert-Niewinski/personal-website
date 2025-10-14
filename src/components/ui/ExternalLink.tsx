import { Icon } from './Icon';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ExternalLink({ href, children, className = '' }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-lg text-blue-400 hover:text-blue-300 transition-colors duration-200 inline-flex items-center gap-1 ${className}`}
    >
      {children}
      <Icon name="externalLink" className="w-4 h-4" />
    </a>
  );
}
