import React from "react";

export interface LogoProps {
  src: string;
  alt: string;
}

export const Logo: React.FC<LogoProps> = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};
