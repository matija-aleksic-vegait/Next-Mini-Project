import { ReactNode } from "react";

interface SelectProps {
  id: string;
  className: string;
  children: ReactNode;
  includeLabel: boolean;
  defaultValue?: string;
}

export const Select: React.FC<SelectProps> = ({
  id,
  className,
  defaultValue,
  children,
  includeLabel,
  ...props
}) => {
  return (
    <>
      {includeLabel && <label className="sr-only" />}
      <select
        id={id}
        className={className}
        defaultValue={defaultValue}
        {...props}
      >
        {children}
      </select>
    </>
  );
};
