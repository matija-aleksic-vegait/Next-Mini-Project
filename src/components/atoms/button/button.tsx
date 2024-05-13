import React from "react";
import "../../../../public/css/styles.css";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  label: string;
  className: string;
  type: ButtonType;
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
  ...props
}) => {
  return (
    <button
      className={className}
      type={type}
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      {...props}
    >
      {label}
    </button>
  );
};
