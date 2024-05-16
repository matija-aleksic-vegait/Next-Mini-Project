import Image from "next/image";
import React from "react";

export interface LogoProps {
  src: string;
  alt: string;
  height: number;
  width: number;
}

export const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  height,
  width,
  ...props
}) => {
  return <Image src={src} alt={alt} height={height} width={width} {...props} />;
};
