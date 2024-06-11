import { Paragraph } from '@atoms';

interface EmptyStateProps {
  entitiesName: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  entitiesName,
  ...props
}) => {
  return (
    <Paragraph
      className="loading-status text-align-center"
      label={`No ${entitiesName} found...`}
      {...props}
    />
  );
};
