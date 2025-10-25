import type { ReactNode } from 'react';
import { Icon, LinkedInIcon, GitHubIcon } from '@/components/ui/Icon';

const SOCIAL_ICON_COMPONENTS: Record<string, (className: string) => ReactNode> = {
  github: (className: string) => <GitHubIcon className={className} />,
  linkedin: (className: string) => <LinkedInIcon className={className} />,
};

/**
 * Resolve the appropriate social icon component.
 * Falls back to the generic `Icon` component when no specialized icon exists.
 */
export function getSocialIcon(iconName: string, className: string): ReactNode {
  const resolver = SOCIAL_ICON_COMPONENTS[iconName.toLowerCase()];

  if (resolver) {
    return resolver(className);
  }

  return <Icon name={iconName} className={className} />;
}
