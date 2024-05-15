import { ReactNode } from "react";

interface FormSelectProps {
  id: string;
  label: string;
  defaultValue: string;
  formRegistrationOptions: any;
  children?: ReactNode;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  id,
  label,
  defaultValue,
  formRegistrationOptions,
  children,
  ...props
}) => {
  return (
    <>
      <label className="sr-only">{label}</label>
      <select
        id={id}
        className="input-box__input-field input-box__select"
        defaultValue={defaultValue}
        {...formRegistrationOptions}
        {...props}
      >
        {children}
      </select>
    </>
  );
};
