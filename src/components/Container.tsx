import type { PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {
  className?: string;
  wide?: boolean;
}

export function Container({ children, className = '', wide = false }: ContainerProps) {
  return <div className={`container${wide ? ' wide' : ''} ${className}`.trim()}>{children}</div>;
}

