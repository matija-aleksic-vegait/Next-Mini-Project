interface OptionProps {
  value: string;
  label: string;
  disabled?: boolean;
}

export const Option: React.FC<OptionProps> = ({
  value,
  label,
  disabled,
  ...props
}) => {
  return (
    <option value={value} disabled={disabled} {...props}>
      {label}
    </option>
  );
};
