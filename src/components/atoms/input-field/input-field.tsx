import { ReactNode } from "react";

export interface InputFieldProps {
  id: string;
  className: string;
  placeholder: string;
  type: string;
  includeLabel: boolean;
  onChange: Function;
  ariaLabel?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  className,
  placeholder,
  ariaLabel,
  includeLabel,
  onChange,
  ...props
}) => {
  return (
    <>
      {includeLabel && (
        <label htmlFor={id} className="sr-only">
          {placeholder}
        </label>
      )}
      <input
        id={id}
        className={className}
        placeholder={placeholder}
        aria-label={ariaLabel}
        onChange={(e: any) => onChange!(e.target.value)}
        {...props}
      />
    </>
  );
};
