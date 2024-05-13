import { ReactNode } from "react";

export interface LinkProps {
  href: string;
  label?: string;
  ariaLabel?: string;
  className?: string;
  children?: ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  href,
  label,
  ariaLabel,
  className,
  children,
}) => {
  return (
    <a href={href} aria-label={ariaLabel} className={className}>
      {label}
      {children}
    </a>
  );
};
