interface OptionProps {
  value: string;
}

export const Option: React.FC<OptionProps> = ({ value, ...props }) => {
  return (
    <option value={value} {...props}>
      {value}
    </option>
  );
};
