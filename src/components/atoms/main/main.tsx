import { ReactNode } from "react";

interface MainProps {
  className: string;
  children: ReactNode;
}

export const Main: React.FC<MainProps> = ({ className, children }) => {
  return <main className={className}>{children}</main>;
};
