import { ReactNode } from "react";

export interface LinkProps {
  href?: string;
  label?: string;
  ariaLabel?: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({
  href,
  label,
  ariaLabel,
  className,
  children,
  onClick,
}) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
    >
      {label}
      {children}
    </a>
  );
};
