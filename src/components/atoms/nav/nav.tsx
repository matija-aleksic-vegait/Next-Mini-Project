import { ReactNode } from "react";

interface NavProps {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
}

export const Nav: React.FC<NavProps> = ({ ariaLabel, children, className }) => {
  return (
    <nav aria-label={ariaLabel} className={className}>
      {children}
    </nav>
  );
};
