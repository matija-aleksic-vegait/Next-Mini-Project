import { ReactNode } from "react";

interface SectionProps {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  ariaLabel,
  className,
  children,
}) => {
  return (
    <section aria-label={ariaLabel} className={className}>
      {children}
    </section>
  );
};
