import { ReactNode } from "react";

interface MainProps {
  className: string;
  children: ReactNode;
}

export const Main: React.FC<MainProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <main className={className} {...props}>
      {children}
    </main>
  );
};
