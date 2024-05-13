import React from "react";
import "../../../../public/css/styles.css";

interface SpanProps {
  label: string;
  className?: string;
}

export const Span: React.FC<SpanProps> = ({ label, className }) => {
  return <span className={className}>{label}</span>;
};
