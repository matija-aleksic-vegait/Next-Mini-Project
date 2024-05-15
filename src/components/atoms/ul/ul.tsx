import React from "react";
import "../../../../public/css/styles.css";

export interface UlProps {
  className: string;
  role?: string;
  children?: React.ReactNode;
}

export const Ul: React.FC<UlProps> = ({
  className,
  role,
  children,
  ...props
}) => {
  return (
    <ul role={role} className={className} {...props}>
      {children}
    </ul>
  );
};
