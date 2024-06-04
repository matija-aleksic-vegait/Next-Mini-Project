import { ReactNode } from 'react';

interface FormProps {
  className: string;
  onSubmit: () => void;
  children: ReactNode;
}

export const Form: React.FC<FormProps> = ({
  className,
  onSubmit,
  children,
  ...props
}) => {
  return (
    <form className={className} onSubmit={onSubmit} {...props}>
      {children}
    </form>
  );
};
