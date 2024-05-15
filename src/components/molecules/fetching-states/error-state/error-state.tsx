import { Paragraph } from "@/components/atoms/paragraph/paragraph";

interface ErrorStateProps {
  errorMessage: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  errorMessage,
  ...props
}) => {
  return (
    <Paragraph
      className="loading-status text-align-center text-red"
      label={errorMessage}
      {...props}
    />
  );
};
