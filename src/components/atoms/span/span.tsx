import React, { ReactNode } from "react";
import "../../../../public/css/styles.css";

interface SpanProps {
  label?: string;
  className?: string;
  children?: ReactNode;
}

export const Span: React.FC<SpanProps> = ({
  label,
  className,
  children,
  ...props
}) => {
  return (
    <span className={className} {...props}>
      {label} {children}
    </span>
  );
};
