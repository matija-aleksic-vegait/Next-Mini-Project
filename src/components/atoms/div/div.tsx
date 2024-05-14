import { ReactNode } from "react";

export interface DivProps {
  className?: string;
  role?: string;
  children?: ReactNode;
}

export const Div: React.FC<DivProps> = ({
  className,
  role,
  children,
  ...props
}) => {
  return (
    <div className={className} role={role} {...props}>
      {children}
    </div>
  );
};
