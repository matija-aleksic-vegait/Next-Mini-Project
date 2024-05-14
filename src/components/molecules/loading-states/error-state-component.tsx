import { Paragraph } from "@/components/atoms/paragraph/paragraph";

function ErrorStateComponent({ errorMessage }: { errorMessage: string }) {
  return (
    <Paragraph
      className="loading-status text-align-center"
      label={errorMessage}
    />
  );
}

export default ErrorStateComponent;
