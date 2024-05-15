import { Paragraph } from "@/components/atoms/paragraph/paragraph";

interface LoadingProps {}

export const LoadingState: React.FC<LoadingProps> = ({ ...props }) => {
  return (
    <Paragraph
      className="loading-status text-align-center"
      label={"Loading..."}
      {...props}
    />
  );
};
