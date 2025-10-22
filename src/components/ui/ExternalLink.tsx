import { Icon } from './Icon';
import { ICON_SIZES } from '@/constants/styles';

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
      className={`inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-400/30 hover:decoration-blue-300/50 ${className}`}
    >
      {children}
      <Icon name="externalLink" className={ICON_SIZES.sm} />
    </a>
  );
}
