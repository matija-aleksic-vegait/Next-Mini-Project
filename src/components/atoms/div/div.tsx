import { ReactNode } from "react";

export interface DivProps {
  className?: string;
  role?: string;
  children?: ReactNode;
  onClick?: Function;
}

export const Div: React.FC<DivProps> = ({
  className,
  role,
  children,
  onClick,
  ...props
}) => {
  return (
    <div
      className={className}
      role={role}
      onClick={() => {
        onClick ? onClick() : undefined;
      }}
      {...props}
    >
      {children}
    </div>
  );
};
