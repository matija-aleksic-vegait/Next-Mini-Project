"use client";

import React from "react";
import "../../../../public/css/styles.css";

export interface LiProps {
  key?: string;
  onClick?: Function;
  children?: React.ReactNode;
}

export const Li: React.FC<LiProps> = ({ key, onClick, children }) => {
  return (
    <li key={key} onClick={() => onClick}>
      {children}
    </li>
  );
};
