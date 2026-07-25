import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface SharedProps extends PropsWithChildren {
  variant?: ButtonVariant;
  className?: string;
}

type NativeButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;
type NativeLinkProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
  };

export const Button = forwardRef<HTMLButtonElement, NativeButtonProps>(function Button(
  { children, variant = 'primary', className = '', ...props },
  ref
) {
  const classes = `button button-${variant} ${className}`.trim();
  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  );
});

export function ButtonLink({ children, variant = 'primary', className = '', href, ...props }: NativeLinkProps) {
  const classes = `button button-${variant} ${className}`.trim();
  return (
    <Link className={classes} to={href} {...props}>
      {children}
    </Link>
  );
}
