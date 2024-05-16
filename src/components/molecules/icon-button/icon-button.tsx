import React from "react";
import { Icon, Button, buttonType } from "@atoms";

interface IconButtonProps {
  className: string;
  type: buttonType;
  src: string;
  alt: string;
  label?: string;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  type,
  src,
  alt,
  label,
  onClick,
  ...props
}) => {
  return (
    <Button type={type} className={className} onClick={onClick} {...props}>
      <Icon src={src} alt={alt} />
      {label}
    </Button>
  );
};
