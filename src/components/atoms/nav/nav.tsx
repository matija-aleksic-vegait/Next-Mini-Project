import { ReactNode } from 'react';

interface NavProps {
  children: ReactNode;
  className?: string;
}

export const Nav: React.FC<NavProps> = ({ children, className, ...props }) => {
  return (
    <nav className={className} {...props}>
      {children}
    </nav>
  );
};
