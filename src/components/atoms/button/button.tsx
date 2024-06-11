export type buttonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  className: string;
  type: buttonType;
  label?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  className,
  type,
  onClick,
  children,
  ...props
}) => {
  return (
    <button className={className} type={type} onClick={onClick} {...props}>
      {children}
      {label}
    </button>
  );
};
