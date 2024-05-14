import React from "react";
import "../../../../public/css/styles.css";

export interface UlProps {
  className: string;
  id: string;
  role?: string;
  children?: React.ReactNode;
}

export const Ul: React.FC<UlProps> = ({ className, id, role, children }) => {
  return (
    <ul role={role} id={id} className={className}>
      {children}
    </ul>
  );
};
