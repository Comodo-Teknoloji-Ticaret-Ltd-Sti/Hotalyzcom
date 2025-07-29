// Simple utility for className merging (tailwind-merge alternative)
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
