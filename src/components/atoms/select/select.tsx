import { ReactNode } from "react";

interface SelectProps {
  id: string;
  className: string;
  ariaLabel: string;
  children: ReactNode;
  includeLabel: boolean;
  defaultValue?: string;
}

export const Select: React.FC<SelectProps> = ({
  id,
  className,
  ariaLabel,
  defaultValue,
  children,
  includeLabel,
}) => {
  return (
    <>
      {includeLabel && <label className="sr-only" aria-label={ariaLabel} />}
      <select
        id={id}
        className={className}
        aria-label={ariaLabel}
        defaultValue={defaultValue}
      >
        {children}
      </select>
    </>
  );
};
