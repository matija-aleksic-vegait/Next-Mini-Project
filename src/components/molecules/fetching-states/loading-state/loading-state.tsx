import { Paragraph } from '@atoms';

interface LoadingProps {}

export const LoadingState: React.FC<LoadingProps> = ({ ...props }) => {
  return (
    <Paragraph
      className="loading-status text-align-center"
      label="Loading..."
      {...props}
    />
  );
};
