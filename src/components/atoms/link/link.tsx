import { ReactNode } from "react";

export interface LinkProps {
  href?: string;
  label?: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({
  href,
  label,
  className,
  children,
  onClick,
  ...props
}) => {
  return (
    <a href={href} className={className} onClick={onClick} {...props}>
      {label}
      {children}
    </a>
  );
};
