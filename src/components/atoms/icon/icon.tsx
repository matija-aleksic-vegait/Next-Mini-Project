import React from "react";

export interface IconProps {
  src: string;
  alt: string;
}

export const Icon: React.FC<IconProps> = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};
