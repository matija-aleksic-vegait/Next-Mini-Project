import { ReactNode } from "react";

interface HeaderProps {
  className: string;
  children: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ className, children }) => {
  return <header className={className}>{children}</header>;
};
