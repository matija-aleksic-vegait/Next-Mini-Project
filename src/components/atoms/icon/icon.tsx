import ImageConstants from "@/constants/image-constants";
import Image from "next/image";
import React from "react";

export interface IconProps {
  src: string;
  alt: string;
}

export const Icon: React.FC<IconProps> = ({ src, alt, ...props }) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={ImageConstants.ICON_HEIGHT}
      width={ImageConstants.ICON_WIDTH}
      {...props}
    />
  );
};
