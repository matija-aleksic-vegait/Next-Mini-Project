import { Paragraph } from "@/components/atoms/paragraph/paragraph";

export const LoadingState: React.FC = () => {
  return (
    <Paragraph
      className="loading-status text-align-center"
      label={"Loading..."}
    />
  );
};

export default LoadingState;
