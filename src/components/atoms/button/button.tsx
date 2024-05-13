import React from "react";
import "../../../../public/css/styles.css";

export type buttonType = "button" | "submit" | "reset";

export interface ButtonProps {
  className: string;
  type: buttonType;
  label?: string;
  ariaControls?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  className,
  type,
  ariaControls,
  ariaLabel,
  onClick,
}) => {
  return (
    <button
      className={className}
      type={type}
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
