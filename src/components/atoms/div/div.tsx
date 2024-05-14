import { ReactNode } from "react";

export interface DivProps {
  children?: ReactNode;
}

export const Div: React.FC<DivProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
