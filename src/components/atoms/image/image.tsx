import React from "react";

type altType =
  | "add"
  | "VegaIT Logo"
  | "menu"
  | "left"
  | "right"
  | "search"
  | "close";

interface ImageProps {
  src: string;
  alt: altType;
}

export const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};
