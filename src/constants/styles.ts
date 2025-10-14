/**
 * Centralized style constants for consistent sizing and spacing across the application.
 * Following DRY principle to avoid repeated Tailwind class combinations.
 */

/**
 * Common icon sizes - use these for consistent icon dimensions
 */
export const ICON_SIZES = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
  '2xl': 'w-10 h-10',
  '3xl': 'w-12 h-12',
  '4xl': 'w-16 h-16',
} as const;

/**
 * Common padding combinations for buttons and interactive elements
 */
export const PADDING_SIZES = {
  xs: 'px-2 py-1',
  sm: 'px-3 py-2',
  md: 'px-4 py-2',
  lg: 'px-6 py-3',
  xl: 'px-8 py-4',
} as const;

/**
 * Common spacing for containers and sections
 */
export const CONTAINER_PADDING = {
  sm: 'px-4 py-2',
  md: 'px-4 sm:px-8 py-8 sm:py-12 lg:py-16',
  lg: 'px-6 py-4',
  section: 'max-w-6xl mx-auto px-4 sm:px-8',
  sectionLarge: 'max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 lg:py-16',
} as const;

/**
 * Common rounded corner sizes
 */
export const ROUNDED_SIZES = {
  sm: 'rounded',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
  full: 'rounded-full',
} as const;

/**
 * Type definitions for size utilities
 */
export type IconSize = keyof typeof ICON_SIZES;
export type PaddingSize = keyof typeof PADDING_SIZES;
export type ContainerPadding = keyof typeof CONTAINER_PADDING;
export type RoundedSize = keyof typeof ROUNDED_SIZES;

/**
 * Helper function to get icon size classes
 */
export const getIconSize = (size: IconSize = 'md'): string => ICON_SIZES[size];

/**
 * Helper function to get padding classes
 */
export const getPadding = (size: PaddingSize = 'md'): string => PADDING_SIZES[size];

/**
 * Helper function to get container padding classes
 */
export const getContainerPadding = (size: ContainerPadding = 'md'): string =>
  CONTAINER_PADDING[size];

/**
 * Helper function to get rounded classes
 */
export const getRounded = (size: RoundedSize = 'md'): string => ROUNDED_SIZES[size];
