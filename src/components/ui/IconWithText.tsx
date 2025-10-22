import { ReactNode } from 'react';
import { Icon } from './Icon';
import { ICON_SIZES } from '@/constants/styles';

interface IconWithTextProps {
  icon: 'location' | 'calendar' | 'document' | ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function IconWithText({ icon, children, className = '' }: IconWithTextProps) {
  const iconElement =
    typeof icon === 'string' ? <Icon name={icon} className={ICON_SIZES.sm} /> : icon;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {iconElement}
      <span>{children}</span>
    </div>
  );
}
