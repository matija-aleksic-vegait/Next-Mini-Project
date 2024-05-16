"use client";

import React from "react";

export interface LiProps {
  onClick?: Function;
  children?: React.ReactNode;
}

export const Li: React.FC<LiProps> = ({ onClick, children, ...props }) => {
  return (
    <li onClick={() => onClick} {...props}>
      {children}
    </li>
  );
};
