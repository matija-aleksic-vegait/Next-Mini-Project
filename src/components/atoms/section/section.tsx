import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  );
};
