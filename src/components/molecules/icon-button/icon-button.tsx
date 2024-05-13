import React from "react";
import "../../../../public/css/styles.css";
import { Icon, altType } from "@/components/atoms/icon/icon";
import { Button, buttonType } from "@/components/atoms/button/button";

interface IconButtonProps {
  className: string;
  type: buttonType;
  src: string;
  alt: altType;
  label?: string;
  ariaControls?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  type,
  src,
  alt,
  label,
  ariaLabel,
  onClick,
}) => {
  return (
    <Button
      type={type}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <Icon src={src} alt={alt} />
      {label}
    </Button>
  );
};
