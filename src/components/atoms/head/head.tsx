import { ReactNode } from 'react';

interface HeadProps {
  children: ReactNode;
  className?: string;
}

export const Head: React.FC<HeadProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <header className={className} {...props}>
      {children}
    </header>
  );
};
