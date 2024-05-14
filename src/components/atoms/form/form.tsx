import { ReactNode } from "react";

interface FormProps {
  className: string;
  onSubmit: () => void;
  children: ReactNode;
}

export const Form: React.FC<FormProps> = ({
  className,
  onSubmit,
  children,
}) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
