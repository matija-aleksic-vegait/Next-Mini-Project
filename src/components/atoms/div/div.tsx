import { ReactNode } from 'react';

export interface DivProps {
  className?: string;
  id?: string;
  role?: string;
  children?: ReactNode;
  onClick?: Function;
}

export const Div: React.FC<DivProps> = ({
  className,
  id,
  role,
  children,
  onClick,
  ...props
}) => {
  return (
    <div
      className={className}
      id={id}
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
