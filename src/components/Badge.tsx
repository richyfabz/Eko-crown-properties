import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  tone?: 'brand' | 'success' | 'warning' | 'default';
}

export function Badge({ children, tone = 'default' }: BadgeProps) {
  return <span className={`pill${tone !== 'default' ? ` ${tone}` : ''}`}>{children}</span>;
}
