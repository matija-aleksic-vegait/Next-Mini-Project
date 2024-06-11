interface FormInputFieldProps {
  id: string;
  placeholder: string;
  type: string;
  formRegistrationOptions: any;
}

export const FormInputField: React.FC<FormInputFieldProps> = ({
  id,
  type,
  placeholder,
  formRegistrationOptions,
  ...props
}) => {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        id={id}
        className="input-box__input-field"
        placeholder={placeholder}
        type={type}
        {...formRegistrationOptions}
        {...props}
      />
    </>
  );
};
