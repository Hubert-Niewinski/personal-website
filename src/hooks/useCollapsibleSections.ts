import { useState } from 'react';

export function useCollapsibleSections<T extends string>(
  sectionNames: T[]
): [Record<T, boolean>, (section: T) => void] {
  const initialState = sectionNames.reduce(
    (acc, name) => {
      acc[name] = false;
      return acc;
    },
    {} as Record<T, boolean>
  );

  const [expandedSections, setExpandedSections] = useState<Record<T, boolean>>(initialState);

  const toggleSection = (section: T) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return [expandedSections, toggleSection];
}
