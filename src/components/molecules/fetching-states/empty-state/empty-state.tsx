import { Paragraph } from "@/components/atoms/paragraph/paragraph";

interface EmptyStateProps {
  entitiesName: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  entitiesName,
}: {
  entitiesName: string;
}) => {
  return (
    <Paragraph
      className="loading-status text-align-center"
      label={`No ${entitiesName} found...`}
    />
  );
};
