import { ReactNode } from "react";

interface HeadProps {
  children: ReactNode;
  className?: string;
}

export const Head: React.FC<HeadProps> = ({ children, className }) => {
  return <header className={className}>{children}</header>;
};
