import React from "react";
import "../../../../public/css/styles.css";

export interface UlProps {
  className: string;
  role?: string;
  id?: string;
  children?: React.ReactNode;
}

export const Ul: React.FC<UlProps> = ({
  className,
  role,
  id,
  children,
  ...props
}) => {
  return (
    <ul id={id} role={role} className={className} {...props}>
      {children}
    </ul>
  );
};
