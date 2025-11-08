/**
 * Design System Colors
 * 
 * These colors are defined as CSS variables in globals.css and can be used in:
 * - CSS: var(--color-primary)
 * - Tailwind: bg-[var(--color-primary)], text-[var(--color-primary)], etc.
 * - Inline styles: style={{ color: 'var(--color-primary)' }}
 */

export const colors = {
  primary: '#355E3B',
  secondary: '#182A1B',
  light: '#C0CDC2',
  black: '#202326',
  gray: '#D9DFE6',
  white: '#ffffff',
} as const;

/**
 * CSS Variable names for use in CSS and Tailwind
 */
export const colorVariables = {
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
  light: 'var(--color-light)',
  black: 'var(--color-black)',
  gray: 'var(--color-gray)',
  white: 'var(--color-white)',
} as const;

/**
 * Typography
 * 
 * Fonts are configured in layout.tsx and available via CSS variables:
 * - Serif (Cinzel): Use for elegant headings - className="font-serif"
 * - Sans-serif (Inter): Use for body text, navigation, buttons - className="font-sans" (default)
 * 
 * Usage:
 * - Tailwind: className="font-serif" or className="font-sans"
 * - CSS: font-family: var(--font-serif) or var(--font-sans)
 */
export const typography = {
  serif: 'var(--font-serif)',
  sans: 'var(--font-sans)',
} as const;

