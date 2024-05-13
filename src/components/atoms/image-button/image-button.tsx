import React from "react";
import "../../../../public/css/styles.css";
import { buttonType } from "@/components/atoms/button/button";
import { altType } from "../icon/icon";

interface ImageButtonProps {
  className: string;
  type: buttonType;
  src: string;
  alt: altType;
  label?: string;
  ariaControls?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export const ImageButton: React.FC<ImageButtonProps> = ({
  className,
  type,
  src,
  alt,
  label,
  ariaLabel,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <img src={src} alt={alt} />
      {label}
    </button>
  );
};
