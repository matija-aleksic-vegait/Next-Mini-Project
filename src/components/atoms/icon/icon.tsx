import React from "react";

export type altType = "add" | "menu" | "left" | "right" | "search" | "close";

export interface IconProps {
  src: string;
  alt: altType;
}

export const Icon: React.FC<IconProps> = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};
