import React from "react";

export type altType = "VegaIT Logo";

export interface LogoProps {
  src: string;
  alt: altType;
}

export const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};
