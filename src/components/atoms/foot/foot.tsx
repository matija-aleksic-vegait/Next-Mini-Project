import { Children, ReactNode } from "react";

interface FootProps {
  className: string;
  children: ReactNode;
}
export const Foot: React.FC<FootProps> = ({ className, children }) => {
  return <footer className={className}>{children}</footer>;
};
